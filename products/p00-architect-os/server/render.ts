/**
 * Render the discovery pack from confirmed entities only (ADR-0003, ADR-0007).
 * Output files under products/<id>/discovery/ are derived — never hand-edited.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { discoveryDir } from "./paths.js";
import type { Entity, ProductRecord } from "./record.js";

const confirmed = (list: Entity[]) => list.filter((e) => e.status === "confirmed");
const has = (e: Entity, tag: string) => e.tags?.includes(tag);
const ids = (e: Entity) => (e.links?.length ? ` _(→ ${e.links.join(", ")})_` : "");
const objs = (e: Entity) => (e.objectives?.length ? ` \`${e.objectives.join(" ")}\`` : "");
const li = (list: Entity[]) => (list.length ? list.map((e) => `- **${e.id}** ${e.text}${ids(e)}${objs(e)}`).join("\n") : "_none yet_");

const header = (title: string, rec: ProductRecord) =>
  `# ${title}: ${rec.meta.name}\n\n> Rendered from \`record/\` by Architect OS on ${new Date().toISOString().slice(0, 16).replace("T", " ")}. Do not edit — change the record.\n\n`;

function stkTable(list: Entity[]) {
  if (!list.length) return "_none yet_";
  const cols = ["requests", "performs", "decides", "approves", "ownsProcess", "ownsData", "operates", "bearsRisk"];
  const head = `| ID | Stakeholder | ${cols.join(" | ")} |\n|---|---|${cols.map(() => "---").join("|")}|`;
  const rows = list.map((e) => {
    const r = (e.roles as Record<string, boolean> | undefined) ?? {};
    return `| ${e.id} | ${e.text} | ${cols.map((c) => (r[c] ? "✔" : "")).join(" | ")} |`;
  });
  return [head, ...rows].join("\n");
}

function sysTable(list: Entity[]) {
  if (!list.length) return "_none yet_";
  const head = "| ID | System / data | Authoritative | Read | Write | Sensitivity |\n|---|---|---|---|---|---|";
  const rows = list.map(
    (e) => `| ${e.id} | ${e.text} | ${e.authoritative ? "yes" : "no"} | ${e.read ?? ""} | ${e.write ?? ""} | ${e.sensitivity ?? ""} |`,
  );
  return [head, ...rows].join("\n");
}

function rskTable(list: Entity[]) {
  if (!list.length) return "_none yet_";
  const head = "| ID | Type | Statement | Impact | Treatment | Owner |\n|---|---|---|---|---|---|";
  const rows = list.map((e) => `| ${e.id} | ${e.type ?? "risk"} | ${e.text} | ${e.impact ?? ""} | ${e.treatment ?? ""} | ${e.owner ?? ""} |`);
  return [head, ...rows].join("\n");
}

function metTable(list: Entity[]) {
  if (!list.length) return "_none yet_";
  const head = "| ID | Kind | Metric | Baseline | Target | Measured how |\n|---|---|---|---|---|---|";
  const rows = list.map(
    (e) =>
      `| ${e.id} | ${e.kind ?? ""} | ${e.text} | ${e.baseline ?? "—"}${e.estimate ? " (est.)" : ""} | ${e.target ?? "—"} | ${e.measure ?? ""} |`,
  );
  return [head, ...rows].join("\n");
}

export function renderPack(rec: ProductRecord): Record<string, string> {
  const F = confirmed(rec.entities.FACT);
  const P = confirmed(rec.entities.PAIN);
  const H = confirmed(rec.entities.HYP);
  const U = confirmed(rec.entities.UNKNOWN);
  const S = confirmed(rec.entities.STK);
  const Y = confirmed(rec.entities.SYS);
  const R = confirmed(rec.entities.RSK);
  const M = confirmed(rec.entities.MET);
  const Q = confirmed(rec.entities.REQ);
  const D = confirmed(rec.entities.DEC);

  const brief =
    header("01 — Discovery brief", rec) +
    `## Problem / opportunity\n\n${li(P)}\n\n## What we know\n\n${li(F.filter((e) => !has(e, "process") && !has(e, "suitability")))}\n\n## Hypotheses to test\n\n${li(H)}\n\n## Open questions\n\n${li(U)}\n`;

  const current =
    header("02 — Current state", rec) +
    `## Process (facts tagged \`process\`)\n\n${li(F.filter((e) => has(e, "process")))}\n\n## Stakeholder and authority model\n\n${stkTable(S)}\n`;

  const value =
    header("03 — Value & AI-suitability assessment", rec) +
    `## Baseline and targets\n\n${metTable(M.filter((e) => e.kind !== "system"))}\n\n## Value hypotheses\n\n${li(H)}\n\n## Intervention classification (facts tagged \`suitability\`)\n\n${li(F.filter((e) => has(e, "suitability")))}\n`;

  const data =
    header("04 — Data, authority & constraints", rec) +
    `## Systems and source of truth\n\n${sysTable(Y)}\n\n## Requirements and constraints\n\n${li(Q)}\n\n## Risks, assumptions, dependencies\n\n${rskTable(R)}\n\n## Unknowns\n\n${li(U)}\n`;

  const evalPlan =
    header("05 — Evaluation plan", rec) +
    `## Business success\n\n${metTable(M.filter((e) => e.kind !== "system"))}\n\n## System / AI success\n\n${metTable(M.filter((e) => e.kind === "system"))}\n\n_Seed test cases are added during architecture from these metrics._\n`;

  const gate = rec.meta.gateAssessment ?? {};
  const gateLines = Object.entries(gate).map(([k, v]) => `- ${k}: **${v}**`).join("\n") || "_no assessment yet_";
  const decision =
    header("06 — Discovery decision", rec) +
    `**Gate status:** ${rec.meta.gateStatus}\n\n## Gate assessment\n\n${gateLines}\n\n## Decisions\n\n${li(D)}\n`;

  return {
    "01-discovery-brief.md": brief,
    "02-current-state-pack.md": current,
    "03-value-and-suitability.md": value,
    "04-data-authority-constraints.md": data,
    "05-evaluation-plan.md": evalPlan,
    "06-discovery-decision.md": decision,
  };
}

export async function writePack(id: string, pack: Record<string, string>) {
  const dir = discoveryDir(id);
  await fs.mkdir(dir, { recursive: true });
  await Promise.all(Object.entries(pack).map(([f, md]) => fs.writeFile(path.join(dir, f), md, "utf8")));
}
