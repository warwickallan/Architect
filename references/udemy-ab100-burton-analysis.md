# Udemy AB-100 (Phillip Burton) — fitness-for-purpose analysis

**Date:** 2026-09-18 · **Source:** enrolled-course curriculum, extracted read-only from Warwick's Udemy session (course id 6919869, last updated 2026-09-15) · **Full curriculum, per-section totals, lecture-by-lecture classification, playlist and watch-later list:** `udemy-ab100-burton-curriculum.md` · **Machine-readable:** `udemy-ab100-burton-lectures.csv`

Purpose assessed against: background/gym listening now to understand agentic AI architecture, ahead of the AB-620 → AB-100 route.

## Headline numbers

| | |
|---|---|
| Total video | **10h 44m** (108 lectures, 18 sections, 19 quizzes, 2 practice tests of 28 + 29 questions) |
| 🎧 Listen (audio-only works) | **5h 01m**, 50 lectures |
| 👀 Watch at a computer | **3h 11m**, 23 lectures |
| ⏭️ Skip this pass | **2h 32m** — sign-in/trial setup, seven practice activities and their solutions, housekeeping, quizzes |
| Copilot Studio building (sections 2, 3, 5–8) | **4h 32m = 42%** of all video |
| Architecture / governance (sections 4, 9, 11–13) | 2h 23m = 22% |
| Foundry (10) | 48m = 7% · M365 + Power Platform (14–15) | 1h 51m = 17% · Dynamics 365 (16–17) | 51m = 8% |

## B. AB-100 coverage assessment

**How it maps.** Every lecture title carries Burton's objective numbers 1–74, which follow the official study guide (skills measured as of 14 Oct 2026) in order — they map one-to-one onto Architect's `AB100-x.y.z` IDs, so coverage can be checked mechanically (table at the end of the curriculum file). All 74 objectives are cited at least once; by a mechanical test (under 5 minutes, or only inside a lecture that bundles three or more objectives) **50 are covered, 24 are light, none are absent**. Applying judgement to *how* they're taught changes the picture:

**Covered well** — these are genuinely taught, with the screen to back them:
- Copilot Studio agent design (AB100-2.1.5–2.1.7 task/autonomous/prompt-and-response agents; 2.1.10 topics and fallback; 2.1.14 NLP vs CLU vs generative orchestration; 2.1.15–2.1.16 agent flows and prompt actions)
- Extensibility (2.2.3 agent extensibility, 2.2.4 MCP, 2.2.5 Computer Use, 2.2.6 behaviours incl. reasoning; 2.2.7 M365/Teams/SharePoint)
- Multi-agent design (1.2.3) — five lectures, ~44 min, child vs connected agents, orchestrating agents
- Grounding and data (1.1.2, 1.1.3, 2.1.11; residency 3.4.6; access controls on grounding 3.4.7)
- Models in Foundry (1.2.8 custom models, 1.2.10 SLMs, 1.3.4 model router, 2.2.1 custom models, 2.1.8 Foundry Tools)
- Security, governance and ALM for both Copilot Studio and Foundry (3.4.1–3.4.4, 3.3.2–3.3.3, 3.4.8 audit trails)
- Dynamics 365 — each of the seven D365 objectives has its own lecture (2.1.1–2.1.4, 2.3.1–2.3.2, 2.3.4, 2.3.6–2.3.7, 3.2.4, 3.3.5–3.3.6 via generic solutions) — orientation-depth only, but for us that's exactly what those exam-only objectives need

**Covered lightly** (cited, but not enough to answer a scenario question on):
- **Costs and benefits — the whole of area 1.3.** ROI criteria + ROI analysis share one 3-minute lecture (L78); build/buy/extend shares 3½ minutes with "extend M365 Copilot" (L84); TCO is barely mentioned. For an architect exam this is the weakest area.
- 1.1.1 *assess the use of agents in task automation, analytics and decision-making* — folded into "what are agents" (L9, L79); no framework for deciding *when not to*.
- 1.2.1 Cloud Adoption Framework AI adoption (5 min) and 1.2.12 AI Center of Excellence (under 2 min).
- 1.2.9 prompt library guidelines (under 3 min) — 1.2.11 prompt engineering itself is fine (L82–83).
- 3.1.2 backlog/user-feedback analysis and 3.1.3 AI-based tuning — bundled into one 9-minute monitoring lecture (L51, "51–54a").
- 3.2.2 validation criteria for custom models, 3.2.5 building test cases with Copilot — shared titles, mostly mechanical.
- 3.3.1 ALM for data and 3.3.4 ALM for custom models — shared with grounding and fine-tuning lectures; the *process design* isn't taught.
- 3.4.5 responsible-AI adherence — 3 minutes.

**Weighting mismatch.** The exam is 40–45% *Deploy* (monitor/tune, testing, ALM, security/governance), but the course's Deploy minutes are ~35% of cited time and heavily "here is the analytics screen". Testing and evaluation *methodology* — test sets, evaluation methods, reviewing results, metrics that matter — gets two lectures of ~6 min each (L53, L70). This is the same gap AB-620 area 3.1 will expose.

**Character of the course.** It is an implementation course organised by exam objective: "Design X" is taught as "here is where X is configured, watch me configure it". That's ideal for the orientation pass you want (you hear every concept named, in Microsoft's vocabulary, with the product it lives in) and for AB-620 lab prep. It is not architecture reasoning: no options-and-trade-offs, no NFRs, no integration patterns, no source-of-truth or trust-boundary thinking, no scenario walk-throughs. Those are what AB-100 questions are likely to be built from — unverified until we see a practice assessment, but consistent with the audience profile.

