---
chapter: 13
title: "Passing the exam, and using CPMAI for real"
exam: CPMAI
tasks: []
sources: [lectures 005-007, 057-059; Architect method/README.md]
status: draft
---

Chapter thirteen. Passing the exam, and using CPMAI for real. This chapter is the exam strategy chapter: how the PMI-CPMAI questions are built, how to eliminate distractors, how to plan your study, and how the six phases map onto the way you already run projects.

Why this matters. People fail this exam for two reasons, and neither of them is that the content is hard. The first is time — they read every question three times and run out of clock. The second is more subtle: they pick an answer that is a genuinely good project management action, but belongs to a different task than the one the question is asking about. And there is a third failure, which is not an exam failure at all. You pass, you frame the certificate, and nothing changes on Monday. A certificate is a piece of paper unless the method changes how you run the work.

In this chapter you will learn: how to recognise the two dominant CPMAI question shapes and answer each of them; how to use elimination when you are not certain, including the "most dominant pattern" rule; how to handle single-select against multi-select; how to build a study plan that fits the time you actually have; and how to map the six CPMAI phases onto a discovery-to-review delivery lifecycle so the method survives the exam.

Start with the mechanics, because they shape everything else. The exam is one hundred and twenty questions in one hundred and sixty minutes, with no scheduled breaks. One hundred of those questions are scored. Twenty are unscored pretest items that PMI is trialling for future exams, and you cannot tell which is which. Do the arithmetic and you have about eighty seconds per question. That is comfortable if you read once and decide, and it is not comfortable if you agonise. The five domains carry different weights: responsible and trustworthy AI is fifteen per cent; identifying business needs and solutions is twenty-six per cent; identifying data needs is twenty-six per cent; managing model development and evaluation is sixteen per cent; and operationalising the solution is seventeen per cent. Domains two and three together are more than half the exam. That is where your revision time goes.

A few eligibility points that trip people up. You must complete PMI's own exam preparation course before you are allowed to schedule the exam — you cannot book first and study later. Once you are eligible, you get up to three attempts within a twelve-month eligibility window. After you pass, you maintain the credential with thirty professional development units, or PDUs, every three years.

Now, question shapes. There are two you will see again and again.

The first is the situational one. A project manager is in a given phase, something has gone wrong, what should the project manager do next. The team has too little data to train on — do you augment, delete, duplicate, or go back a phase. The model passed evaluation but is degrading in production — what do you do. These questions are not testing whether you know a definition. They are testing whether you know which phase you are standing in and what the correct next move is from there. So read for two things before you look at the options: which phase, and which task. Then the answer usually presents itself.

The second shape is classification. Here is a system; which of the seven patterns of AI does it fall under. Here is an activity; which phase does it belong to. Here is a data problem; is it a quality issue or a quantity issue.

Take the classification one first, with the example the source course uses. You are implementing an online auction system. Which pattern is it? The options are predictive analytics, autonomous systems, goal-driven systems and recognition. Work by elimination. Recognition is about turning unstructured content — images, speech, handwriting, documents — into structured information. An auction does not do that, so strike it. Autonomous systems perceive, decide and act with minimal human involvement; there are human bidders in an auction, so it is a poor fit. Predictive analytics is tempting, because the system certainly forecasts bid behaviour — but forecasting here is a supporting technique, not the purpose. The purpose is optimisation: allocating items and setting prices under constraints, in milliseconds, against an objective like revenue. That is learning through feedback towards a defined goal. The answer is goal-driven.

**It's important to remember that** most real systems combine several patterns, and the exam knows it. If the question is single-select, you are being asked for the dominant pattern — the one that describes the core intelligence, not the supporting one. If the question is multi-select, it will tell you so, and then you include every pattern that genuinely applies. Read the stem for the word "all", and read how many answers you are asked to choose.

Now the situational shape, with the second worked example. A generative AI conversational agent in a bank uses agentic workflows for fraud alerts, and traceability of every generated response is needed for audit. Which action manages accountability, documentation and the audit trail? Option one: establish version control of models and data, and prepare accountability reports. Option two: deploy bias and fairness detection across customer segments. Option three: maintain operational logs and audit trails for decision records through the transaction cycle. Option four: design and enforce secure handling and encryption for sensitive banking data.

