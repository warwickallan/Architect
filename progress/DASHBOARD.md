# Dashboard

**Updated:** 2026-09-24 · **Stage:** Foundation → P01 discovery · **Method:** v0.2.1 · **Register:** [`REGISTER.md`](../REGISTER.md)

> **Session handoff (Yoga → HP), 2026-09-24.** All work in *this* repo is committed and pushed (`f9ee53c`), tree clean. On the HP: `git clone`, then `cd products/p00-architect-os && npm install` before running the OS (`node_modules/`, `dist/` are git-ignored and rebuild locally). Two things do **not** travel via git: (a) Claude's memory files (machine-local to the Yoga) — the repo itself carries continuity via `CLAUDE.md` → this dashboard → `PROJECT.md` → `method/README.md`; (b) the git-ignored Architect OS build artefacts (rebuild as above). **In flight from this chat:** CPMAI audio — 13 scripts drafted (`Transcripts/CPMAI/audio/architect-cpmai/`), awaiting an ElevenLabs key in `tools/narrate/.env` + a voice pick, then `tts.py`; DX Labs AB-620 playlist audited as a *selective supplement* (`references/dxlabs-ab620-playlist-audit.md`) — USE-cut fetch and the DX Labs AB-100 audit both await Warwick's go; Coding With Chuck eps 33–46 need a **Pro-tier** membership upgrade (see below). **Architect LMS on the HP:** `git clone https://github.com/warwickallan/architect-lms`, `npm install`, `pip install youtube-transcript-api`, then `npm run dev` (API :5310, web :5311). Note that `data/` is git-ignored by design, so the *content* created on the Yoga does not travel: the AI-900 qualification and its two sources, the 13 minted questions, the transcripts and narration script, the clip library, the Ask AI log and all attempt history are machine-local. Committed `fixtures/` (AB-100, 33 questions; reference-ai901, 6) do travel. Re-ingesting the two AI-900 sources on the HP costs about $1.70 of model time and ten minutes; alternatively say the word and the `data/` tree can be committed.

**CORE** Architect programme · Architect OS (v0.2, still at `products/p00-architect-os/`) · Architect LMS (v0.1, [own repo](https://github.com/warwickallan/architect-lms))  ·  **PROJECTS** P01 Tech PMO AI (candidate)

## Next action

1. **Warwick runs Architect OS** (`products/p00-architect-os/RUNBOOK.md`), creates the *Tech PMO AI* initiative and starts the interview. MET-001 clock starts now: Discovery Decision within 14 days.
2. Fix what the first real use exposes (record shape, questions, UI) — Method v0.2 → v0.3 from evidence.
3. Explain-backs for ADR-0001–0008; L000 orientation lesson; concept lessons as they unlock.
4. **Architect LMS** — v0.1 shipped 2026-09-20; four further builds through 2026-09-21, all pushed (`884bb07`). **Discover** ingests a verified YouTube URL or web page and returns three outputs — timestamped transcript, a ~12-minute ElevenLabs-ready narration script, and reviewed questions citing the minute that taught them. **Home** is the learner profile: mastery by qualification derived wholly from attempts, misconceptions first. **Ask AI** (`claude -p`) sits on every tab and is gated on submission during practice — enforced server-side, with six tests written as attempts to get past it (ADR-0011, Warwick's decision). **Screen clipper** via the Screen Capture API into a tagged library. Library restructured to **Project → Qualification → Source** after Warwick rejected the first attempt as "nesting all wrong" — the qualification is the practisable unit and every source in it pools into one bank (ADR-0012). Proven end to end: a 4h24m AI-900 video and a Microsoft Learn page in one qualification, 13 questions, a session drawing from both. 55 tests. **Next there:** use it in anger, then Milestone 3 (Supabase) or more AB-100 questions — whichever the use exposes as the real constraint.
5. **AB-100 transcripts — finish the gap:** Coding With Chuck eps 33–46 are members-only at the **Pro tier**; the account holds a lower tier, so they stay locked until the membership is upgraded to Pro (confirmed 2026-09-22 — it is a tier gate, not the earlier rate-limit assumption). After upgrade, pull via the signed-in Chrome route and drop the `access` flags in `Transcripts/AB-100/manifest.json`.

## Study material

| Course | Source | Transcripts | Gap |
|---|---|---|---|
| AB-100 — Microsoft Learn (Georgia Kalyva, 16 eps) | `Transcripts/AB-100/Microsoft Learn/` | 16 / 16 | — |
| AB-100 — Coding With Chuck (46 eps) | `Transcripts/AB-100/Coding with Chuck/` | 32 / 46 | eps 33–46 members-only; membership now held |
| AB-410 — Microsoft Learn official prep (AB-410T00: 4 paths / 17 modules / 147 units) | `Transcripts/AB-410/Microsoft Learn/` | syllabus + objectives captured | official paths cover 36/48 objectives — 12 gaps curated in that README |
| AB-410 — Udemy, Phillip Burton (193 video lectures; 81 AB-410 + 112 bonus PL-200) | `Transcripts/AB-410/Udemy - Phillip Burton/` | 192 / 193 | L41 no captions · tiered cut + streamlined order in `references/udemy-ab410-burton-analysis.md` §G |
| AB-620 — DX Labs Global playlist (61 videos, 7h06m) | audit only — `references/dxlabs-ab620-playlist-audit.md` + `.csv` | metadata mapped; transcripts not fetched | **selective supplement** for Area 2; no Area 3/computer-use/HIL; USE-cut fetch pending decision |
| CPMAI — Udemy, Sanal Mathew John (60 lectures) | `Transcripts/CPMAI/Udemy - Sanal Mathew John/` | 41 / 60 | 19 have no caption track · **13-chapter audio course scripted** in `Transcripts/CPMAI/audio/architect-cpmai/` |
| PMP — Udemy, David McLachlan (398 lectures) | `Transcripts/PMP/Udemy - David McLachlan/` | 398 / 398 | parked — not a current focus |
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
