# Products

One folder per product, each run through the delivery method (`method/README.md`).

| ID | Product | Kind | Stage | Note |
|---|---|---|---|---|
| **P00** | [Architect OS](p00-architect-os/README.md) | Tool (Project Zero) | 1 Discover → building v0.1 | The working interface for the method. v0.1 = one tab, Discovery. Its own discovery record was seeded from the decision conversation on 2026-09-17. |
| **P01** | Tech PMO AI *(candidate)* | Business product | 0 Opportunity | Becomes P01 **only if it passes discovery** — run through Architect OS `/discover`. Where the AB-410/AB-620 evidence comes from. |

Nothing is pre-architected. The answer to "what should we build?" is produced by discovery, and *don't use AI here* is an acceptable answer.

## Flow

1. **Opportunity** — light candidate brief(s) (`templates/project-brief-template.md`), scored; Warwick selects.
2. **Discover** — conversational interview in Architect OS (or `/discovery-interview` in Claude Code). Every extracted entity is confirmed by Warwick before it enters the record. Artefacts render from the record.
3. **Discovery Decision** — the gate: proceed / reshape / stop, MVP boundary, constraints.
4. **Architect** — only now: v0.1 hypothesis, ADRs, `TRACE.md`.
5. Mobilise → Build & Evaluate → Deploy & Operate → Review.

## Product folder layout

```
pNN-<slug>/
  README.md        one-screen summary, stage, gate status, links
  record/          structured entities (JSON, one file per type) — the source of truth
  discovery/       artefacts rendered from the record (01–06)
  TRACE.md         problem → evidence → requirement → ADR → build → test → outcome → value
  design/          architecture pack + ADR/ (from stage 2)
  backlog.md, src/, tests/, runbooks/, evidence/   as the build needs them
```

## Selection criteria (stage 0)

| Criterion | Why |
|---|---|
| Real, recurring, measurable pain | CPMAI 2.1: baseline before automation |
| Shippable MVP in 3–5 weeks | Proof the approach works |
| Exercises a large share of AB-410 + AB-620 naturally | Coverage without contrivance |
| Gives AB-100 and CPMAI real decisions to interrogate | Data authority, agent-vs-deterministic, HIL, ROI |
| Access is realistic (licences, APIs, data, permissions) | `ASSUMPTIONS.md` A03–A07 |
| Safe to build with sanitised data | DLP / residency unknowns |
| Produces portfolio-quality evidence and reusable method material | Career outcome; Product Zero |

## Candidates from the founding brief (unscored)

| Candidate | One-line pain (not solution) | Note |
|---|---|---|
| **PMO meeting follow-through** | Meeting outcomes (risks, actions, issues, decisions) are manually turned into project controls and synchronised across systems | Brief framed this as "transcript → RAID → agent → write-back" — a hypothesis to test in discovery. Sketch in `references/deep-research-2026-09-17.md`. |
| **Booking / scheduling governance** | Resource and booking requests need project context, calendar checks and policy/tolerance judgement before action | Brief positioned this second |

"Tech PMO AI" is the umbrella for Warwick's real PMO pain points; which of these (or others) it contains is a discovery outcome.
