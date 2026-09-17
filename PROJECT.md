# PROJECT.md — Programme charter

**Status:** Foundation (bootstrapped 2026-09-17; programme model refined 2026-09-17). No product selected yet.

## Why Architect exists

Warwick is an experienced implementation/project professional who can already make AI-assisted solutions work. The gap to close is the step from *builder* to *architect*: identifying the right AI opportunity, designing the end-to-end solution, understanding the Microsoft implementation stack well enough to be credible hands-on, and explaining commercial and technical trade-offs.

## Two outputs, produced at the same time

1. **Learning** — closing the knowledge profile and evidencing it against CPMAI / AB-410 / AB-620 / AB-100.
2. **A reusable AI-consulting delivery method** — templates and worked examples usable with a future client: discovery pack, business case, process map, AI-suitability assessment, architecture pack, ADRs, evaluation plan, governance/HIL model, operationalisation plan, case study. The method is *Product Zero* (`method/README.md`): built once on the first project, then reused and improved on every later one.

Where possible one artefact serves both: Warwick performing and defending the real AI-suitability assessment for the chosen product is better learning evidence than a practice worksheet.

## Target outcome

**Career:** credible evidence for an AI transformation / solution architecture role of the kind discussed in relation to DEPT (roughly £70–80k). Evidence means *"here is a business problem I analysed, the architecture I designed, the trade-offs I recorded, the system I delivered, how I secured and evaluated it, and the measurable result"* — plus a delivery toolkit that shows it's repeatable. Exact DEPT competencies are an open assumption (`ASSUMPTIONS.md` A01).

**Business:** ship automation/agent products that materially reduce low-value PM administration while preserving governance where judgement is genuinely required.

**Learning:** close an uneven knowledge profile (practical experience; PL-900 as the only formal Power Platform grounding) without a beginner-to-advanced march through Microsoft's prescribed order.

These outcomes are measured separately — see `progress/DASHBOARD.md`.

## The four-framework model

| Framework | Role | Question |
|---|---|---|
| **CPMAI** | **Lifecycle / control loop** | Should we do this? Why? What value should it create? What data, risks and success criteria matter? How do we evaluate, operationalise, govern and improve it? |
| **AB-100** | **Architecture spine** | Given the requirement and constraints, what should the end-to-end solution architecture look like? |
| **AB-410** | **Enterprise process / data / workflow foundation** | How do the business process, data, workflow, application, environment and deterministic automation layers work? |
| **AB-620** | **Intelligent / agentic layer** | How do agents, knowledge, RAG, tools, MCP/APIs, HIL and agent evaluation work? |

