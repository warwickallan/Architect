# Architect

Warwick's AI solution architecture learning-and-delivery programme. Real, production-shaped AI products for PMO/implementation work are built here while deliberately developing and evidencing the skills of an **AI solutions architect** — not merely an AI-assisted builder.

Architect produces **two things at once**: the learning, and a **reusable AI-consulting delivery method** (discovery pack, business case, suitability assessment, architecture pack, ADRs, evaluation plan, governance model, case study) that is built on the first project and reused on every later one.

Four frameworks are woven into one programme, interleaved by project need rather than studied in sequence:

| Layer | Role | Exam plan |
|---|---|---|
| **PMI-CPMAI** | Lifecycle / control loop — should we, why, value, data, risk, evaluation, operationalisation | Take (first) |
| **AB-100** | Architecture spine — what the end-to-end solution should be | Take (last) |
| **AB-410** | Enterprise process / data / workflow / deterministic automation foundation | Learn fully; exam optional |
| **AB-620** | Intelligent / agentic layer — agents, knowledge, tools, MCP, HIL, evaluation | Take |

## Start here (in order)

1. `PROJECT.md` — why Architect exists, target outcome, four-framework model, operating loop, who does what
2. `CLAUDE.md` — operating rules for Claude Code sessions
3. `curriculum/MASTER-SYLLABUS.md` — how the frameworks integrate; status ladder
4. `method/README.md` — the delivery playbook ("Product Zero"): lifecycle stage → artefact → template → lesson
5. `progress/DASHBOARD.md` — current state and next action
6. `products/README.md` — candidate selection and discovery (nothing selected yet — deliberate)

Everything else is reachable from those six. The founding brief is `references/deep-research-2026-09-17.md`.

## Repository map

```
curriculum/    syllabus, objective registers, coverage matrix, gap backlog
method/        the reusable delivery method: lifecycle, deliverables, method changelog
templates/     lesson, visual lesson, build task, ADR, evidence, project brief, trace,
               discovery/ (the six-part discovery pack)
references/    source register, version watch, curated learning, founding brief
architecture/  cross-cutting principles and the ADR register
products/      real projects: one folder per product, each instantiating the method
lessons/       visual-first lesson packages (index + numbering rules)
evidence/      proof Warwick can explain / perform / defend — not "Claude built it"
progress/      dashboard and weekly review
publishable/   sanitised derivatives only; nothing customer-specific
```

## Operating principles

1. Business outcome before technology. Discovery precedes architecture; architecture precedes implementation.
2. Architecture is provisional and evolves with evidence; CPMAI and AB-100 return after every build.
3. Authoritative business systems remain authoritative.
4. Deterministic where deterministic is enough; agentic where language, ambiguity or judgement adds value; "no AI here" is a valid finding.
5. AI authority is explicit and risk-based; human review is risk-based, not ceremonial.
6. Claude accelerates but must not hide the concepts Warwick is meant to learn; discovery content is Warwick's.
7. Every significant piece of work maps to syllabus objectives; every material architecture change produces an ADR; every product keeps a trace table.
8. Evidence what was *learned*, not what was generated. The professional artefact is, wherever possible, also the lab and the evidence.
9. Official/primary documentation is the source of truth; versions and retrieval dates are recorded.
10. Private evidence and public course material stay separate.

## Definition of success

Useful products shipped with measurable value · Warwick can explain and defend the architecture · objectives carry practical evidence · CPMAI, AB-620 and AB-100 readiness · portfolio-quality case studies · a delivery toolkit reusable with a future client · reusable, sanitised teaching material.
