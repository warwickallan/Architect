---
chapter: 6
title: "Domain II (3): ROI, business case, success criteria, solution draft"
exam: CPMAI
tasks: [CPMAI-2.5, CPMAI-2.7, CPMAI-2.8, CPMAI-2.9]
sources: [022, 028, 030, 009 + ECO enablers]
status: draft
---

Chapter six. Domain two, part three: return on investment, the business case, success criteria and the solution draft. This chapter covers four more tasks from Domain two of the CPMAI examination — determining return on investment, defining success criteria such as key performance indicators and metrics, drafting the AI solution, and supporting the creation of the business case.

Why this matters. PMI's own account of why most AI projects fail puts return on investment misalignment near the top of the list, alongside underestimating resources and building a proof of concept that never survives the real world. All three are failures of this group of tasks. If nobody wrote down the expected benefit in pounds, nobody can tell you later whether the model was worth building. If nobody costed the retraining, the project runs out of money in year two. And if nobody agreed what "good enough" looks like as a number, then phase five, Model Evaluation, becomes an argument rather than a gate.

In this chapter you will learn: how to build a total cost of ownership picture for an AI initiative, including the costs that traditional software projects do not carry; how to set success criteria at three levels — model performance, business impact and user adoption — with thresholds you can actually test; how to produce a solution draft at the right altitude, covering architecture, data flow, integration and deployment; and how to support the business case so that finance, the sponsor and the technical team are all describing the same project.

Start with the money. Task two point five asks you to determine return on investment, and the first half of that is the benefit side. Be specific and be traceable. A benefit is a number attached to a mechanism. Not "improved efficiency", but "each claim currently takes a handler eleven minutes to triage, we process this many a month, and the model removes the triage step for the clear cases". Not "better fraud detection", but "fraud losses avoided, measured against the current baseline". If you cannot describe the mechanism, you cannot defend the number when finance asks where it came from, and you certainly cannot measure it after go-live.

Benefits come in a few recognisable shapes. Cost avoided, meaning work that no longer has to be done. Revenue gained, from conversion, retention or pricing. Loss prevented, from fraud, failure or downtime. Risk reduced, which includes regulatory exposure. And speed, where a decision made in two seconds instead of two days changes the business outcome. Say which shape each benefit is, and say when it starts. A benefit that only appears once adoption reaches a certain level is not a year-one benefit.

Now the cost side, which is where AI projects get caught out. Total cost of ownership is not the project budget. It is everything the organisation will spend to own this capability over its life. Include the compute and infrastructure, including the graphics processing units or the cloud equivalents, for both training and inference. Include data acquisition, licensing, cleaning and labelling — and be honest, because labelling is people, and people are money. Include the platform and tooling licences. Include integration with the systems that will consume the output. Include the people, across data engineering, data science, subject-matter experts and project management. Then include the part that traditional projects do not have: the ongoing cost of monitoring, retraining and revalidating the model as data drifts. And finally, the cost of decommissioning, because models are replaced.

**It's important to remember that** the model is not the end state. In AI, maintenance and evolution are part of the cost of ownership from day one. PMI lists neglecting maintenance as one of the standard reasons AI projects fail, and a total cost of ownership figure that stops at deployment is simply wrong.

Put the two sides together as a cost-benefit analysis for stakeholder decision-making. Payback period, whatever your organisation's preferred financial measure is, and a clear statement of the assumptions. Then establish the metrics by which return on investment will actually be measured after the fact, and who owns measuring them. That is the enabler people skip. An expected return that nobody ever checks is a forecast, not a business case.

**A common mistake is** modelling a benefit that depends entirely on people changing their behaviour, and then treating that change as certain. If the value only lands when the claims team stops doing manual checks, then the benefit case is an adoption case, and you should say so.

That takes us to task two point eight, success criteria. Think of these at three levels, and keep the levels separate because they fail separately.

Level one is model performance. These are the technical benchmarks and targets: accuracy, precision, recall, F-one for classification problems, error measures for regression problems. The exam is not testing you as a data scientist, but it does expect you to know that the choice of metric follows the consequence of being wrong. Where a false positive is the expensive error — say, a facial recognition system granting building access to the wrong person — you tune and threshold to keep false positives down. Where a false negative is the expensive error — screening for an infectious disease, and telling someone they are clear when they are not — you accept more false alarms to catch more true cases. Agree that trade-off in phase one, Business Understanding, with the business, not in phase five with the data scientists.

