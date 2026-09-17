# TRACE — <product>

Lightweight traceability: one row per chain, from business problem to portfolio evidence. Cells are paths or IDs, not prose. The coverage matrix's `Product` / `Evidence` columns point into these paths.

| Chain | Business problem (01) | Discovery evidence (02–05) | Requirement / constraint (06) | ADR | Implementation | Test / evaluation (05 IDs → results) | Outcome | Realised value | Portfolio evidence | Objective IDs |
|---|---|---|---|---|---|---|---|---|---|---|
| C01 | discovery/01 §Problem | discovery/03 step 4 "agentic" | discovery/06 MVP: "…" | ADR-0001 | src/… | T001, T004 → tests/results/… | | | | CPMAI-2.1, AB100-1.1.1, AB620-2.2.2 |

Update when: a Discovery Decision is made · an ADR is accepted · a feature ships · a test run is recorded · a review is held. A chain with an empty *Outcome* after ship is a gap to close, not a formality.
