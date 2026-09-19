"""Narrate chapter scripts with ElevenLabs. One MP3 per script, same file stem.
Usage:
  set ELEVENLABS_API_KEY=...            (never commit it; .env is git-ignored)
  py tools/narrate/tts.py <folder> [--voice <voice_id>] [--model eleven_multilingual_v2|eleven_turbo_v2_5|eleven_flash_v2_5]
                          [--only 03] [--list-voices] [--dry-run]
Reads *.md scripts in <folder>, strips the YAML header and markdown, turns "(pause)" into a 2-second break,
splits into ~4,500-character paragraph-aligned chunks, requests each with request-stitching for continuity,
and concatenates the audio. Character usage is printed before any request so the cost is visible."""
from __future__ import annotations
import argparse, json, os, re, sys, time, urllib.request
from pathlib import Path

API = "https://api.elevenlabs.io/v1"
KEY = os.environ.get("ELEVENLABS_API_KEY")
if not KEY:
    env = Path(__file__).with_name(".env")
    if env.exists():
        for line in env.read_text().splitlines():
            if line.startswith("ELEVENLABS_API_KEY="):
                KEY = line.split("=", 1)[1].strip().strip('"')

def req(path: str, data: dict | None = None, headers: dict | None = None, raw=False):
    h = {"xi-api-key": KEY, "accept": "audio/mpeg" if raw else "application/json"}
    if data is not None:
        h["content-type"] = "application/json"
    if headers:
        h.update(headers)
    r = urllib.request.Request(API + path, data=json.dumps(data).encode() if data is not None else None, headers=h)
    with urllib.request.urlopen(r, timeout=300) as resp:
        body = resp.read()
        return (body, dict(resp.headers)) if raw else json.loads(body)

def script_text(md: str) -> str:
    md = re.sub(r"^---[\s\S]*?---\s*", "", md)            # YAML header
    md = re.sub(r"\*\*(.+?)\*\*", r"\1", md)                # bold callouts read plainly
    md = md.replace("(pause)", '<break time="2.0s" />')
    md = re.sub(r"[ \t]+\n", "\n", md)
    return md.strip()

def chunks(text: str, limit=4500):
    out, cur = [], ""
    for para in text.split("\n\n"):
        if len(cur) + len(para) + 2 > limit and cur:
            out.append(cur.strip()); cur = ""
        cur += para + "\n\n"
    if cur.strip():
        out.append(cur.strip())
    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("folder")
    ap.add_argument("--voice", default=os.environ.get("ELEVENLABS_VOICE_ID", ""))
    ap.add_argument("--model", default="eleven_multilingual_v2")
    ap.add_argument("--only", default=None, help="chapter number prefix, e.g. 03")
    ap.add_argument("--list-voices", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()
    if not KEY and not a.dry_run:
        sys.exit("ELEVENLABS_API_KEY not set (env var or tools/narrate/.env)")
    if a.list_voices:
        for v in req("/voices")["voices"]:
            labels = v.get("labels", {})
            print(f"{v['voice_id']}  {v['name']:<20} {labels.get('accent','')}/{labels.get('gender','')}/{labels.get('age','')}  {labels.get('use_case','')}")
        return
    folder = Path(a.folder)
    scripts = sorted(folder.glob("*.md"))
    scripts = [s for s in scripts if s.name != "PLAN.md" and (not a.only or s.name.startswith(a.only))]
    total = sum(len(script_text(s.read_text(encoding="utf-8"))) for s in scripts)
    print(f"{len(scripts)} scripts, {total:,} characters -> credits on {a.model}: ~{total if 'multilingual' in a.model else total//2:,}")
    if a.dry_run:
        for s in scripts:
            print(f"  {s.name}: {len(script_text(s.read_text(encoding='utf-8'))):,} chars")
        return
    if not a.voice:
        sys.exit("--voice <voice_id> required (use --list-voices)")
    for s in scripts:
        out = s.with_suffix(".mp3")
        if out.exists():
            print("skip (exists)", out.name); continue
        text = script_text(s.read_text(encoding="utf-8"))
        audio, prev_ids = b"", []
        for i, ch in enumerate(chunks(text)):
            body = {"text": ch, "model_id": a.model,
                    "voice_settings": {"stability": 0.5, "similarity_boost": 0.75, "style": 0.2, "use_speaker_boost": True},
                    "previous_request_ids": prev_ids[-3:]}
            data, headers = req(f"/text-to-speech/{a.voice}?output_format=mp3_44100_128", body, raw=True)
            audio += data
            rid = headers.get("request-id") or headers.get("Request-Id")
            if rid: prev_ids.append(rid)
            print(f"  {s.name} chunk {i+1} ({len(ch):,} chars) ok")
            time.sleep(0.5)
        out.write_bytes(audio)
        print(f"wrote {out.name} ({len(audio)//1024} KB)")

if __name__ == "__main__":
    main()
