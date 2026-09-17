# Version watch

Syllabi and platform docs change; the coverage matrix must not silently go stale. Each row is a scheduled check. When a check runs: fetch the source, diff against `curriculum/objectives/*.md`, update `curriculum/gen_objectives.py`, re-run it, log the result here, and update `SOURCE-REGISTER.md`.

| Due | What | Why | Action | Done |
|---|---|---|---|---|
| **2026-10-15** | Diff AB-100 study guide vs `objectives/ab-100.md` | English certification updates 2026-10-14. The guide already shows the 14 Oct blueprint, but the live page may change again on the day. | Fetch S03; confirm objectives match; check for new change-log rows | — |
| 2026-10-15 | Re-check AB-100 certification page for learning paths / ILT | None exist as of 2026-09-17 | Fetch S04; add any learning path to `curated-learning.md` | — |
| ASAP (Warwick) | Obtain official CPMAI exam content outline | pmi.org blocks automation; CPMAI register is phase-level only | Warwick downloads outline → Claude rebuilds CPMAI section of generator with official domains/tasks | — |
| Monthly (1st) | Spot-check AB-410 and AB-620 study guide `updated_at` dates | Microsoft revises guides without notice | Fetch S01/S02 headers; full diff only if date changed | — |
| Before each exam booking | Full re-fetch of that exam's guide | Final safety check | Diff + regenerate | — |

## Log

| Date | Check | Result |
|---|---|---|
| 2026-09-17 | Baseline fetch S01–S04 | Registers created. AB-100 change log reports only minor changes at 14 Oct in areas 1.2, 2.1, 3.3. |
