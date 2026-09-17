# ASSUMPTIONS.md — Unknowns register

Anything not yet known enters here rather than being quietly guessed. Resolve by editing the row and dating the change.

| # | Assumption / unknown | Consequence if wrong | Treatment | Owner | Status |
|---|---|---|---|---|---|
| A01 | Exact DEPT (or equivalent) role expectations unspecified | Curriculum optimises for the wrong career evidence | Add role spec / feedback rubric when available; map gaps in a `career/` note | Warwick | Open |
| A02 | Paid-course budget unknown | Cannot assume Udemy or paid libraries | Default to official/free; paid items optional | Warwick | Open |
| A03 | Copilot Studio / Dataverse / Power Platform licences and environment rights unknown | Labs or deployment blocked | Licence/environment audit in Foundation stage | Warwick | Open |
| A04 | Concerto API/MCP capability unverified | Proposed write-back may be unavailable | Adapter interface; mock until documented | Claude + Warwick | Open |
| A05 | Rocketlane API/MCP capability unverified | Same | Same adapter/mock pattern | Claude + Warwick | Open |
| A06 | Teams transcript retrieval mechanism and permissions unspecified | Ingestion may need redesign | Prototype before committing architecture | Warwick | Open |
| A07 | Organisational data / DLP / residency rules unspecified | Real transcripts or customer data unsuitable for dev | Sanitised test data; involve tenant/security reviewer | Warwick | Open |
| A08 | Human-authority thresholds undefined | Unsafe autonomy or excessive approvals | Configurable policy, start conservative | Warwick | Open |
| A09 | Microsoft syllabi will change (AB-100 confirmed for 2026-10-14) | Coverage matrix stale | Retrieval dates + `references/VERSION-WATCH.md` diffs | Claude | Open |
| A10 | AI-assisted building can produce false confidence | Artefacts without competence | Manual reps, explain-backs, delayed retests, evidence rule | Warwick | Open |
| A11 | Course publication may expose customer/IP material | Governance problem | Strict private/publishable separation | Warwick | Open |
| A12 | CPMAI exam content outline not retrievable by automation (pmi.org HTTP 403, 2026-09-17) | CPMAI objectives are phase-level and unverified | Warwick retrieves the official outline; Claude updates `gen_objectives.py` | Warwick | Open |
| A13 | Business reviewer, platform/security reviewer and architecture peer are unnamed | Reviews may not happen | Name them before the first consequential deployment | Warwick | Open |

A04–A08 are carried from the founding brief's P01 hypothesis; they matter only if that candidate is selected (`products/README.md`).
