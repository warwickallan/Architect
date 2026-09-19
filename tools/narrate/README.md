# tools/narrate — audio courses from syllabus + transcripts

Turns an exam syllabus (the objective register in `curriculum/objectives/`) plus course transcripts
(`Transcripts/<exam>/<course>/`) and primary-source notes into a narrated audio course with a common chapter
format (`FORMAT.md`).

| Step | Script | Model / service | Output |
|---|---|---|---|
| 1 Coverage | `coverage.py <exam> "<course>"` | Opus via `claude -p` | `COVERAGE.md/.json` next to the transcripts — which syllabus tasks the course covers well / lightly / not at all; per-lecture value and caption quality |
| 2 Plan | by hand (Fable/Warwick) | — | `Transcripts/<exam>/audio/<slug>/PLAN.md` — chapters mapped to syllabus tasks and sources |
| 3 Write | `write.py <exam> <slug> <n> [model]` | Opus | `NN - Title.md`, `FORMAT.md` shape; facts from the register and source notes, transcript for structure only |
| 4 Review | Warwick reads; Fable spot-checks | — | `status: reviewed` in the header |
| 5 Narrate | `tts.py <folder> --voice <id> [--model …]` | ElevenLabs (key in `tools/narrate/.env`, git-ignored) | `NN - Title.mp3` beside each script; `--dry-run` prints character/credit usage first; `--list-voices` to audition |
| 6 Deliver | `feed.py <folder> --base-url <private url>` | — | `feed.xml` — private podcast feed; upload MP3s + feed to any private web folder and subscribe |

All model calls go through `llm.py` (`claude -p --model opus`, local login, no API key). Cost and duration per
call are logged to `_llm.log` (git-ignored). Observed: coverage audit ≈ $1; a chapter ≈ $0.20; a 13-chapter
course ≈ $3 of list-price usage.

First course: `Transcripts/CPMAI/audio/architect-cpmai/` (13 chapters on the PMI-CPMAI ECO).

Narration cost rule of thumb: ~50k characters per hour of audio. ElevenLabs Multilingual v2 = 1 credit/character;
Turbo/Flash ≈ 0.5. Creator plan = 121k credits/month.
