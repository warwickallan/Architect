# 06 — Discovery decision: Architect OS

> Rendered from `record/` by Architect OS on 2026-09-17 08:27. Do not edit — change the record.

**Gate status:** passed

## Gate assessment

_no assessment yet_

## Decisions

- **DEC-001** Architect OS is Project Zero and the working interface; GitHub is the durable store; the LMS is a separate app owned by Claude and ChatGPT. P01 Tech PMO AI proceeds only if it passes discovery. _(→ FACT-001, FACT-002, RSK-001, RSK-002)_ `CPMAI-2.4`
- **DEC-002** Front end: Vite + React + TypeScript. `AB100-1.3.3`
- **DEC-003** Persistence: JSON files in the repo, no database. _(→ REQ-003, SYS-001)_ `AB100-1.1.3`
- **DEC-004** LLM access via the local Claude Code login (`claude -p`), not an API key. _(→ FACT-003, UNKNOWN-002)_ `AB100-1.3.3`
- **DEC-005** The method lives in SKILL.md files and the app loads them as system prompts; no prompt is hard-coded in the app. _(→ REQ-004)_
- **DEC-006** Voice: browser Web Speech API dictation behind an input adapter. _(→ REQ-005)_
- **DEC-007** Human confirmation of every extracted entity before commit. _(→ REQ-002)_ `AB100-3.4.8 CPMAI-1.5`
- **DEC-008** Code lives at products/p00-architect-os/.
