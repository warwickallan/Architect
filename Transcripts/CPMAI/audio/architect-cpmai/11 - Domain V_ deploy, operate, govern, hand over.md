---
chapter: 11
title: "Domain V: deploy, operate, govern, hand over"
exam: CPMAI
tasks: [CPMAI-5.1, CPMAI-5.2, CPMAI-5.3, CPMAI-5.4, CPMAI-5.5, CPMAI-5.6, CPMAI-5.7]
sources: [029, 054, 030 + ECO enablers]
status: draft
---

Chapter eleven. Domain five: deploy, operate, govern, hand over. This chapter covers all seven tasks of Domain five — the deployment plan, the deployment itself, model governance, solution metrics, the final report and lessons learned, the transition plan, and the contingency plan.

Why this matters. Domain five is worth seventeen per cent of the CPMAI exam, and it maps to phase six of the methodology, Model Operationalisation. It is also the phase that most organisations treat as an afterthought. PMI's own analysis of why AI projects fail names two failures that live here: proofs of concept that never survive the real world, and neglecting maintenance and evolution. A model is not a bridge. It does not sit there quietly doing what it did on the day you opened it. The world moves, the data moves, and the model decays. If nobody owns that decay, your successful project becomes an embarrassing incident about eleven months later, long after you have moved on.

In this chapter you will learn: how to build a deployment plan that includes rollback rather than hope; how to coordinate a deployment and verify it once it is live; how to set up model governance, including versioning and drift monitoring; how to design dashboards, thresholds and alerts that someone will actually act on; how to write contingency and incident response procedures for an AI system; and how to hand the solution over to operations so that it keeps working without you.

Let us begin with the deployment plan, task five point one.

The deployment plan is a document you own as project manager, and it has five parts worth remembering. First, the deployment strategy and timeline — what goes live, in what order, to whom, and when. Second, infrastructure requirements and resource allocation — compute, storage, inference capacity, licences, and the people who will be awake at the time. Third, integration with the existing estate, which means working with the IT teams, not around them. Fourth, rollback procedures and contingency plans. And fifth, deployment checklists with validation criteria — a written list of what must be true before you declare the deployment successful.

Rollback deserves a moment. In an AI deployment, rollback is not just reverting code. You may need to revert the model version, the feature pipeline that feeds it, and the configuration thresholds that govern its decisions, and they may not revert cleanly as a set. That is why you plan the rollback before you deploy and test it in a lower environment. The question to ask your technical lead is blunt: if we need to be back on the previous model by eight tomorrow morning, what exactly do we do, who does it, and how long does it take.

**In practice…** we write the deployment plan alongside the operationalisation go/no-go decision from Domain four, not after it. The people arguing about whether the model is ready are the same people who know what could go wrong on the night. Capture that while it is fresh.

Now task five point two, managing the deployment itself.

Your job on the day is coordination, monitoring and verification. You coordinate activities across technical teams. You track progress and clear blockers as they surface. You validate that the system functions and performs in the production environment — and note that word, production, because performance in production is not the same number you saw in evaluation. You manage user access provisioning and security configurations, which in AI terms means role-based access control, multi-factor authentication where appropriate, and audit logging switched on from the first minute, not retrofitted after an incident. Then you conduct post-deployment verification and testing.

Post-deployment verification is where the proof-of-concept problem shows up. In the lab, the model saw curated data. In production, it sees the real distribution — the badly lit photographs, the free-text field people use as a notepad, the transactions that arrive out of order. Plan a verification window in which you compare live performance against the evaluation baseline on the same metrics. If the gap is material, you have found the problem while you still have the project team.

**A common mistake is…** treating go-live as the end of the project. In CPMAI, deployment is the start of phase six, not the end of it. The exam will reward answers that continue into monitoring, governance and handover.

Task five point three, model governance.

Governance has five strands. Model lifecycle management procedures — how a model is created, approved, released, retrained and retired. Model versioning and change control — every deployed model has a version identifier, and you can say which version made which decision on which date. Performance monitoring and drift detection. Coordinated model updates and retraining schedules. And compliance with governance policies and standards.

Drift is the exam-critical concept here, and you need three terms clearly separated. Data drift is when the input data changes — the demographics of your patients shift, the sensors are replaced, people start phrasing requests differently. Concept drift is when the relationship between inputs and outcome changes — what counted as fraudulent behaviour last year is not what counts now. Model drift is the observable decay in the model's performance, and it is the effect rather than the cause. Data drift or concept drift causes model drift.

