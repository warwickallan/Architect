# Udemy AB-410 (Phillip Burton) — fitness-for-purpose analysis

**Date:** 2026-09-21 · **Source:** enrolled-course curriculum, read-only from Warwick's Udemy session (course id 4049210, last updated 2026-09-21) · **Full curriculum, classification, playlist, watch list and 48-row coverage table:** `udemy-ab410-burton-curriculum.md` · **CSV:** `udemy-ab410-burton-lectures.csv`

Purpose assessed against: AB-410 is *learn fully, exam optional* in the programme (`PROJECT.md`) — the Power Platform foundation the P01 build will need, and the hands-on half of the AB-620 → AB-100 route.

## Headline

| | |
|---|---|
| Total video | 20 h 57 m — **but only 8 h 05 m is the AB-410 course** (sections 1–16, lectures 1–81) |
| Bonus PL-200 course (sections 17–38, lectures 82–213) | 12 h 53 m — older material, PL-200 objective numbers, kept "temporarily"; ignore for AB-410 except the lectures flagged *bonus-watch* |
| 🎧 Listen (AB-410 proper) | **1 h 59 m**, 19 lectures |
| 👀 Watch / do-along (AB-410 proper) | **5 h 36 m**, 53 lectures |
| ⏭️ Skip | 30 m — sign-in, work-email setup, housekeeping |
| ⏸ Bonus-watch (from PL-200, later) | 1 h 47 m, 17 lectures — solutions/ALM, security roles, triggers/actions, process mining, desktop flows, Dataverse for Teams |

**Character of the course.** This is a builder's course and mostly earns a 👀: Burton creates an Expenses solution end to end (Dataverse tables → model-driven app → relationships and calculated/rollup/formula columns → business rules and BPFs → cloud flows and approvals → canvas app → components, variables, error handling, Monitor → AI Hub prompts and models → strategy/ALM). That makes the WATCH list a ready-made **AB-410 lab sequence** — do-along at a computer — which is exactly what the programme needs for AB-410 (Microsoft recommends hands-on before the exam). The listen-cut is thin by nature: AB-410 has little pure concept to hear.

## B. AB-410 coverage (lectures 1–81 vs the 48 objectives)

Mechanically all 48 are cited; **36 well, 12 light, 0 missing**. Burton's numbers 1–48 follow the study guide order exactly, so the mapping is one-to-one.

**Covered well:** data modelling (1.2.2–1.2.7, 1.2.9–1.2.10 — tables, properties, columns, relationships, prompt columns, row summaries, forms, security), model-driven apps (2.1.1–2.1.5, 2.1.7 — forms, views, generative pages, composition, access, charts and dashboards), canvas apps (2.2.1–2.2.2, 2.2.4–2.2.8 — accessibility/performance/responsiveness/usability, components incl. named formulas and UDFs, variables and collections, error handling, Monitor, Copilot Studio agent from a canvas app), cloud flows (3.1.2–3.1.6 — connectors, approvals, actions, conditions/loops, testing), business logic (3.3.1–3.3.4 — business rules, BPFs, calculated/rollup/formula columns, use cases).

**Light:**
- **AI Hub (3.2.1, 3.2.3–3.2.6)** — one 9½-minute lecture (L69) carries four objectives (build prompts, add knowledge, settings/models, inputs), plus short consume-in-app/flow lectures. For a domain worth 40–45% this is the weakest patch relative to weight.
- **Solution design (1.1.1 analyse requirements 2½ min; 1.1.3 extensibility options 3¾ min)** — named, not taught.
- 1.2.1 tables in the data workspace and 1.2.8 public views — only inside multi-objective lectures.
- 2.1.6 access to model-driven apps (2 min), 2.2.3 automate business processes from canvas apps (2 min), 3.1.1 recommend triggers (3¾ min).

**Weighting:** minutes citing area 1 / 2 / 3 = 142 / 166 / 191, i.e. area 3 (exam 40–45%) gets 38% of the time — close enough; the shortfall is depth on AI Hub, not minutes.

**Not in the course at all:** Power Pages (in the AB-410 audience profile — "integrating agents and Copilot features into … Power Pages sites" — but no objective bullet names it, and Burton has nothing on it); Copilot in Power Apps/Dataverse beyond one lecture (L147, in the bonus).

## C. Overlap with the other exams

