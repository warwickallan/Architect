# P00 — Architect OS

**Kind:** tool (Project Zero) · **Stage:** 4 Build & Evaluate — v0.1 built 2026-09-17, smoke-tested, awaiting Warwick's first real use · **Owner:** Warwick · **Builder:** Claude Code

The working interface for the delivery method. Conversational discovery over a structured project record, with a live knowledge canvas, gate progress as evidence conditions, and artefacts rendered from the record. GitHub is the durable store.

## v0.1 scope — one tab: Discovery

- Create initiative → conversational discovery interview (text; browser dictation optional)
- Live knowledge canvas: extracted entities by type, each **confirm / edit / discuss** before it is committed
- Gate progress: the Discovery Decision's evidence conditions, not a percentage
- Artefacts: discovery pack rendered from the record
- Interview method = `.claude/skills/discovery-interview/SKILL.md`, loaded as the system prompt
- LLM via the local Claude Code login (`claude -p`) — no API key

Explicitly out of scope for v0.1: any other tab, dashboards, architecture editor, exam/learning centre, multi-user, deployment off this machine.

## Architecture decisions

`design/ADR/` — ADR-0001 to ADR-0008, registered in `architecture/ADR/README.md`. Warwick approved the set on 2026-09-17; explain-backs pending.

## Record

`record/` — seeded 2026-09-17 from the decision conversation (facts, pains, hypotheses, unknowns, stakeholders, systems, risks, metrics, requirements, decisions). All entries `confirmed` by Warwick in conversation; sources point at the session.

## Discovery status (gate: Discovery Decision)

| Condition | State |
|---|---|
| Validated problem | ✔ FACT-001, PAIN-001, PAIN-002 |
| Current state | ✔ FACT-002 (proven pattern), PAIN-001 |
| Stakeholder authority | ✔ STK-001–003 |
| Baseline | ✗ none — MET-001/002 need first measurements |
| AI suitability | ✔ interview = agentic (language, ambiguity); record/render = deterministic |
| Data feasibility | ✔ SYS-001/002 |
| Value hypothesis | ✔ HYP-001 |
| Risks | ✔ RSK-001/002 |
| Success criteria | ✔ MET-001/002 |
| **Decision** | **Proceed** — DEC-001, by Warwick, 2026-09-17. Reshaped from "build the OS as an LMS + OS" to "OS only, discovery tab only". |

## Run

`cd products/p00-architect-os && npm install && npm run dev` → http://localhost:5177. Details in `RUNBOOK.md`.

## Smoke test (2026-09-17)

Two turns on a throwaway initiative: opener asked for a concrete recent instance; second turn separated the control's stated purpose from observed practice, proposed 10 typed entities (PAIN, FACT×3, STK×2, SYS×2, MET, UNKNOWN), unlocked `source-of-truth`, moved five gate conditions to *partial*, and asked the right follow-up. Session resume worked. Turn cost dropped from ~$0.75 to cents after `--strict-mcp-config` (FACT-004).