**It's important to remember that…** model drift is a symptom. If a question asks what caused the model to degrade, the better answer names the change in the data or in the underlying relationship, not the model itself.

Detecting drift means monitoring the input distributions as well as the outputs, and doing it continuously rather than at an annual review. Responding to drift means a retraining decision, and that decision belongs inside change control. Retraining on new data produces a new model version, and a new model version needs evaluation, approval and a deployment plan of its own. This is why CPMAI is described as iterative: operationalisation feeds straight back into business understanding and data understanding for the next cycle.

Task five point four, solution metrics.

You track two families of measure, and the exam likes the distinction. Technical model performance — accuracy, precision, recall and the rest, measured on live data. And business key performance indicators — the outcome the project was funded to deliver, which was defined back in phase one alongside the return-on-investment expectation. A model can hold its accuracy while the business benefit evaporates, and it can lose a little accuracy while the benefit holds up perfectly well. Report both.

The enablers ask for monitoring dashboards, tracking of key performance indicators, analysis of degradation patterns, regular reports for stakeholders, and alerting when a performance threshold is breached. Alerting is the part people skimp on. A dashboard nobody opens is not monitoring. Define the threshold, define who receives the alert, and define what they are authorised to do when it arrives — including the authority to take the model out of service.

Task five point seven, the contingency plan, sits naturally next to that.

Contingency for an AI solution covers incident response procedures for system failures, backup and disaster recovery, escalation procedures for critical issues, business continuity for a service disruption, and — this is the one that gets forgotten — regular testing and validation of those procedures. An untested failover is a theory.

Three mechanisms are worth naming. Failover, so the service degrades to something safe rather than stopping dead — often a rules-based fallback or a manual process. Human override, so a person can countermand an AI decision. And the circuit breaker, a defined point at which the system is pulled out of service automatically or by a named individual. The higher the autonomy and the higher the impact of the decisions, the more these matter. Alongside them sits contestability: a route for a user or an affected person to challenge a decision the system has made and have it reviewed. That is a trustworthy AI obligation, and it is an operational process you have to build, staff and document.

Task five point six, the transition plan.

You plan the move from project team to operational support. You coordinate knowledge transfer to the production support teams. You establish ongoing maintenance and support procedures. You define roles and responsibilities for the operational phase — who owns the model, who approves retraining, who answers a contestability request, who holds the circuit breaker. And you create handover documentation and training materials.

Be explicit that the handover includes an ongoing obligation. Somebody must keep watching for drift after you have gone, and that name belongs in the document. Your project is not closed until the receiving team has signed off.

Finally, task five point five, the final report and lessons learned.

Document the outcomes and whether the objectives were achieved, measured against the business case rather than against the schedule. Capture lessons learned and good practice for the next initiative. Analyse honestly what worked and what did not. Produce knowledge transfer documentation for the operational teams. And present the results to stakeholders and leadership.

For the exam, hold the phase six deliverables together as a set: the monitoring plan, the transition plan, the lessons learned and final report, and the governance artefacts including model versions and audit trails.

Before we move on, a quick check.

First question. The accuracy of a deployed loan-decision model has fallen over six months. What term describes the fall itself, and what are the two likely underlying causes.
(pause)
The answer is: the fall is model drift. The likely causes are data drift, a change in the input data, or concept drift, a change in the relationship between the inputs and the outcome.

Second question. Which task requires you to establish rollback procedures — managing the deployment plan, or managing the deployment.
(pause)
The answer is: managing the creation of the deployment plan, task five point one. Rollback is planned before deployment, not invented during it.

Third question. Your dashboard shows model accuracy holding steady, but the business case benefit has not materialised. What does that tell you about your metrics.
(pause)
The answer is: it tells you that technical performance and business key performance indicators are separate measures, and that the problem lies in how the output is used or in the original business assumption, not in the model.

By the end of this chapter you should be able to build a deployment plan with rollback and validation criteria, coordinate a deployment and verify it in production, establish model governance with versioning and drift detection, design metrics and alerts across both technical and business measures, write and test contingency and incident procedures, and hand the solution to operations with clear ownership.

Five takeaways. Deployment is the beginning of phase six, not the end of the project. Model drift is the symptom; data drift and concept drift are the causes. Retraining is a change-controlled activity that produces a new, evaluated, approved model version. Alerts and thresholds turn a dashboard into monitoring, and someone must hold the authority to act on them. And a handover is incomplete until the ongoing monitoring obligation has a named owner.

In the next chapter we step back from the six phases and look at the exam itself — how the questions are built, and how to revise.
