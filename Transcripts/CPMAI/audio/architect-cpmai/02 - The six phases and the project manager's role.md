---
chapter: 2
title: "The six phases and the project manager's role"
exam: CPMAI
tasks: [CPMAI-2.4, CPMAI-2.8, CPMAI-3.8, CPMAI-4.5, CPMAI-4.6]
sources: [ECO Sept 2025 (six phases, domain weights); PMI Blog "Seven Patterns of AI" 7 Nov 2024; PMI Blog "Why Most AI Projects Fail" 12 Dec 2024; lectures 022, 023, 025, 030]
status: draft
---

Chapter two. The six phases and the project manager's role.

This chapter takes the six-phase methodology you met in chapter one and turns it into something you can work with. It covers the scope and success-criteria tasks in Domain Two, the data sufficiency decision in Domain Three, and the two go/no-go verification tasks in Domain Four. In plain terms: what each phase is for, what you as project manager are accountable for producing, and what question you have to answer before you're allowed to move on.

Why does this matter? Because almost every failure mode PMI lists comes down to a gate that nobody stood at. A proof of concept that never survives contact with real data. A model that passes testing and fails in operation. Resource estimates that ignored how long data preparation actually takes. In each case the project didn't stop and ask the question it should have asked. And in the exam, "which phase are we in, and what should happen next" is the single most common shape of question you will see.

In this chapter you will learn: how to describe the six phases as an iterative loop rather than a sequence of stages; how to state the go/no-go question that closes each phase; how to name the project manager's deliverable in each phase; how to write a scope statement and success criteria that are still usable in Phase five; and how to recognise from a question stem which phase the scenario is sitting in.

Let's start with the shape of the thing.

The six phases are Business Understanding, Data Understanding, Data Preparation, Model Development, Model Evaluation and Model Operationalisation. That much you know. What matters now is that this is a loop, not a line. You do not march through all six once and then hand over. You run the loop on one small, well-bounded business question, get something into operation, learn from it, and run it again. That is what CPMAI inherits from agile, laid over the data-first structure it inherits from CRISP-DM.

And the loop runs backwards as often as forwards. If Phase two tells you the data isn't there, you go back to Phase one and change the question. If Phase five tells you the model doesn't meet the business threshold, you may go back to Phase four for a different algorithm, or back to Phase three because the features were wrong, or back to Phase one because the problem was never a probabilistic one in the first place. Going backwards is not failure. Going forwards with a known defect is failure.

**It's important to remember that** each phase ends in a decision, not a document. The document is only evidence for the decision. If a question asks what the purpose of a phase is, the answer is almost always framed as a judgement: is there enough here to justify the next investment.

Now let's walk the loop, and I'll give you three things for each phase — the purpose, your deliverable, and the gate question.

Phase one, Business Understanding. The purpose is to establish that there is a real business problem, that it is an AI-shaped problem, and that solving it is worth the money. AI-shaped means probabilistic. If the problem can be solved deterministically, with rules and a formula, it is not an AI problem and you should say so out loud. Once you're past that test, you map the problem onto the seven patterns of AI — hyperpersonalisation, conversational and human interaction, recognition, pattern and anomaly detection, predictive analytics and decision support, goal-driven systems, autonomous systems. Most real solutions blend several. Knowing which ones apply tells you what data you'll need and what governance the work will attract.

Your deliverables here are the scope statement, the success criteria, the return-on-investment case, and the initial go/no-go assessment. The scope statement defines the boundaries: what is in, what is explicitly out, what you're assuming, what constrains you. The success criteria are where people get lazy, so be careful. You need three kinds, and the exam knows it. Technical benchmarks for the model. Business impact metrics with thresholds attached. And user adoption or satisfaction measures. All three aligned to organisational objectives.

Write them now, because you will be judged against them in Phase five. That is the whole point of writing them in Phase one. A model that scores beautifully on a technical metric while missing the business threshold has failed, and you cannot discover that unless the business threshold was written down at the start.

The gate question for Phase one: is this a genuine, bounded, probabilistic problem with a benefit worth pursuing.

**A common mistake is** to treat scope in an AI project as a fixed contract. It isn't. It's a boundary you revisit at the top of each iteration. But it must exist, and it must be written, or you will be asked to add "just one more" prediction to a model that was never trained for it.

Phase two, Data Understanding. Your role shifts from business alignment to data feasibility. You run a data audit: what data exists, where it comes from, who owns it, whether you're allowed to use it. You look at volume, variety, velocity and veracity — how much, in what forms, arriving how fast, and from sources you can trust. You engage the subject matter experts who actually know what the fields mean. And you check, early, for bias in representativeness: is the data skewed to one geography, one age group, one gender, when the target population isn't.

