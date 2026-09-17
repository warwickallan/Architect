/**
 * One interview turn via the local Claude Code login (ADR-0004): spawn `claude -p`.
 * The system prompt is the discovery-interview skill (ADR-0005) plus the current record.
 * No tools, cwd outside the repo (so CLAUDE.md isn't picked up), session resumed per product.
 */
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import { randomUUID } from "node:crypto";
import { DISCOVERY_SKILL } from "./paths.js";
import { summariseConfirmed, type ProductRecord } from "./record.js";

const CLAUDE_BIN = process.env.CLAUDE_BIN ?? "claude";
const TURN_TIMEOUT_MS = Number(process.env.ARCHITECT_TURN_TIMEOUT_MS ?? 240_000);
const MAX_ARG = 28_000; // stay under Windows' ~32k command-line limit

async function skillBody(): Promise<string> {
  const raw = await fs.readFile(DISCOVERY_SKILL, "utf8");
  return raw.replace(/^---[\s\S]*?---\s*/, ""); // strip frontmatter
}

export async function buildSystemPrompt(rec: ProductRecord): Promise<string> {
  const skill = await skillBody();
  let known = summariseConfirmed(rec);
  const pending = rec.pending.length ? `\n\nThere are ${rec.pending.length} proposals awaiting Warwick's confirmation; do not re-propose them.` : "";
  const gate = rec.meta.gateAssessment ? `\n\nYour last gate assessment: ${JSON.stringify(rec.meta.gateAssessment)}` : "";
  const ctx = `\n\n# Current initiative\n\n**${rec.meta.name}** (${rec.meta.id}, kind: ${rec.meta.kind}). Stage ${rec.meta.stage} ${rec.meta.stageName}; gate: ${rec.meta.gate} (${rec.meta.gateStatus}).\n\n## Confirmed record (reference these IDs; never re-propose them)\n\n`;
  const budget = MAX_ARG - skill.length - ctx.length - pending.length - gate.length - 200;
  if (known.length > budget) known = known.slice(0, Math.max(0, budget)) + "\n…(truncated)";
  return skill + ctx + (known || "_empty — this is the first conversation_") + pending + gate;
}

export interface TurnResult {
  raw: string;
  sessionId: string;
  costUsd?: number;
  durationMs?: number;
}

export function runTurn(message: string, systemPrompt: string, sessionId?: string): Promise<TurnResult> {
  const newId = sessionId ? undefined : randomUUID();
  const args = [
    "-p",
    "--output-format", "json",
    "--tools", "",
    "--setting-sources", "",
    "--strict-mcp-config", // no MCP servers: measured 111k -> ~0.5k context tokens per turn
    "--system-prompt", systemPrompt,
    ...(sessionId ? ["--resume", sessionId] : ["--session-id", newId!]),
  ];
  return new Promise((resolve, reject) => {
    const child = spawn(CLAUDE_BIN, args, { cwd: os.tmpdir(), windowsHide: true });
    let out = "";
    let err = "";
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
      } catch {
        reject(new Error(`unparseable claude output: ${out.slice(0, 300)} ${err.slice(0, 300)}`));
      }
    });
    child.stdin.end(message);
  });
}
