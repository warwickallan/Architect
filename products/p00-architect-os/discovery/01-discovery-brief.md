# 01 — Discovery brief: Architect OS

> Rendered from `record/` by Architect OS on 2026-09-17 08:27. Do not edit — change the record.

## Problem / opportunity

- **PAIN-001** Markdown templates as the discovery interface are consultancy theatre: filling in a form is not how discovery happens and Warwick will not use them. _(→ FACT-001, REQ-001)_ `CPMAI-2.1`
- **PAIN-002** Discovery written as prose is not traceable: the same fact gets retyped into the process document, business case, assumptions, HIL model, requirements, ADRs and case study, and its origin is lost. _(→ REQ-003, MET-002)_ `CPMAI-1.5 CPMAI-2.1`

## What we know

- **FACT-001** Warwick learns by making and looking at things; he is visual and process-minded, has ADHD, and retains little from reading alone. Something must exist on screen or be built for learning to stick. _(→ PAIN-001, HYP-001)_ `CPMAI-2.1`
- **FACT-002** Concerto Studio, Launch and RAID were each built as a single-tab web app that was extended tab by tab as need arose. The pattern is proven for Warwick. _(→ DEC-001, HYP-001)_ `CPMAI-2.2`
- **FACT-003** Claude Code is logged in on this machine (Yoga). Print mode (`claude -p`) runs on the subscription, so a local tool needs no Anthropic API key. Concerto Studio uses the same approach on the work machine. _(→ DEC-004, SYS-002)_ `CPMAI-3.4`
- **FACT-004** `claude -p` loads every configured MCP server's tool schemas into context (~111k tokens, ~$1 list per turn) unless `--strict-mcp-config` is passed; with it, plus `--tools ""` and a replaced system prompt, a turn is ~500 tokens of context. _(→ DEC-004, UNKNOWN-002)_ `CPMAI-2.5 CPMAI-3.4`

## Hypotheses to test

- **HYP-001** A conversational discovery interface with a live knowledge canvas will get discovery done, remembered and reused — where Markdown templates would not. _(→ FACT-001, FACT-002, MET-001)_ `CPMAI-2.2 CPMAI-2.5`
- **HYP-002** The method can be expressed as a skill (system prompt + rules) that both Architect OS and Claude Code run, and it will prove reusable on a second project. _(→ DEC-005, UNKNOWN-001)_ `CPMAI-2.7`

## Open questions

- **UNKNOWN-001** Which entity types, fields and links actually matter — to emerge from running P01 discovery through the OS, not designed up front. _(→ HYP-002, DEC-003)_ `CPMAI-3.1`
- **UNKNOWN-002** Whether `claude -p` (print mode) or the Claude Agent SDK behaves better on Windows for streaming and session continuity. _(→ DEC-004)_ `CPMAI-2.2`
