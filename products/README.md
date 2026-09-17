# Products

Real projects, one folder each (`p01-<slug>/`), each instantiating the delivery method (`method/README.md`). **None selected yet.** Nothing here is pre-architected; the answer to "what should we build?" is produced by discovery, and "don't use AI here" is an acceptable answer.

## Flow

1. **Candidate selection** (light, across 2–4 real pain points): fill `templates/project-brief-template.md` at candidate depth, score, choose. This is itself the first CPMAI Phase I exercise and part of L001.
2. **Discovery** (deep, on the chosen one): copy `templates/discovery/` to `products/p01-<slug>/discovery/`, work through 01→06 across L001–L003. Warwick authors; Claude scaffolds and challenges.
3. **Discovery Decision** (06): proceed / reshape / stop, MVP boundary, constraints. Formal handoff.
4. **Architecture** (L004): v0.1 hypothesis, ADRs, `TRACE.md`. Only now.
5. Build → evaluate → operate → review → case study, per the method lifecycle.

## Product folder layout (created at step 2)

```
p01-<slug>/
  README.md        one-screen summary + status + links
  discovery/       01–06 from templates/discovery/
  TRACE.md         templates/trace-template.md
  design/          architecture pack (from L004)
  backlog.md
  src/ tests/ runbooks/ evidence/   (as the build needs them)
```

## Selection criteria

| Criterion | Why |
|---|---|
| Real, recurring, measurable pain | CPMAI Phase I: baseline before automation |
| Shippable MVP in 3–5 weeks | The programme's first proof that the approach works |
| Exercises a large share of AB-410 + AB-620 naturally | Coverage without contrivance |
| Gives AB-100 and CPMAI real decisions to interrogate | Data authority, agent-vs-deterministic, HIL, ROI |
| Access is realistic (licences, APIs, data, permissions) | See `ASSUMPTIONS.md` A03–A07 |
| Safe to build with sanitised data | DLP / residency unknowns |
| Produces portfolio-quality evidence and reusable method material | Career outcome; Product Zero |

## Candidates recorded so far (from the founding brief — unselected, unscored)

| Candidate | One-line pain (not solution) | Note |
|---|---|---|
| **PMO meeting follow-through** | Meeting outcomes (risks, actions, issues, decisions) have to be manually turned into project controls and synchronised across systems | The brief framed this as "transcript → RAID → agent → write-back"; that is a *hypothesis to test in discovery*, not the starting point. Its v0.1 sketch is in `references/deep-research-2026-09-17.md`. |
| **Booking / scheduling governance** | Resource and booking requests need project context, calendar checks and policy/tolerance judgement before action | Brief positioned this second |

Add Warwick's own candidates before scoring. The brief's suggestions carry no special weight over a pain point Warwick actually has.
