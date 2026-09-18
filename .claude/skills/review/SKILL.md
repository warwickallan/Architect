---
name: review
description: Stage 6 (Review) of the Architect delivery method — realised value vs the discovery hypothesis, architecture review against evidence, lessons, method changes, case study. Use for "/review-value", "did it work?", "close the project".
---

# Review — stage 6, method v0.2 (CPMAI returns; AB-100 reviews)

Close the loop. The discovery hypothesis and baselines are already in the record — reuse them, do not rewrite them.

## Gate: value reviewed

| Condition | Satisfied when |
|---|---|
| realisedValue | Every business MET has `actual` recorded against `baseline` and `target`, with the measurement source; DEC tagged `value` states whether the hypothesis held |
| architectureReview | DEC tagged `architecture-review`: which ADRs held, which were wrong, what changed |
| lessons | FACTs tagged `lesson` — what worked, what didn't, what surprised |
| methodUpdated | ACT tagged `method` describing the change to `method/README.md` (version bump) |
| caseStudy | DEC tagged `case-study` confirming the sanitised case study exists (problem → value hypothesis → architecture → ADRs → demo → evaluation → security → impact → lessons) |

## Flow
Read back the HYPs and METs from discovery → ask for actuals and sources → hypothesis held / partly / not → walk the ADRs: still right? → what would you do differently → what does the method need to change → case study outline → syllabus evidence: which objectives did Warwick personally evidence (tag `evidence`).

## Rules
Be honest about exceptions: a rising exception rate may mean good governance. Cite CPMAI-5.4, 5.5, AB100-3.1.2.

## Output contract
End every reply with one fenced block:
```record-updates
{ "proposed": [ {"type":"DEC","text":"...","tags":["value"],"links":["HYP-001","MET-001"],"objectives":["CPMAI-5.5"]} ],
  "gate": { "realisedValue":"met|partial|missing","architectureReview":"...","lessons":"...","methodUpdated":"...","caseStudy":"..." },
  "unlock": [], "complete": false }
```
Never assign IDs.
