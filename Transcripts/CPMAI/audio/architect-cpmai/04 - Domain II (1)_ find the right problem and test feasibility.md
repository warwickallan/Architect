---
chapter: 4
title: "Domain II (1): find the right problem and test feasibility"
exam: CPMAI
tasks: [CPMAI-2.1, CPMAI-2.2]
sources: [011, 022, 005 + ECO enablers]
status: draft
---

Chapter four. Domain two, part one: find the right problem and test feasibility. This chapter covers the first two tasks of Domain two of the PMI-CPMAI examination — Identify Business Needs and Solutions — which ask you to define the business problem an AI solution is meant to address, and to establish whether that solution is feasible before anyone commits money to it.

Why does this matter. Because on real initiatives the failure is usually decided in the first three weeks, long before a model exists. PMI's own analysis of why most AI projects fail puts two of the top causes right here: return-on-investment misalignment, where nobody defined the problem or the expected benefit up front, and overpromising, which is the historic cause of the AI winters. Add to that the projects that were never AI problems in the first place — a rules engine dressed up as machine learning because machine learning was in the budget line. Domain two carries twenty-six per cent of the exam, joint largest with data. It earns that weight.

In this chapter you will learn: how to elicit and frame a business problem so that it can be solved, not just described; how to distinguish a deterministic problem from a probabilistic one, and therefore whether AI is the right tool at all; how to run a feasibility assessment across data, technology, business value and organisational readiness; how to set success criteria and scope boundaries that will still be usable in the evaluation phase; and how to keep a genuine no-go on the table.

Start with where you are in the method. This is phase one, Business Understanding, the first of the six iterative CPMAI phases. It is the phase that decides whether the other five ever happen. And note the word iterative — you will come back here. Business Understanding is not a gate you pass through once and forget.

Now, the first task: identifying the problem. The discipline is to begin with the business, not the technology. You are looking for a decision or a judgement that the organisation makes repeatedly, that currently costs it something — time, money, error, delay, risk — and that it would like to make better or faster or more consistently. Notice that the description contains no technology at all. "We process twelve thousand supplier invoices a month and four people spend their week keying them in" is a problem statement. "We need document AI" is not.

You get to that statement by talking to people, and you talk to more people than you think you need to. The sponsor tells you what the organisation wants. The person who actually does the work tells you what really happens, which is usually different. The person who will receive the model's output tells you what they would need in order to trust it and act on it. The data owner tells you whether the data you are assuming exists actually exists. And somebody from compliance or legal tells you what you are not allowed to do with it. If you interview only the sponsor, you will build the sponsor's imagination.

Personas help here, and they are not a marketing flourish. For each type of user, write down who they are, what decision they are making, what they see today, what they would see instead, and what happens if the system is wrong. That last one is the most valuable line on the page, because it quietly determines your accuracy target, your need for explainability and your human oversight design. PMI's ethics guidance makes the same point from the other direction: human-centred design means users' needs come before technical capability.

Then map the problem to one or more of the seven patterns, as we did in chapter three, and set success criteria. Success criteria means business metrics, not model metrics. Cost per invoice. Hours released. Reduction in escaped defects. Days of forecast error. You will also need model metrics later, but the business KPI is the one you agreed with the sponsor, and it is the one you are judged against in phase five, Model Evaluation. Set it now, in writing, with a number and a date. Alongside it, set your scope boundaries — what is in, what is explicitly out, which processes, which regions, which document types. Unbounded AI scope is how twelve-week initiatives become eighteen-month ones.

**It's important to remember that** the success criteria defined in phase one are what you test against in phase five. Evaluation is not only "does the model perform"; it is "does the model deliver the business outcome we specified at the start". Exam items frequently join those two ends together.

Now the question that sits underneath everything else: is this actually an AI problem. The test is deterministic versus probabilistic. A deterministic problem has a knowable rule. If you can write the logic down — a formula, a decision table, a policy, a lookup, a piece of ordinary software — then write it down. It will be cheaper, faster, fully explainable and it will not drift. A probabilistic problem is one where the pattern exists in the examples but cannot be stated as rules: recognising a handwritten field, predicting which machine will fail next month, judging whether a transaction feels wrong. There, the system learns from data rather than being told. That is where AI earns its keep.

So before you propose AI, you compare it against the traditional alternative honestly: automation, process redesign, better reporting, buying an existing product, or simply hiring. If a cheaper non-AI option meets the success criteria, the correct recommendation is the cheaper option.

