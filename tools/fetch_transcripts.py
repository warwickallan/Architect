#!/usr/bin/env python3
"""
fetch_transcripts.py — pull YouTube captions for every video in
Transcripts/<exam>/manifest.json and write one .txt per video into
Transcripts/<exam>/<course folder>/.

Runs on Warwick's own machine (the Claude sandboxes cannot reach YouTube).

Usage (from the repo root, C:\\Architect):
    py -m pip install --upgrade youtube-transcript-api
    py tools/fetch_transcripts.py                 # all exams / courses
    py tools/fetch_transcripts.py --exam AB-100   # one exam
    py tools/fetch_transcripts.py --force         # re-download existing files
    py tools/fetch_transcripts.py --dry-run       # list what would be fetched

Output format matches the Cockpit source-brief export:
    [mm:ss] paragraph of caption text ...
One paragraph roughly every PARA_SECONDS seconds, broken at sentence ends.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path

PARA_SECONDS = 25          # start a new paragraph after this many seconds
MAX_RETRIES = 3
RETRY_SLEEP = 8            # seconds between retries (YouTube rate-limits bursts)
POLITE_SLEEP = 4           # pause between videos (bursts get the IP rate-limited)
BLOCK_SLEEP = 90           # base wait after an IpBlocked / RequestBlocked response

ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPTS = ROOT / "Transcripts"

INVALID = re.compile(r'[<>:"/\\|?*\x00-\x1f]')


def safe_filename(index: int, title: str) -> str:
    """'05 - Design overall AI strategy ... _ AB-100 _ Episode 4.txt'"""
    name = title.replace("|", "_").replace("/", "-")
    name = INVALID.sub("_", name)
    name = re.sub(r"\s+", " ", name).strip(" .")
    return f"{index:02d} - {name}.txt"


def mmss(seconds: float) -> str:
    s = int(seconds)
    h, rem = divmod(s, 3600)
    m, sec = divmod(rem, 60)
    return f"{h}:{m:02d}:{sec:02d}" if h else f"{m:02d}:{sec:02d}"


def format_transcript(snippets) -> str:
    """snippets: iterable of objects with .text, .start (seconds)."""
    paras: list[tuple[float, list[str]]] = []
    for sn in snippets:
        text = re.sub(r"\s+", " ", sn.text.replace("\n", " ")).strip()
        if not text:
            continue
        if not paras:
            paras.append((sn.start, [text]))
            continue
        start, words = paras[-1]
        elapsed = sn.start - start
        ends_sentence = words[-1].rstrip().endswith((".", "?", "!"))
        if elapsed >= PARA_SECONDS and (ends_sentence or elapsed >= PARA_SECONDS * 2):
            paras.append((sn.start, [text]))
        else:
            words.append(text)
    lines = [f"[{mmss(start)}] {' '.join(words)}" for start, words in paras]
    return "\n\n".join(lines) + "\n"


def fetch_one(api, video_id: str):
    """Prefer manual English captions, fall back to auto-generated, then any."""
    last_err: Exception | None = None
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            tl = api.list(video_id)
            try:
                tr = tl.find_manually_created_transcript(["en", "en-GB", "en-US"])
            except Exception:
                try:
                    tr = tl.find_generated_transcript(["en", "en-GB", "en-US"])
                except Exception:
                    tr = next(iter(tl))
            return tr.fetch(), tr.language_code, tr.is_generated
        except Exception as e:  # noqa: BLE001 — surface everything, decide below
            last_err = e
            name = type(e).__name__
            if name in {"TranscriptsDisabled", "NoTranscriptFound", "VideoUnavailable", "VideoUnplayable"}:
                raise  # permanent for an anonymous fetch (e.g. members-only) — don't retry
            if name in {"IpBlocked", "RequestBlocked"}:
                wait = BLOCK_SLEEP * attempt
                print(f"    YouTube is rate-limiting this IP — waiting {wait}s before retry {attempt}/{MAX_RETRIES - 1}")
                time.sleep(wait)
                continue
            if attempt < MAX_RETRIES:
                print(f"    retry {attempt}/{MAX_RETRIES - 1} after {name}")
                time.sleep(RETRY_SLEEP * attempt)
    raise last_err  # type: ignore[misc]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--exam", help="only this exam folder, e.g. AB-100")
    ap.add_argument("--course", help="only this course folder, e.g. 'Microsoft Learn'")
    ap.add_argument("--force", action="store_true", help="overwrite existing files")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    try:
        from youtube_transcript_api import YouTubeTranscriptApi
    except ImportError:
        print("Missing dependency. Run:  py -m pip install --upgrade youtube-transcript-api")
        return 2
    api = YouTubeTranscriptApi()

    manifests = sorted(TRANSCRIPTS.glob("*/manifest.json"))
    if args.exam:
        manifests = [m for m in manifests if m.parent.name == args.exam]
    if not manifests:
        print(f"No manifest.json found under {TRANSCRIPTS}")
        return 1

    done = skipped = failed = 0
    failures: list[str] = []
    for mpath in manifests:
        manifest = json.loads(mpath.read_text(encoding="utf-8"))
        for course in manifest["courses"]:
            if args.course and course["folder"] != args.course:
                continue
            folder = mpath.parent / course["folder"]
            folder.mkdir(parents=True, exist_ok=True)
            print(f"\n== {manifest['exam']} / {course['course']} ({len(course['videos'])} videos) -> {folder}")
            for v in course["videos"]:
                out = folder / safe_filename(v["index"], v["title"])
                tag = f"  [{v['index']:02d}] {v['videoId']} {v['title'][:70]}"
                if v.get("access") and not out.exists():
                    print(f"{tag}  — {v['access']}, skip")
                    skipped += 1
                    continue
                if out.exists() and not args.force:
                    print(f"{tag}  — exists, skip")
                    skipped += 1
                    continue
                if args.dry_run:
                    print(f"{tag}  — would fetch -> {out.name}")
                    continue
                try:
                    fetched, lang, generated = fetch_one(api, v["videoId"])
                    body = format_transcript(fetched)
                    header = (
                        f"# {v['title']}\n"
                        f"# {course['channel']} — {manifest['exam']} — video {v['index']:02d}\n"
                        f"# https://www.youtube.com/watch?v={v['videoId']}\n"
                        f"# captions: {lang}{' (auto-generated)' if generated else ''}\n\n"
                    )
                    out.write_text(header + body, encoding="utf-8", newline="\n")
                    print(f"{tag}  — ok ({len(body):,} chars, {lang}{'/asr' if generated else ''})")
                    done += 1
                except Exception as e:  # noqa: BLE001
                    reason = type(e).__name__
                    if "members on level" in str(e):
                        reason = "members-only (" + str(e).split("level:")[1].split("(")[0].strip() + " tier)"
                    print(f"{tag}  — FAILED: {reason}")
                    failed += 1
                    failures.append(f"{course['course']} #{v['index']:02d} {v['videoId']} — {reason}")
                time.sleep(POLITE_SLEEP)

    print(f"\nDone: {done} written, {skipped} skipped (already present), {failed} failed.")
    if failures:
        print("Failures (re-run later; YouTube may be rate-limiting):")
        for f in failures:
            print("  " + f)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
