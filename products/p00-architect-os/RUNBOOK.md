# Architect OS — runbook

## Prerequisites
- Node 22+, npm 10+
- Claude Code installed and logged in on this machine (`claude --version`). The interview runs `claude -p` on your subscription (ADR-0004). No API key.
- Chrome for dictation (Web Speech API).

## Run (dev)
```
cd products/p00-architect-os
npm install          # first time
npm run dev          # server :5178 + Vite :5177
```
Open http://localhost:5177.

## Run (built)
```
npm run build && npm start     # serves dist/ on :5178
```

## What it writes
- `products/<id>/record/*.json` — the record (confirmed and rejected entities, pending proposals, meta with session id, turn, gate assessment)
- `products/<id>/record/conversation.jsonl` — every turn, for provenance
- `products/<id>/discovery/*.md` — rendered on each Artefacts view; derived, never hand-edit

Commit the record and artefacts like any other repo change.

## Interview method
`.claude/skills/discovery-interview/SKILL.md` — read at every turn, so editing it changes the next turn (no restart).

## Environment
- `CLAUDE_BIN` — path to the claude executable if not on PATH
- `ARCHITECT_TURN_TIMEOUT_MS` — default 240000
- `PORT` — server port, default 5178

## Known limits (v0.1)
- Single user, no locking.
- No streaming: a turn shows "thinking…" until the reply arrives (typically 10–40 s).
- Dictation accuracy is the browser's; edit before sending.
- Gate assessment is the interviewer's judgement stored per turn; the record counts are the mechanical check.