Level two is business impact. This is the metric the sponsor actually cares about: fraud losses avoided, average handling time, forecast error against stock held, cases resolved at first contact. Every business impact metric needs a baseline measured before the project starts, and a threshold that defines success. Technical precision that does not translate into a business number is not success; it is a demonstration.

Level three is user satisfaction and adoption. Percentage of eligible cases where the recommendation is used, override rates, survey scores, time to competence for new users. If the tool sits unused, the model is irrelevant.

Then tie all three back to organisational objectives, so each criterion traces to something the organisation already said it wanted. That alignment is what gets a criterion defended when budgets tighten.

**It's important to remember that** success criteria are a phase one deliverable, and phase five is where they are validated. In Model Evaluation the project manager acts as a quality gatekeeper — checking not only that the model performs, but that the criteria set at the start have been met, and that stakeholders accept the result. You cannot gatekeep against criteria that were never written down.

Next, task two point seven, drafting the AI solution. The altitude here is high-level, and getting the altitude right is half the skill. You are not choosing the final algorithm. You are describing a solution that is credible enough to cost, to staff and to approve.

Five things belong in the draft. First, the high-level architecture — the components and how they sit together. Second, the data flow and processing requirements — where data comes from, how it moves, whether it is batch or streaming, what volume and what latency the business needs. Third, the candidate model types and algorithmic approaches. State this as options with trade-offs, particularly where explainability matters; a slightly less accurate model that a regulator or a claims handler can understand is often the better choice. It also helps to say which of the seven patterns of AI the solution draws on — recognition, pattern and anomaly detection, predictive analytics and decision support, and so on — because each pattern brings its own data, validation and governance needs, and most real solutions blend more than one. Fourth, the integration points with existing systems, named explicitly: the case management system, the identity provider, the data warehouse, the reporting layer. Fifth, deployment and operational considerations — cloud, on-premises or edge; monitoring; retraining triggers; rollback; and where the human sits in or on the loop.

**In practice,** we write the solution draft as an options paper with a recommendation, and we include a build, buy or integrate line for each major component. That single line saves weeks later, and it forces an early answer to the vendor question. PMI's failure list warns about choosing solutions that fit the pitch rather than the need.

Finally, task two point nine, supporting business case creation. Note the verb. In most organisations the project manager does not own the business case; the sponsor does. Your job is to make it true. You gather the financial data and the projected benefits. You collaborate with finance on the cost estimates and the projections, so that the numbers use the organisation's own conventions rather than yours. You provide the technical expertise that validates the case — sanity-checking that the claimed accuracy is plausible given the data you have seen, and saying so plainly when it is not. You help develop a narrative that an executive audience can follow: the problem, why it needs AI rather than rules, the expected benefit, the cost, the risks, and what the first increment delivers. And you review and refine the documentation as the estimates firm up.

**A common mistake is** promising a precise performance figure in the business case before Data Understanding has begun. Use ranges, tie the commitment to a phase gate, and fund the next increment rather than the whole programme. Overpromising and underdelivering is the historic cause of the AI winters, and the exam expects you to set realistic scope and expectations.

Remember too what phase one is supposed to produce: a return on investment expectation, and an AI go or no-go assessment. A defensible "no" is a successful outcome of this work.

Before we move on, a quick check.

First question. In which CPMAI phase are success criteria defined, and in which are they validated.

(pause)

The answer is: defined in phase one, Business Understanding, and validated in phase five, Model Evaluation, where the project manager acts as quality gatekeeper.

Second question. A screening model for an infectious disease is being tuned. Which type of error do you work hardest to reduce, and why.

(pause)

The answer is: false negatives, because telling an infected person they are clear carries far greater consequence than an extra precautionary check.

Third question. Your total cost of ownership shows development, infrastructure and integration. What is most obviously missing.

(pause)

The answer is: the ongoing cost of monitoring, retraining and revalidating the model after deployment, along with data acquisition and labelling.

By the end of this chapter you should be able to build a total cost of ownership picture that includes the lifecycle, not just the build; set success criteria at model, business and adoption level with testable thresholds; produce a solution draft covering architecture, data flow, model options, integration and deployment; and support a business case that finance, the sponsor and the technical team all recognise.

Four takeaways. A benefit is a number attached to a mechanism, with a baseline and an owner for measuring it. Total cost of ownership in AI always includes retraining, monitoring and eventual replacement. Success criteria are set in phase one and enforced in phase five, and the false positive against false negative trade-off is a business decision. And the solution draft is high-level by design — options, integration points and operational realities, not final algorithm selection.

Next, Domain three, and the twenty-six percent of the exam that deals with identifying data needs.