Your deliverable is a data quality report and an identification of candidate training and test data.

The gate question here is the one the register calls determining whether the data meets the solution's needs. Compare what you have against what the solution requires. Is there enough to train a robust model. Is it representative of the real use case. Where are the gaps, and can you close them. This is a genuine go/no-go, and it is the gate most often skipped on real projects.

**In practice**, this is the gate we defend hardest. On a live engagement, we schedule the Phase two decision as a named milestone with the sponsor in the room, because it is far cheaper to change the question here than to discover in month six that the data was never fit for it.

Phase three, Data Preparation. Cleaning, wrangling, normalising, handling missing values, labelling and annotating, structuring what was unstructured, and building the pipelines — one for the test environment, one for production inference. This phase consumes the majority of the effort on most AI projects, and underestimating it is on PMI's own list of why AI projects fail.

Your deliverables are the data cleaning report, the anonymised datasets, and the transformation pipelines.

There is a verification task sitting around this phase too: confirming data quality before you commit to preparation, and again validating the results of preprocessing and transformation before training. Assess representativeness and potential bias, document what you found, and make a decision on readiness. Garbage in, garbage out isn't a slogan here; it's the gate criterion.

Phase four, Model Development. You select and try algorithms — usually more than one — split the data into training, validation and test sets, train, and tune the hyperparameters. Note that word: hyperparameters are the settings a human configures from outside the model, as distinct from the parameters the model learns internally. Your choice of algorithm balances accuracy against explainability, cost and time, and the right balance depends on your industry and your risk appetite.

Your deliverables are the model training records, the fine-tuning documentation, and the decision log — including the build, buy or integrate decision and why you made it.

Phase five, Model Evaluation. Here you test against both sets of criteria. Technical performance, yes — and also the business KPIs you wrote in Phase one. You check for overfitting and underfitting. You look at the false positives and false negatives and ask whether the rates are within the tolerance the business agreed.

Your deliverables are the validation results, the KPI evaluation, and the approved model.

The gate question is the second of the two verification tasks: is the model ready for operationalisation. That means performance against the established success criteria, robustness and generalisation, deployment readiness including infrastructure, and complete documentation and operational procedures. All four. A model that performs well but has no runbook is not ready.

Phase six, Model Operationalisation. Deployment through MLOps practice: versioning, rollback plans, retraining pipelines, and the monitoring that catches drift when the world moves away from your training data.

Your deliverables are the monitoring plan, the transition plan to operations, and the lessons learned — which feed the next turn of the loop.

Now, your own role across all of this. CPMAI casts the project manager as a strategic orchestrator rather than a schedule administrator. You still hold cost, schedule and risk. But your centre of gravity moves to three things: data readiness, iterative experimentation, and ethical governance. You are the person who insists the gate question gets asked.

Before we move on, a quick check.

First question. A team has a cleaned, labelled dataset and is comparing logistic regression against a decision tree to see which gives the better balance of accuracy and explainability. Which phase are they in.

(pause)

The answer is Phase four, Model Development. The tell is algorithm selection and experimentation. Evaluation against business KPIs would be Phase five.

Second question. Your data audit shows that ninety per cent of the customer records come from one region, and the model is intended for national use. What is the correct action.

(pause)

The answer is to treat this as a Phase two go/no-go on representativeness. Document the gap, develop a strategy to close it, and if you cannot, return to Phase one and rescope the problem. You do not proceed to data preparation on unrepresentative data.

Third question. Where are the business success thresholds defined, and where are they tested.

(pause)

The answer is defined in Phase one, Business Understanding, and tested in Phase five, Model Evaluation.

By the end of this chapter you should be able to describe the six phases as an iterative loop with backward paths; state the go/no-go question that closes each phase; name your deliverable in each phase; write scope and success criteria that survive to evaluation; and identify a phase from the artefacts and verbs in a question stem.

Five takeaways. The phases are a loop you run repeatedly on small problems, not a sequence you complete once. Every phase ends in a decision, and the document is only evidence for it. Success criteria are written in Phase one and judged in Phase five, and they must cover technical, business and adoption measures. The two hardest gates are data sufficiency after Phase two and operational readiness after Phase five. And your role as project manager is orchestration of data readiness, experimentation and governance, not administration of a schedule.

In the next chapter we take Phase one apart properly, and look at how you tell an AI problem from a rules problem before you spend any money finding out.
