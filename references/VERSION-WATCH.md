# Version watch

Syllabi and platform docs change; the coverage matrix must not silently go stale. Each row is a scheduled check. When a check runs: fetch the source, diff against `curriculum/objectives/*.md`, update `curriculum/gen_objectives.py`, re-run it, log the result here, and update `SOURCE-REGISTER.md`.

| Due | What | Why | Action | Done |
|---|---|---|---|---|
| **2026-10-15** | Diff AB-100 study guide vs `objectives/ab-100.md` | English certification updates 2026-10-14. The guide already shows the 14 Oct blueprint, but the live page may change again on the day. | Fetch S03; confirm objectives match; check for new change-log rows | — |
| 2026-10-15 | Re-check AB-100 certification page for learning paths / ILT | None exist as of 2026-09-17 | Fetch S04; add any learning path to `curated-learning.md` | — |
| Quarterly | Check pmi.org for a newer PMI-CPMAI ECO than September 2025 | PMI revises ECOs; the URL carries "2025-updated" | Warwick downloads (automation is blocked); diff against `objectives/cpmai.md`; regenerate | — |
| Monthly (1st) | Spot-check AB-410 and AB-620 study guide `updated_at` dates | Microsoft revises guides without notice | Fetch S01/S02 headers; full diff only if date changed | — |
| Before each exam booking | Full re-fetch of that exam's guide | Final safety check | Diff + regenerate | — |

## Log

| Date | Check | Result |
|---|---|---|
| 2026-09-17 | Baseline fetch S01–S04 | Registers created. AB-100 change log reports only minor changes at 14 Oct in areas 1.2, 2.1, 3.3. |
| 2026-09-17 | PMI-CPMAI ECO (S05) from Warwick's PDF | CPMAI register rebuilt: 6 placeholder IDs removed, 37 official task IDs added (`CPMAI-domain.task`). Matrix 172 → 203. |
