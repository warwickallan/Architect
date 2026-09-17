# Discovery pack templates

Copy this folder to `products/<id>/discovery/` when a candidate is selected. Fill in order — each part feeds the next — and finish with `06-discovery-decision.md`, the formal handoff to architecture. See `method/README.md` for how the parts relate.

| File | Lesson | Filled by |
|---|---|---|
| `01-discovery-brief.md` | L001 | Warwick |
| `02-current-state-pack.md` | L001 | Warwick (Claude draws the Mermaid from Warwick's steps) |
| `03-value-and-suitability.md` | L002 | Warwick; Claude challenges every "agentic" classification |
| `04-data-authority-constraints.md` | L003 | Warwick; unknowns go to `ASSUMPTIONS.md` and are linked, not copied |
| `05-evaluation-plan.md` | L003 | Warwick + Claude; becomes `tests/` later |
| `06-discovery-decision.md` | L003 close | Warwick decides; Claude drafts |

Conventions: every file opens with the CPMAI / AB-100 objective IDs it evidences. Keep each part to what fits on two screens; link out rather than expand. Small project → merge 01+02 and 04+05; never merge 06.
