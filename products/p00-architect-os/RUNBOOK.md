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
- `products/<id>/record/*.json` — the record (confirmed and rejected entities, pending proposals, meta with per-stage session id, turn, gate assessment, gate status)
- `products/<id>/record/conversation.jsonl` — every turn with its stage, for provenance
- `products/<id>/artefacts/<n>-<stage>/*.md` — rendered on each Artefacts view; derived, never hand-edit

## Demo flow (PoC)
1. `+ New initiative` → name it → stage 0 **Opportunity** opens; `Start opportunity`, talk, confirm proposals.
2. Gate panel → **Pass gate** when all conditions are met, or **Override…** (recorded) to move on for a demo.
3. Each stage's tab unlocks in turn; the canvas is the same record throughout; Artefacts shows that stage's rendered pack.
4. P00 (Architect OS itself) is at stage 4 with 0–3 passed — a ready-made example of the tab states.

Commit the record and artefacts like any other repo change.

## Stage methods
`.claude/skills/{opportunity,discovery-interview,architect,mobilise,build-evaluate,deploy-operate,review}/SKILL.md` — read at every turn, so editing one changes the next turn (no restart). Stage table: `server/stages.ts`.

## Environment
- `CLAUDE_BIN` — path to the claude executable if not on PATH
- `ARCHITECT_TURN_TIMEOUT_MS` — default 240000
- `PORT` — server port, default 5178

## Known limits (v0.1)
- Single user, no locking.
- No streaming: a turn shows "thinking…" until the reply arrives (typically 10–40 s).
- Dictation accuracy is the browser's; edit before sending.
- Gate assessment is the interviewer's judgement stored per turn; the record counts are the mechanical check.
