---
chapter: 1
title: "What CPMAI is, and why AI projects are different"
exam: CPMAI
tasks: [intro, exam facts]
sources: [ECO Sept 2025 (domains, weights, exam mechanics); PMI Blog "Why Most AI Projects Fail" 12 Dec 2024; lectures 004, 008–010]
status: draft
---

Chapter one. What CPMAI is, and why AI projects are different.

This chapter is your orientation. It covers the shape of the PMI-CPMAI certification — the five exam domains and their weights, the mechanics of the test, and the six-phase methodology that sits underneath all of it. Everything that follows in this course hangs off the frame we build here.

Why does this matter? Because the single most expensive mistake on an AI initiative is managing it as though it were a software project. PMI's own guidance on why most AI projects fail puts that first: treating AI as application development, when it is data-centric rather than code-centric. When you run an AI project on a build-and-release mindset, you discover the data problem far too late, usually after the sponsor has already been promised a date. And in the exam, that same confusion is exactly what the question writers are testing. They will offer you a perfectly sensible waterfall answer, or a perfectly sensible agile answer, and neither will be right.

In this chapter you will learn: how to describe what CPMAI is and where it came from; how to explain the three characteristics that make AI work genuinely different from traditional delivery; how to name the six phases in order and say what each one is for; how to recall the five exam domains, their weightings and the mechanics of the test; and how to use this course to prepare efficiently.

Let's start with the name. CPMAI stands for Cognitive Project Management for AI. Say "PMI-CPMAI" once when you're describing the credential formally; after that, CPMAI is fine, and that's what I'll use.

It is a methodology first and a certification second. The methodology was developed by an analyst firm called Cognilytica, which PMI acquired in September 2024. PMI then ran a formal job-task analysis — a DACUM workshop, that's D-A-C-U-M, short for Developing A Curriculum — in May 2025, and published a new Examination Content Outline, or ECO, that took effect in September 2025. That new exam replaced the older version seven. So when you read material online, check its date. Version seven leaned heavily on AI history and technical foundations: strong and weak AI, algorithm families, evaluation metrics like precision and recall. The current exam moves the centre of gravity towards responsible AI, business framing, data, and operations. There is still technical content, but it is there in service of decisions you make as a practitioner, not as trivia.

Now, the intellectual roots. CPMAI is derived from CRISP-DM — the Cross-Industry Standard Process for Data Mining, a methodology that data miners have used since the late nineteen-nineties. CRISP-DM gave it the iterative, data-first structure. CPMAI then adds two things CRISP-DM never had: agile ways of working, so that you run in short, time-boxed iterations with feedback, and governance, so that trust, ethics, data protection and accountability are built in from the first phase rather than bolted on before go-live.

A neat way to hold this in your head: CRISP-DM plus agile plus governance equals CPMAI. And it is vendor-neutral. It does not assume a cloud platform, a toolchain or a model provider.

So what are the six phases? Phase one, Business Understanding. Phase two, Data Understanding. Phase three, Data Preparation. Phase four, Model Development. Phase five, Model Evaluation. Phase six, Model Operationalisation. Learn that order now and repeat it until it is automatic, because the exam will reference phases constantly and later chapters assume you know where you are.

Two things about those phases matter more than the list itself. First, they are iterative, not sequential. You do not complete Business Understanding, sign it off and never return. You run a phase, learn something, and loop back. It is entirely normal — and correct — for Data Understanding to send you back to Business Understanding because the data you assumed existed does not exist in usable form. Second, they run in small increments. CPMAI expects you to iterate through all six phases on a narrow slice of the problem rather than attempting the whole ambition in one pass.

**It's important to remember that** CPMAI phases are iterative and you are expected to return to earlier phases as you learn. If an exam option describes locking a phase down and moving on permanently, treat it with suspicion.

Now the heart of the chapter: why are AI projects different? Three characteristics.

First, they are data-driven. In a traditional project, requirements drive code, and code produces the behaviour you specified. In an AI project, data drives the model, and the model produces behaviour you did not specify in detail. That flips the centre of gravity. The largest share of effort — and PMI is explicit that teams routinely underestimate this — goes into acquiring, understanding and preparing data. Notice that two of the six phases are about data, and two of the five exam domains carry the heaviest weighting between business needs and data needs. That is not an accident; it is the methodology telling you where the work lives.

