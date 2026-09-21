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
