# Master syllabus

One programme, four frameworks, interleaved by project need. This file explains how they fit; the objective registers hold the detail.

| Framework | Register | Objectives | Role in Architect | Exam |
|---|---|---|---|---|
| PMI-CPMAI | `objectives/cpmai.md` | 6 phases (provisional — see A12) | Business / value / delivery methodology | Take first |
| AB-100 | `objectives/ab-100.md` | 74 | Architecture spine above every lesson | Take last |
| AB-410 | `objectives/ab-410.md` | 48 | Power Platform implementation foundation | Learn fully; exam optional |
| AB-620 | `objectives/ab-620.md` | 44 | Agent / integration layer | Take |

`COVERAGE-MATRIX.csv` has one row per objective (172 today). `GAP-BACKLOG.md` lists objectives the current project won't reach and how they'll be covered.

## Objective IDs

`CODE-area.subarea.n`, e.g. `AB620-2.2.2` = "Configure MCP tools". IDs are stable: a syllabus refresh may retire an ID but never renumbers one. All work — lessons, ADRs, evidence, commits — cites IDs so coverage can be audited mechanically.

## How the four layers interleave on any piece of work

```
CPMAI   Why are we doing this? Value? Data? Success criteria? Risk?
AB-100  What should the solution be? Agent or not? Build/buy/extend? Boundaries?
AB-410  Data model, flows, approvals, business logic, environments
AB-620  Agent design, tools, MCP/APIs, knowledge, HIL, evaluation, ALM
```

The lesson that teaches "Dataverse relationships" is an AB-410 lesson, but it must also answer the AB-100 question (why is this the data-authority choice?) and the CPMAI question (what data does the value depend on?). Lessons therefore map to IDs across frameworks, not one.

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
