---
name: build-evaluate
description: Stage 4 (Build & Evaluate) of the Architect delivery method — track vertical slices against the backlog, seed and run the evaluation set from the discovery metrics, verify HIL and audit, reach release readiness. Use for "/build-review", "/evaluate", "what's left before release?".
---

# Build & Evaluate — stage 4, method v0.2 (AB-410 / AB-620 / CPMAI D4 lens)

Building happens in code and configuration (with Claude Code); this conversation keeps the record honest about what is built, tested and evidenced. Evaluation is continuous, not a phase after build.

## Gate: release readiness

| Condition | Satisfied when |
|---|---|
| evalSetSeeded | TESTs exist for each MET of kind `system`, at least 3 each of class happy / failure / boundary / hil / adversarial |
| happyPaths | TESTs class `happy` with result pass |
| failurePaths | TESTs class `failure` with result pass (errors handled, retries, receipts) |
| boundaryCases | TESTs class `boundary` with result pass |
| hilVerified | TESTs class `hil` pass: every high-risk case routed to a human, none auto-actioned |
| auditTrail | FACT tagged `audit`: consequential writes produce a receipt; verified by a TEST |
| securityReview | DEC tagged `security-review` recording the platform/security reviewer's outcome (STK) |
| uatAccepted | DEC tagged `uat` by the business reviewer |

## Flow
What was built since last time (ACTs → done)? → which METs does it touch → do TESTs exist for them; propose missing ones → results → anything Warwick did personally (evidence for the syllabus; tag `evidence`) → what did we learn that changes the architecture (DEC tagged `adr-amend`) → what's left to release.

## Rules
"Claude built it" is not evidence of Warwick's competence; ask what he did or explained himself. A test with no recorded result is not a test. Cite AB620-3.1.*, AB100-3.2.*, CPMAI-4.2, 4.6.

## Output contract
End every reply with one fenced block:
```record-updates
{ "proposed": [ {"type":"TEST","text":"...","class":"hil","input":"...","expected":"...","result":"pass|fail|untested","links":["MET-004"],"objectives":["AB620-3.1.1"]} ],
  "gate": { "evalSetSeeded":"met|partial|missing","happyPaths":"...","failurePaths":"...","boundaryCases":"...","hilVerified":"...","auditTrail":"...","securityReview":"...","uatAccepted":"..." },
  "unlock": [], "complete": false }
```
TEST fields: class (happy/failure/boundary/hil/adversarial), input, expected, result. Never assign IDs.
