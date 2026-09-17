# Master syllabus

One programme, four frameworks, interleaved by project need. This file explains how they fit; the objective registers hold the detail.

| Framework | Register | Objectives | Role in Architect | Exam |
|---|---|---|---|---|
| PMI-CPMAI | `objectives/cpmai.md` | 37 tasks in 5 domains | Lifecycle / control loop | Take first |
| AB-100 | `objectives/ab-100.md` | 74 | Architecture spine | Take last |
| AB-410 | `objectives/ab-410.md` | 48 | Enterprise process / data / workflow foundation | Learn fully; exam optional |
| AB-620 | `objectives/ab-620.md` | 44 | Intelligent / agentic layer | Take |

`COVERAGE-MATRIX.csv` has one row per objective (203 today). `GAP-BACKLOG.md` lists objectives the current project won't reach and how they'll be covered.

## Objective IDs

`CODE-area.subarea.n`, e.g. `AB620-2.2.2` = "Configure MCP tools"; PMI-CPMAI has no sub-area level so its IDs are `CPMAI-domain.task`, e.g. `CPMAI-2.5` = "Determine ROI". IDs are stable: a syllabus refresh may retire an ID but never renumbers one. All work — lessons, ADRs, evidence, commits — cites IDs so coverage can be audited mechanically.

## How the four layers interleave on any piece of work

```
CPMAI   lifecycle / control loop — should we? why? value? data? risk? evaluate? operate? govern? improve?
AB-100  architecture spine — given requirement and constraints, what is the end-to-end solution?
AB-410  enterprise process / data / workflow / deterministic automation foundation
AB-620  intelligent / agentic layer — agents, knowledge, RAG, tools, MCP/APIs, HIL, evaluation
```

CPMAI opens and closes every cycle (discovery before architecture; evaluation, operationalisation and realised value after build); AB-100 reviews the architecture against that evidence. The lesson that teaches "Dataverse relationships" is an AB-410 lesson, but it must also answer the AB-100 question (why is this the data-authority choice?) and the CPMAI question (what data does the value depend on?). Lessons therefore map to IDs across frameworks, not one, and one professional artefact may evidence objectives in all four — cite them all on the one artefact rather than duplicating it.

## Opening sequence

L000 orientation → L001 business problem & value (CPMAI) → L002 AI suitability (CPMAI + AB-100) → L003 data, authority, constraints, evaluation plan, Discovery Decision (CPMAI + AB-100) → L004 architecture hypothesis v0.1 (AB-100) → then AB-410/AB-620 just-in-time. Detail in `../lessons/README.md`; artefacts in `../templates/discovery/`.

## CPMAI: methodology phases vs exam domains

The CPMAI *methodology* is six phases (Business Understanding → Data Understanding → Data Preparation → Model Development → Model Evaluation → Model Operationalisation) and that is the lifecycle taught in `method/README.md`. The *exam* (PMI-CPMAI, September 2025 ECO) is five domains: Responsible & Trustworthy AI 15% · Business Needs & Solutions 26% · Data Needs 26% · Model Development & Evaluation 16% · Operationalise 17%. The register holds the 37 exam tasks. Domain II reads almost exactly like the discovery pack (`templates/discovery/`) — that is where most CPMAI evidence will come from. Domain I (responsible AI) cuts across every stage and must be cited wherever privacy, transparency, bias, compliance or audit trail is actually handled, not collected in a separate lesson.

Six earlier placeholder IDs (`CPMAI-1.1.1`–`1.1.6`) were removed on 2026-09-17 with no progress recorded against them; they were never official objectives.

## Status ladder

| Status | Meaning | Advanced by |
|---|---|---|
| Unseen | Not yet touched | — |
| Explained | Concept explained; Warwick can restate it | Lesson |
| Labbed | Warwick performed a representative task himself | Lab evidence |
| Applied | Used in a real product | Product evidence (Claude may have built it) |
| Evidenced | Warwick can explain why, name alternatives, perform/troubleshoot, relate to Architect | `templates/evidence-template.md`, reviewed |
| Exam-ready | Evidenced + delayed retest passed | Retest record |

"Claude built it" caps at *Applied*.

## Weighting strategy

Official weightings are recorded per area in each register. Priority for lesson/lab time is: (weight × relevance to current product × current gap). High-weight AB-620 and AB-100 areas — AB-620 integration/extension (40–45%), AB-100 deploy (40–45%), AB-410 logic/automation (40–45%) — must not sit at *Explained* before an exam is booked.

## Refresh discipline

Registers and matrix are generated from `gen_objectives.py`. Refresh triggers live in `../references/VERSION-WATCH.md`. Next scheduled: **AB-100 diff on 2026-10-15**.
