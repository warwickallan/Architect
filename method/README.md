# The delivery method — "Product Zero"

Architect's reusable AI transformation / solution-architecture playbook. Built once on the first real product, reused and improved on each later one. By project two Warwick is operating his own method, not relearning discovery.

**Version:** 0.1 (2026-09-17) — templates only; no worked example yet. Bump after each project's retrospective and log below.

## Lifecycle → deliverable → template → lesson

| Stage | Lens | Professional deliverable | Template | Taught by |
|---|---|---|---|---|
| 0 Candidate selection | CPMAI | Candidate briefs + scored selection | `templates/project-brief-template.md` | products/README.md exercise |
| 1 Discovery | CPMAI (+AB-100) | **Discovery pack** (six parts, below) ending in a Discovery Decision | `templates/discovery/` | L001–L003 |
| 2 Architecture | AB-100 | Architecture pack v0.1 (context, boundaries, authority, NFRs, diagrams), ADRs, trace table | `templates/adr-template.md`, `templates/trace-template.md` | L004 |
| 3 Build | AB-410 / AB-620 | Requirements/backlog, security & authority model, implementation/config evidence, runbook | `templates/build-task-template.md` | JIT lessons |
| 4 Evaluate | CPMAI / AB-620 / AB-100 | Test/evaluation datasets and results — **seeded from the discovery evaluation plan** | `05-evaluation-plan.md` → `tests/` | JIT lessons |
| 5 Operate | CPMAI / AB-100 | Deployment/ALM evidence, monitoring/telemetry plan, governance & HIL model, adoption/change notes | (added when first needed) | JIT lessons |
| 6 Review | CPMAI + AB-100 | Realised-value review, architecture review, lessons learned | (added at first product review) | — |
| 7 Portfolio | — | Case study / portfolio pack; sanitised derivative for `publishable/` | (added at first case study) | — |

Templates for stages 5–7 are deliberately not written yet: they'll be drafted from the first real need, not speculated.

## The discovery pack

| # | Artefact | Answers | Feeds |
|---|---|---|---|
| 01 | Discovery brief | What problem, for whom, how big, why it matters, what would stop us | everything |
| 02 | Current-state pack | Real process (visual + steps), actors, systems, handoffs, decisions, controls, pain; stakeholder & authority model | 03, HIL design, architecture authority boundaries |
| 03 | Value & suitability assessment | Baseline, value/ROI hypothesis, kill criteria; per-step intervention classification (eliminate / deterministic / conventional app / AI-assisted / agentic / human) with reasons | 06, ADRs, realised-value review |
| 04 | Data, authority & constraints pack | Systems, entities, source of truth, read/write paths, permissions, sensitivity, unknowns; risks/assumptions/dependencies (linked to `ASSUMPTIONS.md`) | architecture, security model |
| 05 | Evaluation plan | Business success + system/AI success metrics; seed test cases (happy / failure / boundary / HIL) | the actual test set — never a separate suite written later |
| 06 | Discovery decision | Proceed / reshape / stop; intervention; MVP boundary; out of scope; assumptions; constraints; success criteria; inputs architecture must respect | formal handoff to AB-100 |

Rules: Warwick authors the content; Claude scaffolds, challenges and formats. Combine parts if a project is small — coverage matters, not file count. A pack that concludes "do not use AI here" is a successful pack.

## Learning artefacts vs professional artefacts

| Learning (per lesson) | Professional (per product) |
|---|---|
| lesson, slides, narration/storyboard, diagram, curated resources, lab, quiz, explain-back, spaced retest, objective mapping | discovery pack, process model, value case, suitability assessment, data/authority model, architecture diagrams, ADRs, backlog, security/authority model, implementation evidence, test datasets & results, ALM evidence, telemetry plan, governance/HIL model, runbook, adoption notes, realised-value review, architecture review, case study |

Don't duplicate: the professional artefact is the lab and the evidence wherever possible. One artefact may satisfy CPMAI, AB-100, AB-410 and AB-620 objectives at once — cite all the IDs, don't copy the file.

## Traceability

Each product keeps `TRACE.md` (`templates/trace-template.md`): problem → discovery evidence → requirement/constraint → ADR → implementation → test/evaluation → outcome → realised value → portfolio evidence. The coverage matrix's `Product`/`Evidence` columns point at these paths.

## Method changelog

| Version | Date | Change | Triggered by |
|---|---|---|---|
| 0.1 | 2026-09-17 | Discovery pack (6 parts), trace table, lifecycle table defined | ChatGPT programme instruction; no project yet |
