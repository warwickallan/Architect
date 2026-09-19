---
chapter: 10
title: "Domain IV (2): prepare, train, check quality, evaluate, approve"
exam: CPMAI
tasks: [CPMAI-4.2, CPMAI-4.3, CPMAI-4.4, CPMAI-4.5, CPMAI-4.6]
sources: [026, 027, 028, 050, 052]
status: draft
---

Chapter ten. Domain four, part two: prepare, train, check quality, evaluate, approve. This chapter covers tasks two to six of Domain four — model quality assurance, managing training, managing data transformation, the data readiness go/no-go decision, and the operationalisation go/no-go decision.

Why this matters. This is where most AI projects quietly go wrong. PMI's own analysis of AI project failure lists data quality, training data that does not resemble real-world data, and proofs of concept that never survive contact with production. All three are decided in the work you are about to manage. If you wave through poor data because the schedule is tight, you do not get a slightly weaker model. You get a confidently wrong one, and you will not find out until it is live in front of customers. Your job here is not to build. Your job is to hold two gates and to make sure that what passes through them was measured, not assumed.

In this chapter you will learn: how to oversee data cleaning, feature engineering and augmentation without doing the hands-on work yourself; how to make a defensible data readiness go/no-go decision; how to manage a training cycle, including hyperparameter tuning, cross-validation and experiment tracking; how to read the core evaluation metrics well enough to challenge them; and how to run the operationalisation go/no-go decision so that a model only reaches production when it is genuinely ready.

Let us start with data preparation, which is task four point four.

Phase three of the CPMAI methodology, Data Preparation, is the phase that consumes the most elapsed time on a typical AI project. That is the single most important planning fact in this chapter. Traditional software projects front-load design and back-load testing. AI projects front-load data work, and teams that plan otherwise run out of budget before the model exists.

What actually happens in this phase is the transformation of raw data into an AI-ready dataset. Cleaning comes first: removing duplicates, handling missing values, correcting obvious errors, resolving inconsistent formats. Then normalisation and standardisation, so that variables measured on wildly different scales do not distort the learning. Then feature engineering and feature selection — deriving the variables the model will actually learn from, and discarding the ones that add noise. Then, where needed, augmentation and synthetic data generation, to increase the volume and diversity of what you have.

Take the example of a model that diagnoses crop disease from a photograph of a leaf, taken by a farmer on a mobile phone. Preparation there means agreeing a standard image resolution, because phones vary enormously in what they produce and the model cannot accept unlimited file sizes. It means rotating and flipping the images you already hold to boost the diversity of the training set. Those are augmentation decisions, and they are yours to sign off even though a specialist performs them.

Two governance points sit inside this phase. First, anonymisation. Personally identifiable information must be masked or removed before it reaches a training pipeline, and you should be able to show where that happens. Second, bias mitigation. If the data understanding phase flagged an under-represented group, this is where resampling or augmentation addresses it — not later, when the model already has the bias baked in.

And a word on pipelines. Your team will talk about ETL and ELT. ETL is extract, transform, load — you transform the data before it lands at the destination. ELT is extract, load, transform — you land it first and transform it in place. You do not need to choose the architecture. You do need to insist that whichever is used, it is repeatable and documented, because reproducibility of the transformation is an explicit part of this task. A model you cannot rebuild from source data is a model you cannot defend.

**In practice…** we ask for one artefact at the end of preparation: a data preparation record that states what was cleaned, what was derived, what was augmented, what was masked, and which version of the source data it started from. If a regulator or an auditor asks how a feature was created, the answer should take minutes to find, not weeks.

Now the first gate, task four point five: verifying data quality for a go/no-go decision.

This is a formal checkpoint, and it comes before any serious model training. You are asking four questions. Is the data complete and accurate enough, measured against the quality thresholds you set earlier? Did the transformations actually produce what they were supposed to produce — did the cleaning work? Is the dataset representative of the population the model will meet in the real world? And what residual bias remains?

That third question is the one people skip. A dataset can be clean, large and perfectly formatted, and still be unrepresentative. If your fraud data comes from one region and the model will run nationally, the data is not ready, however tidy it looks.

The output of this gate is a documented decision with findings and recommendations. Go, no-go, or — most commonly in real life — go with conditions, where you proceed on a subset while acquiring more data in parallel. The important thing for the exam is that it is a decision point with an owner, and that the owner is you, on evidence from the team.

**A common mistake is…** treating the data readiness gate as a status update. The exam will offer you options like "note the data issues in the risk register and continue to model development". That is the wrong answer. A gate you always pass is not a gate.

Next, task four point three: managing model training.

Your responsibilities here are managerial and they are concrete. You plan the training schedule and allocate resources — and compute is a real cost line, not a rounding error. You monitor training progress and computational resource utilisation, because runaway compute spend is a genuine project risk. You coordinate hyperparameter tuning. You oversee cross-validation and model selection. And you manage training data versioning and experiment tracking.

