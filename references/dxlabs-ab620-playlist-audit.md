# DX Labs Global — "Microsoft AB-620: AI Agent Builder Associate Masterclass" (YouTube) — audit

**Date:** 2026-09-22 · **Playlist:** `PLeAdpmiY-mCcyiWNhmGi-BA7zMVwFj0cb` (https://www.youtube.com/playlist?list=PLeAdpmiY-mCcyiWNhmGi-BA7zMVwFj0cb) · **Channel:** DX Labs Global (@dxlabs) · **Per-video table:** `dxlabs-ab620-playlist.csv`

Assessed as a **visual supplement** only. Official AB-620 objectives (`curriculum/objectives/ab-620.md`, S02) remain authoritative. A short video course cannot replace Microsoft Learn or hands-on labs.

## Two corrections to the card up front

- **Runtime is 7 h 06 m across 61 videos** (avg ~7 min), not the "2 hours" the YouTube course card shows. It is not a quick skim.
- **Captions are auto-generated only, and YouTube blocked the caption API this session, so I could not read transcripts.** This audit is from titles, durations and the module structure (all captured read-only). **Content accuracy is unverified** — the course shows AI-production signals (synthetic-avatar branding, "100 Seconds Wall" / "Session Leak Vulnerability" framing, title typos like "Agentsc" and "Orchestetration", ASR-only captions). Treat as orientation, not authority; eyeball 2–3 videos before trusting any specific claim.

## Shape of the course

Eleven modules, integration/multi-agent-weighted:

| Module | Videos | Focus | AB-620 area |
|---|---|---|---|
| 1 | 6 | Rich responses, message formatting, adaptive cards, channels | 1.3 |
| 2 | 5 | Actions: connectors, agent flows, HTTP request, tools from topics | 1.2 / 1.3 |
| 3 | 6 | Generative answers, knowledge sources, custom instructions & prompts | 1.3 |
| 4 | 5 | Multi-agent architecture & design | 2.3 |
| 5 | 6 | Child agents (sub-orchestration) | 2.3 |
| 6 | 7 | Connected agents, Foundry agents, Fabric data agents | 2.3 |
| 7 | 5 | Agent2Agent (A2A) protocol | 2.3 |
| 8 | 6 | Integration strategy, patterns, authenticate & govern, enterprise | 1.1 |
| 9 | 5 | Connector & REST API tools | 2.2 |
| 10 | 5 | Knowledge: Copilot/real-time connectors, Azure AI Search | 2.1 / 2.4 |
| 11 | 5 | MCP: integrate, connect, auth, manage tools | 2.2 |

**Modules 4–7 (23 videos, ~2 h 50 m) are the standout:** multi-agent, child agents, connected agents, Foundry/Fabric integration and A2A — the agentic-first material that is hardest to picture from text and central to the AB-620 → AB-100 direction.

## Objective coverage (orientation level): 27 of 44 = 61 %

| Area | Covered | Verdict |
|---|---|---|
| 1.3 Configure topics | 8 / 9 | **well** — responses, formatting, adaptive cards, generative answers, knowledge, prompts, tools-to-topic, HTTP (only *manage variables* missing) |
| 2.1 Enterprise knowledge | 3 / 3 | **well** — Copilot connectors, Power Platform connectors, Azure AI Search |
| 2.3 Multi-agent collaboration | 5 / 5 | **well, unusually deep** — design, Foundry, existing agents, Fabric, A2A |
| 2.2 Add tools | 3 / 4 | **good** — MCP, REST APIs, custom-connector tools (*computer use* missing) |
| 1.1 Plan an agent solution | 4 / 7 | **partial** — enterprise integration, identity, channels, security/governance; missing responsible-AI strategy, reusable components, audience design |
| 1.2 Agent flows | 3 / 6 | **light** — flows, actions/connectors, I/O params only; **no HIL, no monitoring, no error handling** |
| 2.4 Integrate with Azure | 1 / 3 | **light** — Azure AI Search grounding only; no Foundry model catalog, no Application Insights |
| 3.1 Evaluate performance | 0 / 3 | **absent** |
| 3.2 ALM | 0 / 4 | **absent** |

**Covered well:** the whole of Area 2 (Integrate & extend — 40–45 % of the exam, the largest domain), plus topic/response configuration. Multi-agent and A2A are covered more thoroughly here than in our Burton AB-100 material.

**Covered lightly:** planning (1.1), agent-flow mechanics (1.2), Azure integration depth (2.4).

**Major gaps — the entire "Test and manage" domain (Area 3, 20–25 % of the exam) is missing**, along with: computer use (2.2.1), human-in-the-loop agent flows (1.2.2), agent-flow monitoring & Application Insights telemetry (1.2.4, 2.4.3), error handling (1.2.6), responsible-AI strategy (1.1.4), reusable components (1.1.6), manage variables (1.3.9), Foundry model catalog (2.4.2). The "Test & Fix / Test & Debug" videos (5-5, 6-6) are routing-debug demos, **not** the exam's test-set / evaluation-method / review-results methodology.

## Consumption mode

Auto-classified in the CSV: **17 LISTEN** (module intros and "…Explained" concept videos — gym/bedtime material), **15 WATCH** (design/architecture with diagrams), **29 BUILD ALONG** ("How to…/Adding…/Connect…" Copilot Studio screencasts — only useful at a computer with an environment).

For the stated goal — a short visual/gym/bedtime **orientation** layer — the usable slice is the **LISTEN + concept set: ~2 h 46 m across ~23 videos** (marked USE in the CSV). The 37 OPTIONAL step-by-step demos (~4 h 15 m) are build-along, not orientation. One SKIP (1-0, a content-light hype intro).

## Comparison with what Warwick already has (no duplication)

- **Burton AB-100 (owned):** architecture altitude; its Copilot Studio building is broader and shallower. DX Labs goes **deeper on multi-agent / child / connected / Foundry / Fabric / A2A** than Burton — additive, not duplicate.
- **AB-410 foundations (Burton + MS Learn):** platform layer — Dataverse, apps, flows. Different layer; DX Labs assumes Copilot Studio basics and jumps to integration/multi-agent. Minimal overlap.
- **Future MS Learn AB-620:** will carry the dry Area 3 / ALM / testing / computer-use content DX Labs omits. Complementary, not competing.

So it fills a real gap: a **visual mental-model layer for Area 2** (integration, multi-agent, A2A, MCP) that nothing else in the repo covers well.

## Recommendation: **selective supplement**

Use it as the **visual orientation layer for AB-620 Area 2 (integration & multi-agent), before Microsoft Learn + Copilot Studio labs + project work** — not as a core companion.

- **Do (orientation, ~2 h 46 m):** the LISTEN/USE set — module intros and the multi-agent, A2A, MCP and knowledge "Explained" videos. Ideal gym/bedtime layer for the hardest-to-visualise part of the exam.
- **Later, at a computer:** the BUILD-ALONG demos, only when actually building in Copilot Studio for P01 — and check each against Microsoft Docs, given the unverified accuracy.
- **Get elsewhere (not in this playlist):** all of Area 3 (test sets, evaluation methods, ALM, pipelines, environment variables), computer use, human-in-the-loop flows, monitoring/telemetry, responsible-AI strategy → Microsoft Learn AB-620 path + labs.
- **Not:** a stand-in for the official course; 7 hours of AI-produced video at 61 % orientation coverage with a missing exam domain does not qualify as core.

## If adopted

The full transcripts are **not** committed (third-party free content; the caption API was blocked anyway). If Warwick greenlights USE, the 61 videos can be added to a `Transcripts/AB-620/DX Labs Global/manifest.json` and pulled with the existing `tools/fetch_transcripts.py` (residential IP, since the datacentre fetch is blocked), and the USE subset fed to the narrate pipeline as an AB-620 orientation track. Master syllabus unchanged pending Warwick's decision.
