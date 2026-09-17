# ADR-0007 — Every extracted entity is confirmed by Warwick before it enters the record

**Status:** Accepted · **Date:** 2026-09-17 · **Product:** P00 Architect OS · **Objective IDs:** AB100-3.4.8 · CPMAI-1.5 · CPMAI-1.2 · **Decided by:** Warwick · **Record:** DEC-007, REQ-002

## Context
The interview extracts facts, pains, hypotheses, stakeholders, systems, risks, metrics, requirements and decisions from conversation. A wrong fact silently entering the record propagates into every artefact rendered from it.

## Options
| Option | Pros | Cons |
|---|---|---|
| Confirm / edit / discuss before commit | Record contains only agreed facts; audit trail of approvals; same HIL pattern Warwick will architect in P01 | Slower per entity |
| Auto-commit, correct later | Faster | Errors propagate; provenance blurred |

## Decision
Proposed entities are `pending` until confirmed. Confirmation, edits and rejections are recorded with timestamp. Rejected entities are kept (status `rejected`) for provenance.

## Consequences
The canvas shows pending items distinctly. Artefacts render only confirmed entities. This is Domain I evidence (accountability documentation, audit trail) produced by the tool itself.

## Warwick's explain-back
_pending_