A word on hyperparameters, because the exam distinguishes them from parameters. Parameters are what the model learns from the data during training. Hyperparameters are the settings chosen before training begins — the knobs the team turns from outside the model. Tuning them is iterative and can consume a great deal of compute, so it belongs in your plan rather than arriving as a surprise.

Cross-validation is how the team avoids fooling themselves. Rather than judging the model on one arbitrary split of the data, they rotate the split repeatedly and look at performance across all of it. Which brings us to the split itself. Training data is what the model learns from. Validation data is what you use to tune and compare candidate models. Test data is held back, untouched, for the final honest assessment. If the test set is used during tuning, it stops being a test set, and your final number is optimistic.

**It's important to remember that…** experiment tracking and training data versioning are named responsibilities of the project manager in this task. Every run should be traceable to a data version, a set of hyperparameters and a result. Without that, "the model was better last Tuesday" is an unanswerable statement.

Task four point two sits alongside all of this: quality assurance and quality control of the model itself. That means establishing testing protocols before the team needs them. It means configuration management for model versions and parameters, so you know exactly which artefact is which. It means monitoring performance metrics during development, not only at the end. It means coordinating peer review and technical validation of model designs, so that no single data scientist is the only person who understands the solution. And it means adherence to coding standards. Treat it as the same discipline you would apply to any engineering deliverable, extended to cover data and model versions as well as code.

Now, evaluation. Phase five, and the metrics you must be able to interrogate.

For classification problems, start with the confusion matrix. It sets predictions against reality in four boxes: true positives, true negatives, false positives and false negatives. Precision asks, of everything the model flagged, how much was genuinely positive. Recall asks, of everything that was genuinely positive, how much did the model catch. The F1 score combines the two into a single balanced figure. For regression problems, where the model predicts a number, you will see root mean squared error, or RMSE — the average size of the model's mistakes, in the units of the thing being predicted.

The project management insight is that the choice between precision and recall is a business decision, not a technical one. Consider a building access system using facial recognition. A false positive lets an unauthorised person in. You will push hard to minimise false positives. Now consider screening for an infectious disease. A false negative tells an infected person they are clear. There you will push hard to minimise false negatives. Same mathematics, opposite priority, and it is the business owner who decides which error hurts more.

Two failure modes to recognise. Overfitting is a model that has memorised the training data — excellent scores in training, poor scores on unseen data. Underfitting is a model too simple to capture the pattern — mediocre everywhere. Overfitting is the more dangerous of the two on real projects, because it looks like success right up until deployment.

Evaluation is also where fairness and robustness are tested. Run fairness metrics alongside your accuracy metrics, broken down across subpopulations, so that strong average performance does not hide weak performance for one group. Run robustness testing against adversarial inputs, edge cases and outliers. And confirm with stakeholders that the explanations the system produces are accurate, complete and usable by the people who will actually receive them.

Which brings us to the second gate, task four point six: verifying the model is ready for operationalisation.

Five things to check. Performance against the success criteria defined back in business understanding — the original criteria, not ones rewritten to fit the result. Robustness and generalisation: does it hold up on data it has never seen. Deployment readiness, including infrastructure, integration and capacity. Documentation and operational procedures — can someone else run and support this. And then the final approval decision, which is yours to make and to record.

**A common mistake is…** approving on technical accuracy alone. A fraud model with excellent precision has not proved its case until you can show that the precision translates into fraud losses actually avoided. The gate is business value plus technical performance plus operational readiness, together.

Before we move on, a quick check.

First question. A team reports ninety-eight per cent accuracy on training data and seventy-one per cent on the held-out test set. What are you looking at, and what do you do.

(pause)

The answer is overfitting. The model has memorised rather than generalised. You do not approve operationalisation; you send it back for regularisation, more or more diverse data, or a simpler approach.

Second question. Which comes first, the data readiness go/no-go decision or model training.

(pause)

The answer is the data readiness decision. Task four point five is explicitly a gate before model development, and going ahead on data you know to be unready is the single most reliable way to waste a training budget.

Third question. Your model flags suspected safety defects for human inspection. Missing a real defect is far worse than inspecting a good unit unnecessarily. Which metric do you optimise.

(pause)

The answer is recall. You accept more false positives to minimise false negatives, because the cost of a missed defect outweighs the cost of an unnecessary inspection.

By the end of this chapter you should be able to oversee cleaning, feature engineering, normalisation and augmentation as a manager rather than a practitioner; make and document a data readiness go/no-go decision; manage a training cycle including hyperparameter tuning, cross-validation, versioning and experiment tracking; interpret precision, recall, F1, RMSE and the confusion matrix well enough to challenge a result; and run the operationalisation approval on evidence.

Key takeaways. Data preparation takes the most time on an AI project, so plan it that way. Reproducibility of every transformation is your responsibility, not a nice-to-have. Keep the test set untouched until the end, or your final number is fiction. The balance between false positives and false negatives is a business decision that belongs to the business owner. And both go/no-go decisions must be real decisions, with evidence, an owner and a written record.

In the next chapter we move to Domain five, and everything that happens after the model is approved: deployment, monitoring, model drift and the operational lifecycle.
