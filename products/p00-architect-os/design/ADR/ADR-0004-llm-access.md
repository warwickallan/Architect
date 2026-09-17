# ADR-0004 — LLM access via the local Claude Code login (`claude -p`), not an API key

**Status:** Accepted · **Date:** 2026-09-17 · **Product:** P00 Architect OS · **Objective IDs:** AB100-1.3.3 · CPMAI-3.4 · **Decided by:** Warwick (corrected Claude's API-key assumption) · **Record:** DEC-004, FACT-003, UNKNOWN-002

## Context
Claude Code is logged in on this machine; print mode runs on the subscription. Concerto Studio already uses this approach.

## Options
| Option | Pros | Cons |
|---|---|---|
| `claude -p` spawned by the server | No key, no cost beyond subscription, works today | Only where Claude Code is logged in; process spawn latency |
| Claude Agent SDK | Programmatic, streaming, same login | Extra dependency; Windows behaviour to verify |
| Anthropic API key | Deployable anywhere | Costs money; key management; not needed for a local tool |

## Decision
`claude -p` behind a single server module (`server/llm.ts`) with a streaming JSON output. The Agent SDK may replace it inside that module if it proves better on Windows (UNKNOWN-002). An API key becomes relevant only if the OS is deployed off this machine.

## Consequences
The OS is a local tool by design. The system prompt is passed per call (ADR-0005); conversation continuity uses the CLI's session resume.

## Warwick's explain-back
_pending_