Notice what is happening. Every one of those four is a sensible thing to do. Bias detection is a real Domain one task — but it is the bias-checking task, not the accountability task, so it goes. Encryption and secure handling is the privacy and security plan task, so it goes. That leaves two options that both sound like accountability. Logging is genuinely required for agentic systems, and it is the answer people reach for. But the accountability and documentation task in the Examination Content Outline, the ECO, is specifically about version control of models and data and formal accountability reporting — the governance artefacts. So the first option wins.

**A common mistake is** picking the answer that is true rather than the answer that is the task. Three of your four distractors will usually be correct actions borrowed from neighbouring tasks. Your job is to name the task in the question stem before you read the options, then keep only the option that sits inside it.

**In practice**, this is why the ECO is the real syllabus. The questions are written from the domains, tasks and enablers — mostly from the enablers. If you can recite what each task actually asks the project manager to do, you can answer questions about technologies you have never touched.

A word on the wrong-looking options. Eliminate on category first, not on detail. Ask: is this the right phase? Is this the right task? Is this even a project manager's action, or is it a data scientist's? CPMAI is a project management credential. When an option describes hyperparameter tuning and another describes agreeing an evaluation threshold with the business sponsor, lean towards the management action.

Now the study plan. Be honest about your starting point. If you already hold the PMP and you have worked with machine learning, you need one to two weeks. If you have one of those two and not the other, you need the same two weeks but weighted towards your gap — the project managers need to learn the data and model vocabulary; the data people need to learn phases, go/no-go gates and stakeholder work. If you have neither, give yourself a month. It is not a complex exam, but it is a specific one.

Here is a shape that works. Spend the first two or three days completing the required PMI preparation course properly and taking notes on anything unclear. Book your exam date as soon as you are eligible — a fixed date is the most reliable study tool there is, because work expands to fill the time you allow it. Then run domain-by-domain questions alongside your reading, so that recall is tested as it is built, not weeks later. In week one, use mock exams in practice mode with the explanations open; read the explanation even when you were right. In week two, sit full mocks under exam conditions, full one hundred and twenty questions, full one hundred and sixty minutes, no pausing. Watch your finishing time. Coming in fifteen or twenty minutes early is a good sign, because it gives you room to revisit flagged questions. Do not sit the same mock more than twice — after that you are recalling the questions, not the concepts. When you are consistently scoring above eighty per cent on fresh material, book nothing else and sit the exam.

Finally, using CPMAI for real, which is the point of all of this. Map the six phases onto the lifecycle you already run. Discovery is Phase one and Phase two together — Business Understanding and Data Understanding, which is where you establish the business question, the expected benefit and whether the data to answer it actually exists. Design and build covers Phase three, Phase four and Phase five — Data Preparation, Model Development and Model Evaluation, with the honest recognition that preparation will take more of your budget than anyone forecast. Deployment and run is Phase six, Model Operationalisation, including monitoring for drift and the decision to retrain. And review closes the loop back into Phase one, because CPMAI is iterative by design: small slices, a go/no-go at every phase boundary, and permission to go back rather than push a broken assumption forward.

Two things travel across all six. Governance and responsible AI, which is Domain one and never a phase of its own. And the discipline of being data-centric rather than code-centric, which is the difference between CPMAI and treating an AI project like an application build.

Before we move on, a quick check. First question. A single-select question asks which pattern applies to a system that blends conversational interaction with personalised recommendations. What rule do you apply?
(pause)
The answer is: choose the most dominant pattern — the one describing the core intelligence of the system — and only list several if the question is explicitly multi-select.

Second question. You have one hundred and twenty questions and one hundred and sixty minutes. Roughly how long per question, and how many are scored?
(pause)
The answer is: about eighty seconds each, and one hundred are scored, with twenty unscored pretest items mixed in.

Third question. Three of the four options are all reasonable governance actions. How do you choose?
(pause)
The answer is: name the ECO task the question is asking about, then keep only the option that belongs to that task.

By the end of this chapter you should be able to recognise the situational and classification question shapes, eliminate distractors by phase and by task, handle single-select against multi-select, build a study plan sized to your background, and map the six phases onto your delivery lifecycle.

The takeaways. Domains two and three are more than half the exam, so weight your revision there. The distractors are usually right answers to the wrong task, so identify the task first. In single-select pattern questions, dominant beats merely present. Book the date early and sit full-length mocks under real conditions until you are clearing eighty per cent. And treat the six phases as your lifecycle, not your revision notes, because the credential is only worth what you do with it.

That closes the course. What remains is the practice set and the exam booking, and then the first project you run this way.