- **AB-620:** small — L67 (Copilot Studio agent from a canvas app), L77 (built-in agents), L26 (generative pages). This course is the *platform* half; nothing here substitutes for Copilot Studio depth.
- **AB-100:** L76–L79 (requirements → components, built-in agents, extensibility, solution/ALM strategy) are the same ideas as AB100-1.2 and 3.3 at builder altitude; L54–L57 map to the Well-Architected thinking in AB100-2.1.13.
- **PL-200 bonus:** the bonus course goes *deeper* than the AB-410 course on solutions and ALM (L192–L196), security roles and app security (L197–L200), triggers/actions/sharing (L185–L188), connectors (L151), and adds process mining and desktop flows (L190–L191) and Dataverse for Teams (L209). Those are the 17 *bonus-watch* lectures.

## D. Listening playlist — 1 h 59 m

Strategy and solution design (L76–79) → environments and licensing (L7, L9) → data-model concepts (L18, L29) → business logic and security concepts (L37, L38, L36) → automation concepts (L40, L43, L68) → designing canvas apps well (L54–57) → AI models in the platform (L73). Several of these are demos with a conceptual opening; expect to stop when the clicking starts.

## E. Watch / do-along — 5 h 36 m

Course order, lectures 10–75 minus the listen and skip sets. Treat it as the AB-410 lab track: build Burton's Expenses solution in your own dev environment as you go (needs a Power Platform developer environment — `ASSUMPTIONS.md` A03).

## F. Gaps for Architect to cover elsewhere

