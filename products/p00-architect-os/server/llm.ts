/**
 * One conversation turn via the local Claude Code login (ADR-0004): spawn `claude -p`.
 * The system prompt is the stage's skill (ADR-0005) plus the current record.
 * No tools, no MCP, cwd outside the repo, one session per product per stage.
 */
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { SKILLS_DIR } from "./paths.js";
import { summariseConfirmed, type ProductRecord } from "./record.js";
import { stageById } from "./stages.js";

const CLAUDE_BIN = process.env.CLAUDE_BIN ?? "claude";
const TURN_TIMEOUT_MS = Number(process.env.ARCHITECT_TURN_TIMEOUT_MS ?? 240_000);
const MAX_ARG = 28_000; // stay under Windows' ~32k command-line limit

async function skillBody(skill: string): Promise<string> {
  const raw = await fs.readFile(path.join(SKILLS_DIR, skill, "SKILL.md"), "utf8");
  return raw.replace(/^---[\s\S]*?---\s*/, "");
}

export async function buildSystemPrompt(rec: ProductRecord, stage: number): Promise<string> {
  const def = stageById(stage);
  const skill = await skillBody(def.skill);
  const st = rec.meta.stages[stage];
  let known = summariseConfirmed(rec);
  const pendingN = rec.pending.filter((p) => p.stage === stage).length;
  const pending = pendingN ? `\n\nThere are ${pendingN} proposals awaiting Warwick's confirmation; do not re-propose them.` : "";
  const gate = st?.gate && Object.keys(st.gate).length ? `\n\nYour last gate assessment: ${JSON.stringify(st.gate)}` : "";
  const ctx = `\n\n# Current initiative\n\n**${rec.meta.name}** (${rec.meta.id}, kind: ${rec.meta.kind}). You are running stage ${def.id} **${def.name}**; gate: ${def.gate}. Stages already passed: ${Object.entries(rec.meta.stages).filter(([, s]) => s.gateStatus === "passed").map(([k]) => k).join(", ") || "none"}.\n\n## Confirmed record (reference these IDs; never re-propose them)\n\n`;
  const budget = MAX_ARG - skill.length - ctx.length - pending.length - gate.length - 200;
  if (known.length > budget) known = known.slice(0, Math.max(0, budget)) + "\n…(truncated)";
  return skill + ctx + (known || "_empty — nothing confirmed yet_") + pending + gate;
}

export interface TurnResult { raw: string; sessionId: string; costUsd?: number; durationMs?: number }

export function runTurn(message: string, systemPrompt: string, sessionId?: string): Promise<TurnResult> {
  const newId = sessionId ? undefined : randomUUID();
  const args = [
    "-p", "--output-format", "json",
    "--tools", "", "--setting-sources", "",
    "--strict-mcp-config", // no MCP servers: measured 111k -> ~0.5k context tokens per turn
    "--system-prompt", systemPrompt,
    ...(sessionId ? ["--resume", sessionId] : ["--session-id", newId!]),
  ];
  return new Promise((resolve, reject) => {
    const child = spawn(CLAUDE_BIN, args, { cwd: os.tmpdir(), windowsHide: true });
    let out = ""; let err = "";
    const timer = setTimeout(() => { child.kill(); reject(new Error(`claude turn timed out after ${TURN_TIMEOUT_MS} ms`)); }, TURN_TIMEOUT_MS);
    child.stdout.on("data", (d) => (out += d));
    child.stderr.on("data", (d) => (err += d));
    child.on("error", (e) => { clearTimeout(timer); reject(e); });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code !== 0 && !out) return reject(new Error(`claude exited ${code}: ${err.slice(0, 500)}`));
      try {
        const j = JSON.parse(out) as { result?: string; session_id?: string; is_error?: boolean; total_cost_usd?: number; duration_ms?: number };
        if (j.is_error) return reject(new Error(`claude error: ${j.result ?? err}`));
        resolve({ raw: j.result ?? "", sessionId: j.session_id ?? sessionId ?? newId!, costUsd: j.total_cost_usd, durationMs: j.duration_ms });
      } catch { reject(new Error(`unparseable claude output: ${out.slice(0, 300)} ${err.slice(0, 300)}`)); }
    });
    child.stdin.end(message);
  });
}
