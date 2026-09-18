/**
 * Render each stage's artefacts from confirmed entities only (ADR-0003, ADR-0007).
 * Files under products/<id>/artefacts/<stage>/ are derived — never hand-edited.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { productDir } from "./paths.js";
import type { Entity, ProductRecord } from "./record.js";
import { stageById } from "./stages.js";

type Pack = Record<string, string>;
const C = (list: Entity[]) => list.filter((e) => e.status === "confirmed");
const has = (e: Entity, tag: string) => e.tags?.includes(tag);
const tagged = (list: Entity[], tag: string) => C(list).filter((e) => has(e, tag));
const ids = (e: Entity) => (e.links?.length ? ` _(→ ${e.links.join(", ")})_` : "");
const objs = (e: Entity) => (e.objectives?.length ? ` \`${e.objectives.join(" ")}\`` : "");
const li = (list: Entity[]) => (list.length ? list.map((e) => `- **${e.id}** ${e.text}${ids(e)}${objs(e)}`).join("\n") : "_none yet_");
const s = (v: unknown) => (v == null ? "" : String(v));
const header = (title: string, rec: ProductRecord) =>
  `# ${title}: ${rec.meta.name}\n\n> Rendered from \`record/\` by Architect OS on ${new Date().toISOString().slice(0, 16).replace("T", " ")}. Do not edit — change the record.\n\n`;

function table(list: Entity[], cols: [string, (e: Entity) => string][]) {
  if (!list.length) return "_none yet_";
  const head = `| ${cols.map((c) => c[0]).join(" | ")} |\n|${cols.map(() => "---").join("|")}|`;
  return [head, ...list.map((e) => `| ${cols.map((c) => c[1](e).replace(/\|/g, "/")).join(" | ")} |`)].join("\n");
}
const stkTable = (l: Entity[]) => {
  const roles = ["requests", "performs", "decides", "approves", "ownsProcess", "ownsData", "operates", "bearsRisk"];
  return table(l, [["ID", (e) => e.id], ["Stakeholder", (e) => e.text], ...roles.map((r): [string, (e: Entity) => string] => [r, (e) => ((e.roles as Record<string, boolean> | undefined)?.[r] ? "✔" : "")])]);
};
const sysTable = (l: Entity[]) => table(l, [["ID", (e) => e.id], ["System / data", (e) => e.text], ["Authoritative", (e) => (e.authoritative ? "yes" : "no")], ["Read", (e) => s(e.read)], ["Write", (e) => s(e.write)], ["Sensitivity", (e) => s(e.sensitivity)]]);
const rskTable = (l: Entity[]) => table(l, [["ID", (e) => e.id], ["Type", (e) => s(e.type ?? "risk")], ["Statement", (e) => e.text], ["Impact", (e) => s(e.impact)], ["Treatment", (e) => s(e.treatment)], ["Owner", (e) => s(e.owner)]]);
const metTable = (l: Entity[], actual = false) => table(l, [["ID", (e) => e.id], ["Kind", (e) => s(e.kind)], ["Metric", (e) => e.text], ["Baseline", (e) => s(e.baseline ?? "—") + (e.estimate ? " (est.)" : "")], ["Target", (e) => s(e.target ?? "—")], ...(actual ? [["Actual", (e: Entity) => s(e.actual ?? "—")] as [string, (e: Entity) => string]] : []), ["Measured how", (e) => s(e.measure)]]);
const actTable = (l: Entity[]) => table(l, [["ID", (e) => e.id], ["Action", (e) => e.text], ["Owner", (e) => s(e.owner)], ["Size", (e) => s(e.size)], ["Due", (e) => s(e.due)], ["State", (e) => s(e.state ?? "")]]);
const testTable = (l: Entity[]) => table(l, [["ID", (e) => e.id], ["Class", (e) => s(e.class)], ["Scenario", (e) => e.text], ["Input", (e) => s(e.input)], ["Expected", (e) => s(e.expected)], ["Result", (e) => s(e.result ?? "untested")]]);
const gateLines = (rec: ProductRecord, stage: number) => {
  const st = rec.meta.stages[stage];
  const def = stageById(stage);
  return Object.entries(def.conditions).map(([k, label]) => `- ${label}: **${st?.gate?.[k] ?? "not assessed"}**`).join("\n");
};

export function renderStage(rec: ProductRecord, stage: number): Pack {
  const E = rec.entities;
  const F = C(E.FACT), P = C(E.PAIN), H = C(E.HYP), U = C(E.UNKNOWN), S = C(E.STK), Y = C(E.SYS), R = C(E.RSK), M = C(E.MET), Q = C(E.REQ), D = C(E.DEC), A = C(E.ACT), T = C(E.TEST);
  const h = (t: string) => header(t, rec);
  switch (stage) {
    case 0:
      return {
        "candidate-brief.md": h("Candidate brief") + `## The pain\n\n${li(P)}\n\n## What we know\n\n${li(F)}\n\n## Systems touched\n\n${sysTable(Y)}\n\n## What "better" would measure\n\n${metTable(M)}\n\n## First instincts (hypotheses to test)\n\n${li(H)}\n\n## Feasibility and risk\n\n${rskTable(R)}\n\n## Selection\n\n${li(D)}\n\n## Gate — ${stageById(0).gate}\n\n${gateLines(rec, 0)}\n`,
      };
    case 1:
      return {
        "01-discovery-brief.md": h("01 — Discovery brief") + `## Problem / opportunity\n\n${li(P)}\n\n## What we know\n\n${li(F.filter((e) => !has(e, "process") && !has(e, "suitability")))}\n\n## Hypotheses to test\n\n${li(H)}\n\n## Open questions\n\n${li(U)}\n`,
        "02-current-state-pack.md": h("02 — Current state") + `## Process (facts tagged \`process\`)\n\n${li(tagged(E.FACT, "process"))}\n\n## Stakeholder and authority model\n\n${stkTable(S)}\n`,
        "03-value-and-suitability.md": h("03 — Value & AI-suitability assessment") + `## Baseline and targets\n\n${metTable(M.filter((e) => e.kind !== "system"))}\n\n## Value hypotheses\n\n${li(H)}\n\n## Intervention classification (facts tagged \`suitability\`)\n\n${li(tagged(E.FACT, "suitability"))}\n`,
        "04-data-authority-constraints.md": h("04 — Data, authority & constraints") + `## Systems and source of truth\n\n${sysTable(Y)}\n\n## Requirements and constraints\n\n${li(Q)}\n\n## Risks, assumptions, dependencies\n\n${rskTable(R)}\n\n## Unknowns\n\n${li(U)}\n`,
        "05-evaluation-plan.md": h("05 — Evaluation plan") + `## Business success\n\n${metTable(M.filter((e) => e.kind !== "system"))}\n\n## System / AI success\n\n${metTable(M.filter((e) => e.kind === "system"))}\n\n## Seed test cases\n\n${testTable(T)}\n`,
        "06-discovery-decision.md": h("06 — Discovery decision") + `## Gate — ${stageById(1).gate}\n\n${gateLines(rec, 1)}\n\n## Decisions\n\n${li(D)}\n`,
      };
    case 2:
      return {
        "01-context-and-target-architecture.md": h("01 — Context & target architecture") + `## Target architecture (facts tagged \`architecture\`)\n\n${li(tagged(E.FACT, "architecture"))}\n\n## Systems\n\n${sysTable(Y)}\n`,
        "02-boundaries.md": h("02 — AI / deterministic and trust boundaries") + `## Deterministic vs agentic (facts tagged \`boundary\`)\n\n${li(tagged(E.FACT, "boundary"))}\n\n## Trust boundaries (facts tagged \`trust\`)\n\n${li(tagged(E.FACT, "trust"))}\n`,
        "03-authority-and-hil.md": h("03 — Authority & human-in-the-loop") + `## Stakeholder authority\n\n${stkTable(S)}\n\n## Authority rules (requirements tagged \`authority\`)\n\n${li(tagged(E.REQ, "authority"))}\n`,
        "04-nfrs-and-integrations.md": h("04 — NFRs & integrations") + `## Non-functional requirements (tagged \`nfr\`)\n\n${li(tagged(E.REQ, "nfr"))}\n\n## Integration decisions\n\n${li(D.filter((e) => has(e, "integration")))}\n\n## Unverified capabilities\n\n${li(U)}\n`,
        "05-adr-register.md": h("05 — Architecture decisions") + `## ADRs (decisions tagged \`adr\`)\n\n${li(tagged(E.DEC, "adr"))}\n\n## Gate — ${stageById(2).gate}\n\n${gateLines(rec, 2)}\n`,
      };
    case 3:
      return {
        "01-scope-and-plan.md": h("01 — Scope & plan") + `## Scope\n\n${li(tagged(E.DEC, "scope"))}\n\n## Milestones\n\n${actTable(tagged(E.ACT, "milestone"))}\n\n## Resources (facts tagged \`resource\`)\n\n${li(tagged(E.FACT, "resource"))}\n`,
        "02-backlog.md": h("02 — Backlog") + `${actTable(tagged(E.ACT, "backlog"))}\n`,
        "03-raid.md": h("03 — RAID") + `${rskTable(R)}\n\n## Open unknowns\n\n${li(U)}\n`,
        "04-stakeholders-and-change.md": h("04 — Stakeholders, comms & adoption") + `${stkTable(S)}\n\n## Comms and adoption actions\n\n${actTable(A.filter((e) => has(e, "comms") || has(e, "adoption") || has(e, "training")))}\n\n## Access\n\n${actTable(tagged(E.ACT, "access"))}\n\n## Gate — ${stageById(3).gate}\n\n${gateLines(rec, 3)}\n`,
      };
    case 4:
      return {
        "01-build-log.md": h("01 — Build log") + `## Backlog status\n\n${actTable(tagged(E.ACT, "backlog"))}\n\n## Architecture amendments\n\n${li(tagged(E.DEC, "adr-amend"))}\n`,
        "02-evaluation.md": h("02 — Evaluation set & results") + `## System / AI metrics\n\n${metTable(M.filter((e) => e.kind === "system"), true)}\n\n## Test cases\n\n${testTable(T)}\n`,
        "03-security-and-uat.md": h("03 — Security, audit & UAT") + `## Audit (facts tagged \`audit\`)\n\n${li(tagged(E.FACT, "audit"))}\n\n## Reviews\n\n${li(D.filter((e) => has(e, "security-review") || has(e, "uat")))}\n\n## Warwick's evidence (tagged \`evidence\`)\n\n${li([...E.FACT, ...E.ACT, ...E.TEST].filter((e) => e.status === "confirmed" && has(e, "evidence")))}\n\n## Gate — ${stageById(4).gate}\n\n${gateLines(rec, 4)}\n`,
      };
    case 5:
      return {
        "01-deployment-and-alm.md": h("01 — Deployment & ALM") + `## Deployment actions\n\n${actTable(tagged(E.ACT, "deploy"))}\n\n## ALM evidence (facts tagged \`alm\`)\n\n${li(tagged(E.FACT, "alm"))}\n`,
        "02-monitoring-and-governance.md": h("02 — Monitoring & governance") + `## Telemetry\n\n${metTable(M.filter((e) => e.kind === "system"), true)}\n\n## Governance (requirements tagged \`governance\`)\n\n${li(tagged(E.REQ, "governance"))}\n\n## Contingency\n\n${actTable(tagged(E.ACT, "contingency"))}\n`,
        "03-runbook-and-handover.md": h("03 — Runbook & handover") + `## Runbook\n\n${actTable(tagged(E.ACT, "runbook"))}\n\n## Operators\n\n${stkTable(S.filter((e) => (e.roles as Record<string, boolean> | undefined)?.operates))}\n\n## Adoption\n\n${metTable(M.filter((e) => has(e, "adoption")), true)}\n\n## Handover\n\n${li(tagged(E.DEC, "handover"))}\n\n## Gate — ${stageById(5).gate}\n\n${gateLines(rec, 5)}\n`,
      };
    case 6:
      return {
        "01-realised-value.md": h("01 — Realised value") + `## Hypotheses\n\n${li(H)}\n\n## Metrics — baseline vs actual\n\n${metTable(M, true)}\n\n## Verdict\n\n${li(tagged(E.DEC, "value"))}\n`,
        "02-architecture-review.md": h("02 — Architecture review") + `${li(tagged(E.DEC, "architecture-review"))}\n\n## ADRs as decided\n\n${li(tagged(E.DEC, "adr"))}\n`,
        "03-lessons-and-method.md": h("03 — Lessons & method changes") + `## Lessons (facts tagged \`lesson\`)\n\n${li(tagged(E.FACT, "lesson"))}\n\n## Method changes\n\n${actTable(tagged(E.ACT, "method"))}\n`,
        "04-case-study.md": h("04 — Case study") + `## Problem\n\n${li(P)}\n\n## Value hypothesis\n\n${li(H)}\n\n## Architecture\n\n${li(tagged(E.FACT, "architecture"))}\n\n## Key decisions\n\n${li(tagged(E.DEC, "adr"))}\n\n## Evaluation\n\n${testTable(T)}\n\n## Impact\n\n${metTable(M, true)}\n\n## Lessons\n\n${li(tagged(E.FACT, "lesson"))}\n\n## Gate — ${stageById(6).gate}\n\n${gateLines(rec, 6)}\n`,
      };
    default:
      return {};
  }
}

export async function writeStagePack(id: string, stage: number, pack: Pack) {
  const key = stageById(stage).key;
  const dir = path.join(productDir(id), "artefacts", `${stage}-${key}`);
  await fs.mkdir(dir, { recursive: true });
  await Promise.all(Object.entries(pack).map(([f, md]) => fs.writeFile(path.join(dir, f), md, "utf8")));
}