Also absent: **A2A** (in the AB-100 audience profile and an AB-620 objective) — no lecture mentions it; enterprise integration patterns beyond Copilot Studio tools/connectors; identity strategy.

## C. AB-620 overlap assessment

Roughly **half the course double-serves AB-620.** Sections 2, 3, 5, 6, 7, 8 (4h 32m, 42%) are Copilot Studio building — topics, generative answers, instructions, knowledge, triggers, tools, custom prompts, multi-agent, agent flows, MCP, computer use — which is AB-620 areas 1.2, 1.3, 2.1–2.3 almost line for line. Section 9's Copilot Studio monitoring and solution/ALM lectures (L51–L55) are AB-620 area 3. Add section 15's Dataverse-triggered autonomous agent and it's about 5h 15m of AB-620-relevant material.

What that means for the route: the **watch-later list is effectively AB-620 lab preparation**, so nothing is wasted. The purely AB-100 material — strategy, ROI, CAF/CoE, Foundry models and governance, Well-Architected, D365 orchestration — is only about 2h 30m, which is why the listening playlist front-loads concepts and pushes the D365 lectures to the end.

Missing for AB-620 specifically: Azure AI Search, Application Insights, A2A, Fabric data agents, test sets and evaluation methods, pipelines — a different course (e.g. Bakshi's AB-620, already in `curated-learning.md`) or Microsoft Learn covers those.

## D. Gym listening playlist

5h 01m, 50 lectures, in concept order — full list with section/lecture numbers and lengths in `udemy-ab100-burton-curriculum.md` § *Curated gym listening playlist*. Order: what an agent is → agent types and autonomy → instructions/prompts/responsible AI → grounding and data → tools, MCP, extensibility → multi-agent → models → strategy and value → security and governance → testing/evaluation/telemetry → ALM → Dynamics 365 last.

Two lectures are listenable only in part: L21 (generative AI and knowledge sources) and L47 (Computer Use) each open with the concept and then demo — stop when the clicking starts.

## E. Watch later at a computer

3h 11m, 23 lectures, ordered so the Copilot Studio build sequence stays coherent — § *Watch later at a computer* in the curriculum file. These are the ones where the screen carries the meaning: environment and solution setup (L10), topic authoring (L15), publishing (L22), triggers and tools (L30–31), custom prompts (L34), agent flows and the multi-agent build (L43, L38, L41), analytics (L51, L69), Foundry (L59, L60, L63), M365/Teams/SharePoint agents (L80, L83, L86), Power Platform (L88, L89, L92–94), D365 business terms (L99).

## F. AB-100 gaps Architect must teach elsewhere

Ordered by exam weight × how thin the course is × how central to the architect role:

1. **Value: ROI, TCO, business case, build/buy/extend (AB100-1.3.1–1.3.3)** — 6 minutes in the course. Ours: CPMAI Domain II tasks 2.5, 2.9 and the discovery pack's value & suitability assessment; teach it by doing it on P01.
2. **When agents are appropriate at all (1.1.1) and deterministic-vs-agentic boundaries** — not taught as a decision. Ours: the suitability classification in discovery; concept lesson `deterministic-vs-agentic`.
3. **Testing and evaluation methodology (3.2.1, 3.2.5; AB620-3.1.1–3.1.3)** — test sets, evaluation methods, reviewing results, HIL/failure/boundary cases. Ours: the evaluation plan seeded in discovery and run in Build & Evaluate; lesson to write.
4. **Monitoring → feedback → tuning loop (3.1.2, 3.1.3, 3.1.5)** — course shows dashboards, not the loop. Ours: Deploy & Operate stage, telemetry plan, CPMAI 5.3–5.4.
5. **ALM as design for data and models (3.3.1, 3.3.4)** plus environment strategy — course shows managed/unmanaged solutions only.
6. **Operating model: CAF AI adoption and AI Centre of Excellence (1.2.1, 1.2.12)** — 7 minutes total; needs a conceptual lesson with Microsoft's CAF material as the primary source.
7. **Architecture reasoning itself** — options and trade-offs, NFRs, source of truth, trust boundaries, HIL authority, integration patterns, ADRs. No exam objective is literally "write an ADR", but scenario questions test exactly this. Ours: the Architect stage and its skill; lessons `source-of-truth`, `trust-boundary`, `hil-authority`.
8. **A2A and enterprise integration/identity (AB-620 1.1.1–1.1.2, 2.3.5; AB-100 audience profile)** — absent. Microsoft Learn primary.
9. **Responsible AI beyond a checklist (3.4.5)** — 3 minutes; ties to CPMAI Domain I, which the course doesn't touch at all.
10. **Dynamics 365 (13 objectives)** — present but shallow; keep as exam-only conceptual labs per `curriculum/GAP-BACKLOG.md`. The course's D365 lectures are a reasonable starting point.

## Practical notes

- Do the two practice tests (57 questions) only at the readiness gate, not now — they're the course's own, not Microsoft's; PROJECT.md wants two timed mocks at ≥ 85% and these can be one of them.
- The course was updated 2026-09-15 and already numbers objectives against the 14 Oct 2026 guide — check `VERSION-WATCH` after 15 Oct that nothing was renumbered.
- Nothing in this analysis reproduces course content; the curriculum file holds titles, types and lengths only.
