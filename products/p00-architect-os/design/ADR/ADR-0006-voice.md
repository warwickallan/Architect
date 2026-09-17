# ADR-0006 — Voice input via browser Web Speech API behind an input adapter

**Status:** Accepted · **Date:** 2026-09-17 · **Product:** P00 Architect OS · **Objective IDs:** — · **Decided by:** Warwick · **Record:** DEC-006, REQ-005

## Context
Discovery is conversational; Warwick wants to talk to it. No speech provider should be baked into the methodology or data model.

## Options
| Option | Pros | Cons |
|---|---|---|
| Web Speech API (Chrome) | Free, no keys, available now | Middling accuracy; Chrome-only |
| Whisper / Azure Speech | Better accuracy | Keys, cost, integration |
| No voice in v0.1 | Simplest | Loses the natural interaction |

## Decision
Web Speech API dictation behind `client/src/input/` adapter interface (`start/stop/onTranscript`). Spoken replies deferred.

## Consequences
Swapping provider touches one file. Transcript → skill → record is unchanged by the provider.

## Warwick's explain-back
_pending_
