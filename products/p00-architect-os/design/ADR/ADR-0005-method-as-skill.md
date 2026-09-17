# ADR-0005 — The method lives in SKILL.md files; the app loads them as system prompts

**Status:** Accepted · **Date:** 2026-09-17 · **Product:** P00 Architect OS · **Objective IDs:** CPMAI-2.7 · **Decided by:** Warwick · **Record:** DEC-005, REQ-004, HYP-002

## Context
The interview method must be durable, reviewable and reusable across projects, and runnable from both the app and the Claude Code terminal.

## Options
| Option | Pros | Cons |
|---|---|---|
| `.claude/skills/<stage>/SKILL.md`, loaded by the server as the system prompt | One source of truth; versioned with the method; `/discovery-interview` works in the terminal | Prompt and UI contract must stay in step |
| Prompt inside the app | Simple | Drifts from the repo's method within weeks; not usable from the terminal |

## Decision
Skills under `.claude/skills/`. The server reads the file at request time (no restart to change the method). The skill defines the output contract the app parses (a `record-updates` block).

## Consequences
Method changes are commits to SKILL.md. The app contract is documented in the skill itself.

## Warwick's explain-back
_pending_