1. **AI Hub prompts and models (3.2.\*)** — depth: prompt design, knowledge grounding, model settings, inputs, consuming in apps/flows. Microsoft Learn modules + a lab on P01 when a prompt column or AI Hub prompt is genuinely needed.
2. **Requirements → components and extensibility options (1.1.1, 1.1.3)** — this is the discovery/architecture work; our method covers it better than any course. Cite `AB410-1.1.1`/`1.1.3` on the P01 discovery record.
3. **Environment strategy and ALM (1.1.4, 1.1.5)** — Burton's L9/L79 are adequate; the bonus L192–L196 add solution import/export and moving apps between environments. Real evidence comes from doing P01's ALM.
4. **Power Pages** — not taught; check whether the live exam guide bullets it before spending time.
5. **Copilot in Power Apps / Power Automate / Dataverse** (the exam's "AI-enabled tools" framing) — one bonus lecture each (L147, L182, L117). Microsoft Learn.

## Practical notes

- Updated today (2026-09-21); the AB-410 study guide itself last changed 2026-07-31 (`SOURCE-REGISTER` S01). Re-check numbering if either moves.
- Two practice tests (34 + 34 questions) — hold for the readiness gate, as with AB-100.
- Transcripts: 193 video lectures; captions pulled to `Transcripts/AB-410/Udemy - Phillip Burton/` (see that folder's manifest).

## G. Streamlined plan — how much of the 21 hours to actually do (added 2026-09-22)

Extends the cut above to *all* runtime, from the same lecture data (`udemy-ab410-burton-lectures.csv`, columns `tier` and `action`). No new scraping.

**Actual total video runtime: 20h 57m** (193 video lectures). Articles/quizzes/practice tests excluded.

### Runtime by tier

| Tier | Runtime | Lectures | What it is |
|---|---|---|---|
| **CORE AB-410** | 7h 56m | 75 | the AB-410 course (L9–L79) plus three bonus lectures that fill thin objectives (L147 Copilot in canvas apps, L182 Copilot in Power Automate, L189 run a flow from a canvas app) |
| **USEFUL FOUNDATION** | 2h 55m | 27 | bonus PL-200 material that goes deeper on AB-410 objectives the main course skims: flow types, triggers/actions/expressions, connectors, solutions & ALM, security roles, Excel import/export, versions, modern controls |
| **OPTIONAL DEEP DIVE** | 1h 38m | 14 | containers, SaveData/LoadData, approvals via Teams, process mining, desktop flows, Power BI, reporting design, Dataverse for Teams |
| **DUPLICATE / ALREADY COVERED** | 5h 52m | 50 | bonus lectures that rebuild what L9–L79 already build (canvas basics, data model, expenses app, variables, components, model-driven apps, business rules, conditional logic) |
| **SKIP** | 2h 35m | 27 | housekeeping, sign-up walkthroughs, bonus practice activities and solutions, classic-interface leftovers |

### Runtime by action

| Action | Runtime | Lectures | Meaning |
|---|---|---|---|
| BUILD | 7h 18m | 66 | do-along in your own developer environment — this is the AB-410 lab track |
| LISTEN | 2h 18m | 23 | conceptual; fine as audio |
| WATCH | 58m | 7 | screen matters, no need to build |
| REFERENCE | 7h 46m | 70 | don't sit through it; open when the topic comes up on P01 or a lab |

**Bottom line:** do the CORE tier (7h 56m) properly and dip into USEFUL FOUNDATION as reference (2h 55m) — about **10h 51m** of the 21 hours. The remaining 10h 05m is duplicate PL-200 rebuilds, optional deep dives and housekeeping.

### Streamlined order

Follow this instead of Udemy's section order; it groups by the exam's areas and pulls the bonus lectures in where they belong. Numbers are Burton's lecture numbers; `▸` marks a bonus (PL-200) lecture.

**1. Orientation and setup — environment, solution, licensing** — 28m

- L7 · Licensing for Power Apps · LISTEN (6:59)
- L9 · 4. Creating and environment, including recommend environment types · LISTEN (7:47)
- L10 · 5. Creating a Power Platform solution and making it the default solution · BUILD (7:18)
- ▸ L174 · Power Automate Licensing · LISTEN (6:04)

**2. Data model — tables, columns, relationships, calculated/rollup/formula, row summaries, security** — 1h 35m

- L13 · 6, 8, 9, 10. Create and edit tables in the data workspace · BUILD (9:15)
- L14 · 7. Create and modify standard tables · BUILD (4:13)
- L15 · 8. Configure table properties · BUILD (3:04)
- L16 · 9. Create and modify columns · BUILD (10:20)
- L28 · Creating an ExpenseClaim table · BUILD (4:28)
- L29 · 10. Configure table relationships · LISTEN (7:20)
- L30 · Adding the Expense table into our model-driven app and adding data · BUILD (8:41)
- L31 · Adding an Expense subgrid into the Employee form · BUILD (2:31)
- L32 · 47a. Creating calculated columns · BUILD (9:10)
- L33 · 47c. Creating formula columns · BUILD (5:00)
- L34 · 47b. Creating rollup columns · BUILD (6:20)
- L35 · 12. Configure row summaries · BUILD (6:54)
- L36 · 15. Configure security · LISTEN (8:59)
- ▸ L117 · 15. Create tables and table columns by using Copilot in Dataverse · BUILD (9:42)

**3. Model-driven apps — compose, forms, views, access, charts, dashboards, generative pages** — 1h 10m

- L12 · 19. Quickly creating a model-driven app · BUILD (8:28)
- L17 · 19. Creating a model-driven app based on the Employee table · BUILD (1:38)
- L18 · 19. How to compose a model-driven app · LISTEN (2:55)
- L19 · 14, 16. Create and configure forms for model-driven apps · BUILD (8:59)
- L20 · 20. Configure access to forms for model-driven apps · BUILD (6:55)
- L21 · 13, 17, 20. Configure public views and configuring access · BUILD (7:08)
- L22 · 17. Create and configure personal views for model-driven apps · BUILD (4:27)
- L23 · 22a. Create and configure model-driven app charts · BUILD (8:52)
- L24 · 22b. Create and configure model-driven app single-stream dashboards · BUILD (5:30)
- L25 · 22b. Create and configure model-driven app multi-stream dashboards · BUILD (5:15)
- L26 · 18. Create generative pages by using natural language · BUILD (8:01)
- L27 · 21. Configure access to model-driven apps · BUILD (2:10)

**4. Business logic — business rules, business process flows** — 19m

- L37 · 45, 48. Configure business rules · BUILD (9:59)
- L38 · 46. Configure business process flows · BUILD (9:22)

**5. Cloud flows — triggers, connectors, actions, controls, formulas, approvals; flow types and components from the bonus** — 2h 11m

- L40 · 31. Recommend cloud flow triggers · LISTEN (3:46)
- L43 · 32. Evaluate and recommend connectors · LISTEN (5:45)
- L41 · 34. Cloud flow actions and expanding our flow · BUILD (9:37)
- L42 · 34, 36. Configuring cloud flow actions and Test and troubleshoot cloud flows · BUILD (9:15)
- L44 · 35. Creating a flow with a For Each loop · BUILD (8:31)
- L45 · 35. Testing our flow with a For Each loop · BUILD (3:02)
- L46 · 35. Creating a flow using a Switch control · BUILD (6:09)
- L47 · 35. Creating a flow using a Condition control · BUILD (4:34)
- L48 · 34. Using formulas in Power Automate · BUILD (5:02)
- L49 · 33. Creating an approval flow · BUILD (9:04)
- L50 · 33. Testing our approval flow · BUILD (4:46)
- ▸ L175 · 49-51. Creating and testing an instant (button) flow · BUILD (7:19)
- ▸ L176 · 49-51. Creating an automated flow, using a Dataverse table · BUILD (8:04)
- ▸ L177 · 49-51. Creating a scheduled flow, tracking Weather using Excel Online · BUILD (8:35)
- ▸ L185 · 49. Configure triggers · REFERENCE (8:48)
- ▸ L186 · 50. Configure actions · REFERENCE (6:32)
- ▸ L187 · Implement common expressions · REFERENCE (6:35)
- ▸ L151 · 4. Describe standard, premium, custom connectors; Configure a connection · REFERENCE (7:30)
- ▸ L189 · 47. Run a Power Automate flow from a canvas app · BUILD (8:59)

**6. Canvas apps — build, design principles, components, variables, error handling, Monitor, agent from canvas, automate from canvas** — 2h 20m

- L11 · 23. Quickly creating a canvas app · BUILD (4:28)
- L51 · Create a canvas app using data with a gallery · BUILD (10:51)
- L52 · Inserting a new screen and a card component, and navigating between screens · BUILD (6:19)
- L53 · Building an edit/new item screen · BUILD (8:35)
- L54 · 24a. Design apps for accessibility · LISTEN (9:08)
- L55 · 24b. Design apps for performance · LISTEN (3:07)
- L56 · 24c. Design apps for responsiveness · LISTEN (5:47)
- L57 · 24d. Design apps for usability · LISTEN (6:55)
- L58 · 26a. Create reuseable components, including named formulas · BUILD (3:43)
- L59 · 26b. Create reuseable components, including user-defined formulas · BUILD (5:38)
- L60 · 26c. Create reuseable components, including component libraries · BUILD (6:32)
- L61 · 26c. Updating our component · BUILD (5:20)
- L62 · 27a. Manage global variables · BUILD (6:52)
- L63 · 27a. Manage context variables · BUILD (6:27)
- L64 · 27b. Manage collections · BUILD (5:19)
- L65 · 28. Implement error handling · BUILD (4:57)
- L66 · 29. Test canvas apps, including using Monitor · BUILD (7:51)
- L67 · 30. Create a Copilot Studio agent from a canvas app · BUILD (4:39)
- L68 · 25. Automate business processes from canvas apps · LISTEN (1:55)
- ▸ L143 · 37. Design choices and app performance, and App Checker results · WATCH (9:57)
- ▸ L144 · 38, 39. Create+publish new versions, restore a previous version of an app · REFERENCE (3:59)
- ▸ L145 · 42. Describe modern controls and themes · REFERENCE (6:50)
- ▸ L147 · 6. Using Microsoft Copilot when editing canvas Power Apps · BUILD (5:42)

**7. AI Hub — prompts, prompt columns, models, consuming in apps and flows; Copilot in Power Automate** — 52m

- L69 · 37, 40-42. Build prompts, including knowledge, settings and inputs · BUILD (9:29)
- L70 · 38. Consume a prompt in apps · BUILD (4:36)
- L71 · 39. Consume a prompt in cloud flows · BUILD (3:36)
- L72 · 11. Configure prompt columns · BUILD (9:59)
- L73 · Different AI models · LISTEN (5:56)
- L74 · 43. Consume an AI model in apps · BUILD (7:19)
- L75 · 44. Consume an AI model in cloud flows · BUILD (4:47)
- ▸ L182 · 6. Using Microsoft Copilot in Power Automate · BUILD (7:13)

**8. Strategy and ALM — requirements, built-in agents, extensibility, solution/ALM strategy; solutions and security roles from the bonus** — 1h 14m

- L76 · 1. Analyze requirements to identify components and options for implementation · LISTEN (2:34)
- L77 · 2. Evaluate built-in agents to include in the business solution · LISTEN (8:52)
- L78 · 3. Recommend extensibility options · LISTEN (3:43)
- L79 · 5. Apply a Microsoft Power Platform solution and ALM strategy · LISTEN (7:45)
- ▸ L192 · Describe Dataverse solutions · REFERENCE (5:27)
- ▸ L193 · 18, 21, 30, 43, 45. Create a solution, add new and existing apps and flows · BUILD (6:10)
- ▸ L194 · 19. Import a Dataverse solution · REFERENCE (3:47)
- ▸ L195 · 20, 21. Move individual apps and flows between environments · BUILD (10:57)
- ▸ L196 · 19. Export or import a Dataverse solutions · REFERENCE (5:52)
- ▸ L197 · 13, 14. Configure security roles · BUILD (6:02)
- ▸ L198 · 13, 14. Add users, and assign them security roles · BUILD (5:33)
- ▸ L199 · 13, 14. Adding users to environments · BUILD (3:06)
- ▸ L200 · 33, 39, 40. Manage app security · REFERENCE (4:30)

**9. Optional deep dives — only if P01 needs them or time allows** — 1h 28m

- ▸ L146 · 43. Containers · WATCH (10:57)
- ▸ L150 · 46. The SaveData and LoadData functions · WATCH (6:31)
- ▸ L179 · 53. Create and monitor approvals from Power Automate · WATCH (6:25)
- ▸ L180 · 53. Extend our Power Automate approval flow by using Microsoft Teams · WATCH (6:17)
- ▸ L190 · 8. Describe use cases for Power Automate Process Mining · LISTEN (7:50)
- ▸ L191 · Describe use cases for desktop flows · LISTEN (6:49)
- ▸ L209 · 17. Determine when to use Dataverse for Teams · LISTEN (6:48)
- ▸ L201 · Logging into the Power BI Service · REFERENCE (7:17)
- ▸ L202 · 22. Create a simple report from an existing dataset by using Power BI Service · WATCH (8:26)
- ▸ L203 · 23. Create Power BI dashboards from existing reports · REFERENCE (2:33)
- ▸ L204 · 25. Share Power BI dashboards · REFERENCE (5:28)
- ▸ L205 · 24. Embed Power BI dashboards and tiles in canvas apps and model-driven apps · WATCH (9:47)
- ▸ L207 · 9. Design reporting · REFERENCE (3:04)

Then the two practice tests (34 + 34 questions) only at the readiness gate.

### Material that earns its place for AB-620 or AB-100 rather than AB-410

**AB-100** — solution strategy and built-in agents (AB100-1.2.4, 1.2.7), generative pages/agent feed (2.1.9), model choice (1.2.8, 1.3.4), Well-Architected design (2.1.13), Power Platform AI features/AI hub (2.3.5), process mining as automation assessment (1.1.1), Dataverse for Teams (2.2.7).

- L76 · 1. Analyze requirements to identify components and options for implementation
- L77 · 2. Evaluate built-in agents to include in the business solution
- L78 · 3. Recommend extensibility options
- L79 · 5. Apply a Microsoft Power Platform solution and ALM strategy
- L26 · 18. Create generative pages by using natural language
- L73 · Different AI models
- L54 · 24a. Design apps for accessibility
- L55 · 24b. Design apps for performance
- L56 · 24c. Design apps for responsiveness
- L57 · 24d. Design apps for usability
- ▸ L190 · 8. Describe use cases for Power Automate Process Mining
- ▸ L209 · 17. Determine when to use Dataverse for Teams
- ▸ L147 · 6. Using Microsoft Copilot when editing canvas Power Apps
- ▸ L182 · 6. Using Microsoft Copilot in Power Automate
- ▸ L117 · 15. Create tables and table columns by using Copilot in Dataverse

**AB-620** — agent from a canvas app, solutions/ALM and environment variables (AB620-3.2.1–3.2.4), identity and security roles (1.1.2, 1.1.5), connectors/triggers/actions (1.2.3), approvals as human-in-the-loop flows (1.2.2).

- L67 · 30. Create a Copilot Studio agent from a canvas app
- ▸ L192 · Describe Dataverse solutions
- ▸ L193 · 18, 21, 30, 43, 45. Create a solution, add new and existing apps and flows
- ▸ L194 · 19. Import a Dataverse solution
- ▸ L195 · 20, 21. Move individual apps and flows between environments
- ▸ L196 · 19. Export or import a Dataverse solutions
- ▸ L197 · 13, 14. Configure security roles
- ▸ L198 · 13, 14. Add users, and assign them security roles
- ▸ L199 · 13, 14. Adding users to environments
- ▸ L200 · 33, 39, 40. Manage app security
- ▸ L151 · 4. Describe standard, premium, custom connectors; Configure a connection
- ▸ L185 · 49. Configure triggers
- ▸ L186 · 50. Configure actions
- ▸ L189 · 47. Run a Power Automate flow from a canvas app
- L49 · 33. Creating an approval flow
- L50 · 33. Testing our approval flow
- ▸ L179 · 53. Create and monitor approvals from Power Automate
- ▸ L180 · 53. Extend our Power Automate approval flow by using Microsoft Teams

Everything else in the bonus half is PL-200 revision: useful only as reference when a specific topic comes up.
