"""Call Claude through the local Claude Code login (`claude -p`) — no API key (ADR-0004).
Model is selectable; default Opus for editorial/batch work, Fable reserved for judgement calls.
Large content goes via stdin; the instruction goes via --system-prompt (Windows arg limit ~32k)."""
from __future__ import annotations
import json, os, subprocess, sys, time, tempfile
from pathlib import Path

CLAUDE = os.environ.get("CLAUDE_BIN", "claude")
LOG = Path(__file__).with_name("_llm.log")


def ask(system: str, content: str, model: str = "opus", timeout: int = 900, retries: int = 2, tag: str = "") -> str:
    """Return the model's text. Retries on transient failure. Logs cost/duration per call."""
    if len(system) > 28000:
        raise ValueError("system prompt too long for the command line; move content to stdin")
    args = [CLAUDE, "-p", "--output-format", "json", "--model", model,
            "--tools", "", "--setting-sources", "", "--strict-mcp-config", "--no-session-persistence",
            "--system-prompt", system]
    last = None
    for attempt in range(retries + 1):
        t0 = time.time()
        try:
            p = subprocess.run(args, input=content, capture_output=True, text=True, encoding="utf-8",
                               timeout=timeout, cwd=tempfile.gettempdir())
            j = json.loads(p.stdout)
            if j.get("is_error"):
                raise RuntimeError(j.get("result"))
            with open(LOG, "a", encoding="utf-8") as f:
                f.write(f"{time.strftime('%H:%M:%S')} {tag} model={model} in={len(content)} out={len(j.get('result',''))} "
                        f"cost=${j.get('total_cost_usd',0):.3f} {time.time()-t0:.0f}s\n")
            return j.get("result", "")
        except Exception as e:  # noqa: BLE001
            last = e
            with open(LOG, "a", encoding="utf-8") as f:
                f.write(f"{time.strftime('%H:%M:%S')} {tag} attempt {attempt} failed: {e}\n")
            time.sleep(10)
    raise RuntimeError(f"claude call failed after retries: {last}")


def json_block(text: str):
    """Extract the first ```json fenced block (or bare JSON) from a reply."""
    import re
    m = re.search(r"```json\s*\n(.*?)```", text, flags=re.S)
    raw = m.group(1) if m else text
    return json.loads(raw)


if __name__ == "__main__":
    print(ask("You are terse.", sys.argv[1] if len(sys.argv) > 1 else "Reply with exactly: OK", model=sys.argv[2] if len(sys.argv) > 2 else "opus"))
