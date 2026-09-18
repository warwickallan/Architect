# 04 — Data, authority & constraints: Architect OS

> Rendered from `record/` by Architect OS on 2026-09-18 17:46. Do not edit — change the record.

## Systems and source of truth

| ID | System / data | Authoritative | Read | Write | Sensitivity |
|---|---|---|---|---|---|
| SYS-001 | GitHub repository warwickallan/Architect — the durable store for the record, artefacts, method and code. | yes | file system / git | file system / git |  |
| SYS-002 | Claude Code CLI (logged in on Yoga) — LLM runtime for the interview via `claude -p`; no API key. | no | spawned process | n/a |  |

## Requirements and constraints

- **REQ-001** v0.1 has exactly one tab: Discovery. Create initiative → interview → record → artefacts → Discovery Decision. _(→ PAIN-001)_ `CPMAI-2.4`
- **REQ-002** Every extracted entity is shown to Warwick with confirm / edit / discuss before it is committed to the record. _(→ DEC-007)_ `CPMAI-1.5 AB100-3.4.8`
- **REQ-003** The record is files in the repo (JSON per entity type); artefacts are rendered from it; nothing is stored outside GitHub. _(→ DEC-003, PAIN-002)_ `CPMAI-3.3`
- **REQ-004** The interview method is loaded from `.claude/skills/discovery-interview/SKILL.md`; the app has no hard-coded prompt. _(→ DEC-005, HYP-002)_
- **REQ-005** Dictation input via the browser (Web Speech API) behind an input adapter so the provider can be swapped. _(→ DEC-006)_
- **REQ-006** Gate progress is shown as the Discovery Decision's evidence conditions (met / missing), never as a percentage complete. `CPMAI-2.8`
- **REQ-007** Artefacts (discovery pack) are rendered read-only from the record in the app and written to `discovery/` in the repo. _(→ REQ-003)_ `CPMAI-1.5`

## Risks, assumptions, dependencies

| ID | Type | Statement | Impact | Treatment | Owner |
|---|---|---|---|---|---|
| RSK-001 | risk | Building the OS delays the real business product (P01), which is where career evidence comes from. | P01 MVP slips beyond the 3–5 week target; evidence for the DEPT-type role arrives late. | v0.1 scope is one tab only; P01 discovery starts the day the tab works; OS features are added only when a stage needs them. | Warwick |
| RSK-002 | risk | The OS is built on a generic web stack and exercises no AB-410/AB-620 objectives. | Microsoft-stack evidence is not produced by P00. | Accepted. P01 (Tech PMO AI) is where Power Platform / Copilot Studio evidence comes from. | Warwick |

## Unknowns

- **UNKNOWN-001** Which entity types, fields and links actually matter — to emerge from running P01 discovery through the OS, not designed up front. _(→ HYP-002, DEC-003)_ `CPMAI-3.1`
- **UNKNOWN-002** Whether `claude -p` (print mode) or the Claude Agent SDK behaves better on Windows for streaming and session continuity. _(→ DEC-004)_ `CPMAI-2.2`
