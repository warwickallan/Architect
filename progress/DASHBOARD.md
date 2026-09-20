# Dashboard

**Updated:** 2026-09-20 · **Stage:** Foundation → P01 discovery · **Method:** v0.2.1 · **Register:** [`REGISTER.md`](../REGISTER.md)

**CORE** Architect programme · Architect OS (v0.2, still at `products/p00-architect-os/`) · Architect LMS (v0.1, [own repo](https://github.com/warwickallan/architect-lms))  ·  **PROJECTS** P01 Tech PMO AI (candidate)

## Next action

1. **Warwick runs Architect OS** (`products/p00-architect-os/RUNBOOK.md`), creates the *Tech PMO AI* initiative and starts the interview. MET-001 clock starts now: Discovery Decision within 14 days.
2. Fix what the first real use exposes (record shape, questions, UI) — Method v0.2 → v0.3 from evidence.
3. Explain-backs for ADR-0001–0008; L000 orientation lesson; concept lessons as they unlock.
4. **Architect LMS** — v0.1 shipped 2026-09-20 (Assessment Console + telemetry). **Discover** added the same day: paste a YouTube URL or web page, it is verified against the source before ingestion, and out come a timestamped transcript, a ~12-minute narration script ready for ElevenLabs, and reviewed questions that cite the minute of the source that taught them. Proven end to end on the 4h24m freeCodeCamp AI-900 course — 8 of 10 questions approved by the independent reviewer, £~1.15 of model time. 49 tests. **Not yet seen on screen:** Chrome could not reach localhost in this session, so the Discover UI builds and typechecks but has not been rendered — that is Warwick's first check. Commit `a602be5`, not pushed.
5. **AB-100 transcripts — finish the gap:** Coding With Chuck eps 33–46 are channel-members-only (Warwick joined 2026-09-18). Pull them through the signed-in Chrome route once YouTube's rate limit resets (~2026-09-19), then drop the `access` flags in `Transcripts/AB-100/manifest.json`.

## Study material

| Course | Source | Transcripts | Gap |
|---|---|---|---|
| AB-100 — Microsoft Learn (Georgia Kalyva, 16 eps) | `Transcripts/AB-100/Microsoft Learn/` | 16 / 16 | — |
| AB-100 — Coding With Chuck (46 eps) | `Transcripts/AB-100/Coding with Chuck/` | 32 / 46 | eps 33–46 members-only; membership now held |
| AB-100 — Udemy, Phillip Burton (97 video lectures) | `Transcripts/AB-100/Udemy - Phillip Burton/` | 97 / 97 | — · captions pulled read-only from the enrolled course 2026-09-19; playlist/cut in `references/udemy-ab100-burton-analysis.md` |

Fetched via `tools/fetch_transcripts.py` (anonymous, fine for public videos) and, where that is rate-limited or the video is gated, Claude driving the signed-in Chrome tab. Commit `4376f49`, 2026-09-18.

## Business track

| Item | P00 Architect OS | P01 Tech PMO AI |
|---|---|---|
| Stage | 4 Build & Evaluate | 0 Opportunity |
| Discovery Decision | Proceed (DEC-001, 2026-09-17) | — |
| Baseline | MET-001/002 defined, not yet measured | — |
| MVP | **v0.1 built and smoke-tested 2026-09-17** | — |
| Realised-value review | — | — |

## Method track (Product Zero)

| Item | State |
|---|---|
| Lifecycle v0.2 (7 stages, gates) | defined |
| Structured record (10 entity types) | first instance: P00 record, 30 entities |
| `discovery-interview` skill | v0.1; smoke-tested (3 turns) — extraction, challenge and gate assessment behave as specified |
| Other six stage skills | v0.1 built 2026-09-18 for PoC (DEC-009); `opportunity` had one live turn; 2–6 untested |
| Renderer (record → stage packs) | built for all seven stages; P00's packs render to `artefacts/` |

## Curriculum track

| Framework | Objectives | Unseen | Explained | Labbed | Applied | Evidenced | Exam-ready |
|---|---|---|---|---|---|---|---|
| CPMAI | 37 (5 domains, official Sept 2025 ECO) | 37 | 0 | 0 | 0 | 0 | 0 |
| AB-410 | 48 | 48 | 0 | 0 | 0 | 0 | 0 |
| AB-620 | 44 | 44 | 0 | 0 | 0 | 0 | 0 |
| AB-100 | 74 | 74 | 0 | 0 | 0 | 0 | 0 |

Regenerate counts from `curriculum/COVERAGE-MATRIX.csv` (Status column) whenever it changes.

## Exam track

| Exam | Target | Gate status | Booked |
|---|---|---|---|
| CPMAI | ≈ Nov–Dec 2026 | ECO registered; Exam Prep Course required first — price & schedule (A14) | No |
| AB-620 | ≈ Dec 2026 | — | No |
| AB-100 | ≈ Jan–Mar 2027 | Syllabus diff due 2026-10-15 | No |
| AB-410 | optional | — | No |

## Open blockers

`ASSUMPTIONS.md` A03 (licences/environments), A13 (reviewers unnamed), A14 (CPMAI Exam Prep Course cost/timing).