**A common mistake is** to treat volume or tedium as evidence of an AI problem. A rule applied ten million times is still a rule. Complexity of scale is an engineering problem. Complexity of judgement is the AI problem. Exam distractors love a scenario where the business is drowning in manual work that is entirely rule-based.

That brings us to the second task: feasibility, and the go or no-go decision. Assess it across four lenses.

First, data feasibility, and this is the one that kills projects. Three questions in order: is the data available, is it of sufficient quality, and is it relevant to the actual prediction you want to make. Relevance is the one people skip. Sales history will not help you read a chest X-ray. You also ask whether there is enough of it, whether you have the right to use it for this purpose, and whether it reflects the conditions the model will meet in production rather than some tidy historic extract.

Second, technical feasibility. Does a workable approach exist for this pattern at this scale, can it be integrated with the systems where the decision actually gets made, and can the organisation host, secure and retrain it.

Third, business feasibility — the return on investment. Someone must be able to say what the benefit is worth and roughly when it lands. If payback is measured in many years, the business will not fund it, and it should not. Shorter is better, and a smaller first problem usually pays back sooner.

Fourth, organisational readiness, which is the lens project managers are best placed to judge and most likely to under-weight. Do you have the skills or a route to them. Is there data governance and a named owner for the data. Who will own the model after go-live, monitor it and retrain it — because if the answer is nobody, you are building something that will silently decay. Will the people whose work changes accept the output. Is there an appetite for a probabilistic answer in a culture that expects certainty. And can you meet the transparency and explainability expectations of your auditors and regulators, which may force you toward a simpler, more interpretable model at some cost in raw accuracy. That trade-off is a feasibility constraint, and it belongs in phase one, not in a panic during evaluation.

The output of all this is a recommendation: go or no-go. And no-go must be genuinely available. A recommendation not to proceed, made in week three for the cost of some interviews and a data sample, is one of the most valuable things you will ever deliver.

**In practice,** the Architect discovery interview runs to a fixed spine, and you can hear the tasks in it. What decision are you trying to make, and how often. How is it made today, and by whom. What does it cost you when it goes wrong. How would we know, in numbers, that this worked. What data exists about past instances of this decision, where does it live, and who owns it. What would you need to see before you would trust the output. What are we not allowed to do. And who will look after this in a year's time. Eight questions. Then you write the problem statement, the pattern, the KPI, the scope boundary and the four feasibility verdicts onto a single page and take it back to the sponsor. If it does not fit on one page, you have not understood it yet.

One more point on scoping. Start with something small and comparatively simple, with a genuine cognitive element, and aim at a minimum viable product rather than an ever-expanding proof of concept. Proofs of concept are where AI projects go to be admired. They are run in laboratory conditions that hide real-world data variability and integration pain, and PMI lists exactly that as a common failure. A short pilot against real data, rolled out in phases, iterating often, is the shape you want.

Before we move on, a quick check. First question. A finance team asks for an AI model to apply a published tariff table to shipments. Is this an AI problem.

(pause)

The answer is no. A published table is a knowable rule; this is deterministic and belongs in ordinary software. Second question. In which CPMAI phase are business success criteria first defined, and in which phase are they tested.

(pause)

The answer is defined in phase one, Business Understanding, and tested in phase five, Model Evaluation. Third question. You have good data, a sound technical approach and a strong business case, but no one will own monitoring and retraining after deployment. What is the feasibility concern.

(pause)

The answer is organisational readiness — an unowned model will drift unnoticed, so this is a genuine no-go condition until ownership is resolved.

By the end of this chapter you should be able to frame a business problem without naming a technology, decide whether it is deterministic or probabilistic, compare AI against the traditional alternative, run feasibility across data, technology, value and readiness, and defend a go or no-go recommendation.

Key takeaways. Start with the decision the business makes repeatedly, not with the tool. If the rule can be written down, write the rule instead. Success criteria are business KPIs, agreed in phase one and tested in phase five. Feasibility has four lenses, and data availability, quality and relevance is the one most often assumed rather than checked. Organisational readiness includes naming who owns the model after go-live. And a small, well-scoped first problem delivered as a minimum viable product beats an impressive proof of concept that never leaves the lab.

In the next chapter we take a problem that has passed feasibility and put it under the risk and responsible-AI lens, before it becomes a business case.