**Exam route:** PMI-CPMAI (≈ month 2–3; PMI's paid Exam Prep Course must be completed first — `ASSUMPTIONS.md` A14) → AB-620 (≈ month 3–4) → AB-100 (≈ month 4–6). AB-410 is learned fully; its exam is optional because either AB-620 or AB-410 satisfies the AB-100 Associate prerequisite (verified 2026-09-17 — `references/SOURCE-REGISTER.md`). AB-100's English objectives change on **2026-10-14** — `references/VERSION-WATCH.md`.

AB-100 is the spine; CPMAI surrounds the whole lifecycle. After implementation CPMAI and AB-100 *return*: did this solve the problem? was the value hypothesis right? what risks or adoption issues appeared? how should it operate and be governed? is the architecture still correct now there is evidence?

## Operating loop

```
BUSINESS PROBLEM
  → CPMAI      discovery: value, suitability, data, authority, constraints, evaluation plan
  → AB-100     architecture hypothesis v0.1 + ADRs   (only after a Discovery Decision)
  → AB-410/620 just-in-time learning for what the project actually needs
  → BUILD/TEST real product / vertical slice, tests seeded from the evaluation plan
  → CPMAI      evaluation, operationalisation, realised value, governance
  → AB-100     architecture review against evidence
  → repeat
```

Discovery must not begin with "build a Copilot Studio agent". It begins with "what business problem exists and why?" and may legitimately conclude *eliminate the step*, *deterministic flow*, *conventional app*, *AI-assisted*, *agentic*, *human decision*, or *don't use AI here*. Microsoft becomes the implementation platform because requirement, environment and economics justify it — not because the syllabus does.

## Opening learning sequence

| Lesson | Primary lens | Purpose | Professional artefact produced |
|---|---|---|---|
| L000 | all four | Short visual orientation: the four viewpoints and the lifecycle. No product decisions. | — |
| L001 | CPMAI | Business problem & value: who, current process, why the control exists, scale, cost/waste/risk, baseline, measurable outcome, value hypothesis. No solution design. | Discovery brief; current-state pack |
| L002 | CPMAI + early AB-100 | AI suitability & use-case selection: is AI justified at all; deterministic vs language/ambiguity vs human; failure consequences; feasibility; go/no-go/reshape. | Value & suitability assessment |
| L003 | CPMAI + AB-100 | Data, authority, stakeholders & constraints: sources of truth, read/write authority, identity, sensitivity, adoption constraints, evaluation criteria. | Data/authority/constraints pack; evaluation plan; **Discovery Decision** |
| L004 | AB-100 | Architecture hypothesis v0.1 and material ADRs — only after discovery evidence exists. | Architecture pack; ADRs; trace table |

Then descend into AB-410 / AB-620 just-in-time as the real project needs. Default sprint allocation once building: **60% building / 25% JIT learning / 15% evidence, reflection and syllabus backfill.**

**Visual learning is first-class.** Every substantial lesson ships a slide outline, narration script, storyboard/diagram, lab, quiz and evidence file (`templates/lesson-template.md`).

**Status ladder:** `Unseen → Explained → Labbed → Applied → Evidenced → Exam-ready`. "Claude built it" never advances an objective past *Applied*.

## Who does what

| Role | Accountable for |
|---|---|
| **Warwick** | Product ownership, real business requirements, **authoring discovery content**, access decisions, manual learning reps, approving consequential architecture choices, demonstrating understanding, UAT, career narrative |
| **Claude Code** | Repo-native tutor, implementation partner and custodian: scaffolds and challenges discovery, lessons, slides/scripts, code/config, tests, documentation, evidence scaffolding, coverage and trace updates |
| **ChatGPT (guide)** | Curriculum stewardship, source research, architecture challenge, gap analysis, lesson design standards, review questions, mock interview/exam reasoning, periodic syllabus and method refresh |
| **Business reviewer** | Confirms the product improves PMO/consultant work and rules reflect real delivery practice |
| **Platform/security reviewer** | Reviews tenant, identity, DLP, data access, production and compliance before consequential deployment |
| **Architecture peer** | Periodic challenge of design and ADRs; spots over-engineering and hidden assumptions |

Claude may implement quickly, but **Warwick remains accountable for architecture decisions and performs representative tasks himself.**

## Milestones (targets, not commitments — access to licences/APIs/environments unconfirmed)

| Stage | Window | Gate |
|---|---|---|
| Foundation | from 2026-09-17 | Repo, syllabus/version baseline, method v0, L000, **candidate selected**, **discovery pack complete → Discovery Decision** |
| Architecture | after Discovery Decision | v0.1 hypothesis, first ADRs, trace table |
| First product | ≈ 3–5 weeks after architecture | Safely usable MVP with measurable utility; tests from the evaluation plan |
| Consolidation | Oct–Nov 2026 | Realised-value review; architecture review; method v1; CPMAI course; AB-100 refresh after 14 Oct |
| Second product | Nov–Dec 2026 | Method reused, not relearned; AB-620 closure |
| Architecture depth | Dec 2026–Feb 2027 | Identity, environments, security, RAG-where-justified, monitoring, cost, ALM |
| Certification & portfolio | Nov 2026–Mar 2027 | CPMAI + AB-620 done; AB-100 done or exam-ready; 2–3 case studies; toolkit; publishable pack |

## Exam-readiness gates (Architect's own — stricter than the official 700 pass mark)

- Every official objective present in the coverage matrix; high-weight objectives *Applied* or *Evidenced* before booking.
- At least one representative hands-on task per important implementation skill.
- Warwick can explain each major ADR without consulting Claude.
- A delayed retest after initial learning.
- Two timed mock runs at ≥ 85% before booking.

## Business metrics (baseline in discovery, then measure — targets are internal, not vendor benchmarks)

Admin effort per processed unit of work (≥ 50% reduction after adoption) · consequential external writes with audit trail (100%) · external write success after permitted retries (≥ 95%) · duplicate record creation (< 2%) · extraction precision (baseline, then ≥ 90% for auto-accepted classes) · high-risk cases routed to human review (100%) · user correction rate (trend down) · processing time vs manual baseline · adoption · exception rate (monitor, don't blindly minimise). The project-specific set is defined in its `05-evaluation-plan.md`.
