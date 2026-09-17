# PROJECT.md — Programme charter

**Status:** Foundation (bootstrapped 2026-09-17). No product selected yet.

## Why Architect exists

Warwick is an experienced implementation/project professional who can already make AI-assisted solutions work. The gap to close is the step from *builder* to *architect*: identifying the right AI opportunity, designing the end-to-end solution, understanding the Microsoft implementation stack well enough to be credible hands-on, and explaining commercial and technical trade-offs.

## Target outcome

**Career:** credible evidence for an AI transformation / solution architecture role of the kind discussed in relation to DEPT (roughly £70–80k). Evidence means *"here is a business problem I analysed, the architecture I designed, the trade-offs I recorded, the system I delivered, how I secured and evaluated it, and the measurable result"* — not badges alone. Exact DEPT competencies are an open assumption (`ASSUMPTIONS.md` A01).

**Business:** ship automation/agent products that materially reduce low-value PM administration while preserving governance where judgement is genuinely required.

**Learning:** close an uneven knowledge profile (practical experience; PL-900 as the only formal Power Platform grounding) without a beginner-to-advanced march through Microsoft's prescribed order.

These three outcomes are measured separately — see `progress/DASHBOARD.md`.

## The learning model

Four frameworks, one programme, interleaved by what the current project needs:

- **CPMAI** — business/value/delivery methodology: why, value, data, success criteria, iteration, evaluation, operationalisation.
- **AB-100** — the architecture spine that sits *above* every lesson: agent suitability, source of truth, build/buy/extend, ROI, security, testing, telemetry, ALM.
- **AB-410** — Microsoft business-solution plumbing: Dataverse, apps, flows, connectors, approvals, business logic, environments.
- **AB-620** — the agent/integration layer: Copilot Studio, tools, MCP/APIs, knowledge/RAG, HIL, identity, evaluation, ALM.

**Exam route:** CPMAI (≈ month 2–3) → AB-620 (≈ month 3–4) → AB-100 (≈ month 4–6). AB-410 is learned fully; its exam is optional because either AB-620 or AB-410 satisfies the AB-100 Associate prerequisite (verified 2026-09-17 — `references/SOURCE-REGISTER.md`). AB-100's English objectives change on **2026-10-14** — `references/VERSION-WATCH.md`.

**Method:** project-led and just-in-time. When a sprint needs Dataverse relationships, learn them *that day*, create one manually, explain why it's appropriate, then let Claude accelerate the repetitive part. When the product doesn't need something the exam covers, record it as a curriculum gap rather than polluting the architecture to satisfy an exam. Default sprint allocation: **60% building / 25% JIT learning / 15% evidence, reflection and syllabus backfill.**

**Visual learning is first-class.** Every substantial lesson ships a slide outline, narration script, storyboard/diagram, lab, quiz and evidence file (`templates/lesson-template.md`). The visual library deliberately builds reusable mental models: stack map, data-authority map, deterministic-vs-agentic decision tree, identity/trust-boundary diagram, MCP tool-call lifecycle, HIL authority matrix, dev/test/prod ALM flow, RAG/grounding diagram, telemetry/evaluation loop.

**Status ladder:** `Unseen → Explained → Labbed → Applied → Evidenced → Exam-ready`. "Claude built it" never advances an objective past *Applied*.

## Operating loop

```
BUSINESS PROBLEM → CPMAI      why? value? data? success? risk?
                 → AB-100     architecture hypothesis + trade-offs
                 → AB-410/620 learn the implementation options needed now
                 → BUILD+TEST real product / vertical slice
                 → EVIDENCE   did it work? what did Warwick learn?
                 → revise architecture / next sprint
```

Each week runs two tracks. **Delivery:** next outcome → architecture decision → JIT learning → build/test/ship. **Learning:** coverage matrix → uncovered high-value objectives → small lab / visual lesson / explain-back → evidence and spaced retest.

## Who does what

| Role | Accountable for |
|---|---|
| **Warwick** | Product ownership, real business requirements, access decisions, manual learning reps, approving consequential architecture choices, demonstrating understanding, UAT, career narrative |
| **Claude Code** | Repo-native tutor, implementation partner and custodian: lessons, slides/scripts, code/config, tests, documentation, evidence scaffolding, coverage updates |
| **ChatGPT (guide)** | Curriculum stewardship, source research, architecture challenge, gap analysis, lesson design standards, review questions, mock interview/exam reasoning, periodic syllabus refresh |
| **Business reviewer** | Confirms the product improves PMO/consultant work and rules reflect real delivery practice |
| **Platform/security reviewer** | Reviews tenant, identity, DLP, data access, production and compliance before consequential deployment |
| **Architecture peer** | Periodic challenge of design and ADRs; spots over-engineering and hidden assumptions |

Claude may implement quickly, but **Warwick remains accountable for architecture decisions and performs representative tasks himself.**

## Milestones (targets, not commitments — access to licences/APIs/environments unconfirmed)

| Stage | Window | Gate |
|---|---|---|
| Foundation | from 2026-09-17 | Repo, syllabus/version baseline, first visual lesson, **project selected and scoped by explicit exercise** |
| First product | ≈ 3–5 weeks after selection | Safely usable MVP with measurable utility |
| Consolidation | Oct–Nov 2026 | First product measured/hardened; CPMAI course; AB-100 refresh after 14 Oct |
| Second product | Nov–Dec 2026 | Same foundations applied; AB-620 closure |
| Architecture depth | Dec 2026–Feb 2027 | Identity, environments, security, RAG-where-justified, monitoring, cost, ALM |
| Certification & portfolio | Nov 2026–Mar 2027 | CPMAI + AB-620 done; AB-100 done or exam-ready; 2–3 case studies; publishable pack |

## Exam-readiness gates (Architect's own — stricter than the official 700 pass mark)

- Every official objective present in the coverage matrix; high-weight objectives *Applied* or *Evidenced* before booking.
- At least one representative hands-on task per important implementation skill.
- Warwick can explain each major ADR without consulting Claude.
- A delayed retest after initial learning.
- Two timed mock runs at ≥ 85% before booking.

## Business metrics (baseline first, then measure — targets are internal, not vendor benchmarks)

Admin effort per processed unit of work (≥ 50% reduction after adoption) · consequential external writes with audit trail (100%) · external write success after permitted retries (≥ 95%) · duplicate record creation (< 2%) · extraction precision (baseline, then ≥ 90% for auto-accepted classes) · high-risk cases routed to human review (100%) · user correction rate (trend down) · processing time vs manual baseline · adoption · exception rate (monitor, don't blindly minimise).
