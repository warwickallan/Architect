# tools/narrate — audio courses from syllabus + transcripts

Turns an exam syllabus (the objective register in `curriculum/objectives/`) plus course transcripts
(`Transcripts/<exam>/<course>/`) into a narrated audio course with a common chapter format (`FORMAT.md`).

Pipeline:

| Step | Script | Model | Output |
|---|---|---|---|
| 1 Coverage | `coverage.py <exam> "<course>"` | Opus | `COVERAGE.md/.json` next to the transcripts — which syllabus tasks the course covers well / lightly / not at all; per-lecture value and caption quality |
| 2 Plan | by hand (Fable/Warwick) | — | `Transcripts/<exam>/audio/<slug>/PLAN.md` — chapters, each mapped to syllabus tasks and source lectures |
| 3 Write | `write.py <plan>` | Opus | one script per chapter, `FORMAT.md` shape; facts from the syllabus and primary sources, transcript for structure and examples only |
| 4 Review | Warwick reads one; spot-checks | — | status `reviewed` in the script header |
| 5 Narrate | `tts.py <folder>` | ElevenLabs (or OpenAI) | MP3 per chapter |
| 6 Deliver | `feed.py` (later) | — | private podcast RSS or files |

All model calls go through `llm.py` → `claude -p --model opus` on the local login (no API key). Per-call cost and
duration are logged to `_llm.log` (git-ignored). Model choice: Opus for batch editorial work; Fable only for the
plan and any judgement call.
