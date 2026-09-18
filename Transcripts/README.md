# Transcripts

Raw course transcripts used as study material, one folder per exam, one sub-folder per course.

| Exam | Course | Source | Videos |
|---|---|---|---|
| AB-100 | Coding with Chuck | [Microsoft AB-100 Agentic AI Exam Prep](https://www.youtube.com/playlist?list=PLXd94bZTzZ-SGw8yMHD44d9xKgMKTZUVF) | 46 |
| AB-100 | Microsoft Learn | [AB-100: Architecting agentic AI business solutions](https://www.youtube.com/playlist?list=PLWkuMDqdJEw4) | 16 |
| AB-100 | Udemy — Phillip Burton | [AB-100 exam prep](https://www.udemy.com/course/ab-100-agentic-ai-business-solutions-architect-exam-preparation/) (enrolled, paid) | 97 — **local only, git-ignored** |

The Udemy set was taken from the enrolled course's own caption files (English / English [Auto]) via the logged-in course player on 2026-09-19 — not YouTube, so `fetch_transcripts.py` doesn't apply; the manifest entry records it. Paid content stays on this machine.

## How the files get here

`Transcripts/<exam>/manifest.json` lists every video (course, index, videoId, title).
`tools/fetch_transcripts.py` reads the manifests and writes one `NN - <title>.txt`
per video, `[mm:ss]`-stamped paragraphs, skipping files that already exist.

```powershell
cd C:\Architect
py -m pip install --upgrade youtube-transcript-api
py tools\fetch_transcripts.py            # everything not yet downloaded
py tools\fetch_transcripts.py --dry-run  # just list what it would do
```

Run it on your own machine — Claude's sandboxes cannot reach YouTube. If YouTube
rate-limits a burst the script reports the failures; re-run and it picks up only
the missing ones.

To add a course: append it to the manifest (playlist URL + `index|videoId|title`
rows) and re-run. The MyPKA Telegram → Larry → Cockpit route still works for
one-off videos; this script is for whole courses.

Transcripts are third-party content kept for personal study; nothing in here is
copied into `publishable/`.