Second, they are iterative by necessity, not by fashion. You cannot know in advance whether the available data supports the outcome the business wants. You find out by trying. So CPMAI expects short cycles that test feasibility early and cheaply, and it expects you to be willing to stop. Sometimes the right answer at the end of an iteration is that this is not an AI problem at all and a simple rules-based integration would solve it better.

Third, they are probabilistic. A traditional system is deterministic: given the same input, you get the same output, and a defect is a defect. A model produces a likelihood. It will be wrong some of the time by design. That changes everything downstream. Acceptance criteria become thresholds rather than pass-or-fail. Testing becomes evaluation against a metric. And because the world drifts away from the data the model learned on, the thing degrades after deployment. PMI lists neglecting maintenance and evolution as one of the recurring mistakes: models decay, so you plan for the lifecycle, not the launch.

**In practice…** the sentence I would have every AI project sponsor sign in phase one is this: what decision will change as a result of this system, by how much, and how will we know. If you cannot answer that, you have a technology enthusiasm, not a project. PMI's failure list calls the same thing return-on-investment misalignment — no clear problem or expected benefit defined up front.

**A common mistake is** assuming that because CPMAI includes agile, running a standard agile delivery is sufficient. It is not. PMI's own position is that agile alone does not fit AI work, precisely because agile assumes the increment is code you control, not data you discovered.

Now the exam itself. Five domains. Domain one, Support Responsible and Trustworthy AI Efforts, fifteen per cent. Domain two, Identify Business Needs and Solutions, twenty-six per cent. Domain three, Identify Data Needs, twenty-six per cent. Domain four, Manage AI Model Development and Evaluation, sixteen per cent. Domain five, Operationalise AI Solution, seventeen per cent.

Read those weights carefully. Business needs and data needs together are fifty-two per cent of the exam — more than half. The front half of the lifecycle is where the marks are.

The mechanics. You get one hundred and twenty questions. One hundred of those are scored; twenty are unscored pretest items being trialled for future exams, and you cannot tell which is which, so answer everything with equal care. You have one hundred and sixty minutes, with no scheduled breaks.

There is an eligibility condition that catches people out: you must complete PMI's own CPMAI Exam Prep Course before you can schedule the exam. It is not optional and no third-party course substitutes for it — including this one. Within your twelve-month eligibility window you may sit the exam up to three times. Once you hold the credential, you maintain it with thirty professional development units, or PDUs, every three years.

**It's important to remember that** completion of PMI's prep course is a prerequisite to scheduling, and that the exam has no scheduled breaks in its hundred and sixty minutes. Plan your water intake accordingly.

How should you use this course? Treat it as the map and the drill, not the territory. PMI's official course and guide are your primary content; these chapters give you structure, spoken repetition, exam-shaped warnings and the practitioner's view. Work through the chapters in order, because the six phases build. Listen once for shape, then again with the objective list in front of you. And every time you meet a concept, ask yourself which phase it belongs to and which domain it will be examined under.

Before we move on, a quick check.

Question one. CPMAI is derived from which earlier methodology, and what two things does it add?
(pause)
The answer is CRISP-DM, the Cross-Industry Standard Process for Data Mining, with agile ways of working and governance added.

Question two. Which two exam domains carry the heaviest weighting, and what do they total?
(pause)
The answer is Identify Business Needs and Solutions, and Identify Data Needs, at twenty-six per cent each — fifty-two per cent together.

Question three. Of the one hundred and twenty questions on the exam, how many are scored?
(pause)
The answer is one hundred. The other twenty are unscored pretest items, and they are not identified.

By the end of this chapter you should be able to describe what CPMAI is and where it came from, explain why AI work is data-driven, iterative and probabilistic, name the six phases in order, recall the five domains with their weights and the exam mechanics, and set up your own study approach.

Key takeaways. CPMAI equals CRISP-DM plus agile plus governance, vendor-neutral and iterative. The six phases are Business Understanding, Data Understanding, Data Preparation, Model Development, Model Evaluation and Model Operationalisation, and you loop back through them. AI projects fail most often because they are managed as code projects rather than data projects. Business and data needs together are over half the exam. And the exam is one hundred and twenty questions in one hundred and sixty minutes, with PMI's prep course required before you can book it.

In the next chapter we go into phase one, Business Understanding, and the discipline of defining a problem that AI is actually the right answer to.
