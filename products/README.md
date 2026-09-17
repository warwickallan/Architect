# Products

Real projects, one folder each (`p01-<slug>/`). **None selected yet.** Selection is an explicit exercise with Warwick — it is itself the first CPMAI Phase I / AB-100 area 1 lesson — and is never done unilaterally by Claude.

## Selection exercise (to run next)

1. Warwick lists 2–4 real pain points from current PMO/implementation work.
2. For each, fill `templates/project-brief-template.md` at *candidate* depth only (problem, who suffers, current manual process, data involved, systems touched, what "better" would measure).
3. Score against the criteria below; discuss; pick one.
4. Only then: `products/p01-<slug>/README.md`, backlog, and the first ADRs.

## Selection criteria

| Criterion | Why |
|---|---|
| Real, recurring, measurable pain | CPMAI Phase I: baseline before automation |
| Shippable MVP in 3–5 weeks | The programme's first proof that the approach works |
| Exercises a large share of AB-410 + AB-620 naturally | Coverage without contrivance |
| Gives AB-100 and CPMAI real decisions to interrogate | Data authority, agent-vs-deterministic, HIL, ROI |
| Access is realistic (licences, APIs, data, permissions) | See `ASSUMPTIONS.md` A03–A07 |
| Safe to build with sanitised data | DLP / residency unknowns |
| Produces portfolio-quality evidence | Career outcome |

## Candidates recorded so far (from the founding brief — unselected, unscored)

| Candidate | One-line hypothesis | Brief's reasoning |
|---|---|---|
| **PMO Meeting Intelligence** | Teams transcript → candidate RAID items → reconcile with existing state → human review where required → controlled write-back → audit receipt | Exercises a large share of AB-410/620 (ingestion, Dataverse state, flows, approvals, agent extraction, MCP/API tools, HIL, evaluation, ALM); gives AB-100/CPMAI real authority and ROI questions. Brief drafted an architecture v0.1 hypothesis (`references/deep-research-2026-09-17.md`, "Objective and operating model") — treat as a candidate sketch, not a decision. |
| **Booking governance agent** | Natural-language request → authoritative project context → calendars → policy/tolerance check → automatic action or PM exception | Brief positioned this second; applies the same foundations |

Add Warwick's own candidates above before scoring. The brief's suggestion carries no special weight over a pain point Warwick actually has.
