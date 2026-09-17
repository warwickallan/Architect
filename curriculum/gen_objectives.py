"""Generate curriculum/objectives/*.md and curriculum/COVERAGE-MATRIX.csv from one data source.

Re-run after any syllabus refresh; never hand-edit the objective tables.
The CSV is regenerated with every row reset to Unseen ONLY if it does not exist yet;
if it exists, existing status/evidence columns are preserved by Objective_ID and
new objectives are appended (so a refresh never wipes progress).
"""
import csv
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
RETRIEVED = "2026-09-17"

# (code, filename, title, source_url, source_version, programme_note, areas)
# areas: [(area_title, weight, [(sub_title, [objective, ...]), ...]), ...]
FRAMEWORKS = [
 ("AB410", "ab-410", "AB-410: Building Intelligent Applications",
  "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-410",
  "page updated 2026-07-31 (ms.date 2026-04-26)",
  "Learn fully; exam optional. Either AB-620 or AB-410 satisfies the AB-100 Associate prerequisite. Pass mark 700.",
  [
   ("Create a foundation for intelligent applications", "25-30%", [
    ("Design Microsoft Power Platform solutions by using AI-enabled tools", [
     "Analyze requirements to identify components and options for implementation",
     "Evaluate built-in agents to include in the business solution",
     "Recommend extensibility options",
     "Recommend environment types",
     "Apply a Microsoft Power Platform solution and ALM strategy"]),
    ("Build data models", [
     "Create and edit tables in the data workspace",
     "Create and modify standard tables",
     "Configure table properties",
     "Create and modify columns",
     "Configure table relationships",
     "Configure prompt columns",
     "Configure row summaries",
     "Configure public views",
     "Configure main forms",
     "Configure security"])]),
   ("Create intelligent applications", "25-30%", [
    ("Create model-driven apps", [
     "Create and configure forms for model-driven apps",
     "Create and configure views for model-driven apps",
     "Create generative pages by using natural language",
     "Compose a model-driven app",
     "Configure access to forms and views for model-driven apps",
     "Configure access to model-driven apps",
     "Create and configure model-driven app charts and dashboards"]),
    ("Create canvas apps", [
     "Create a canvas app using data",
     "Design apps for accessibility, performance, responsiveness, and usability",
     "Automate business processes from canvas apps",
     "Create reuseable components, including named formulas, user-defined functions, and component libraries",
     "Manage variables and collections",
     "Implement error handling",
     "Test canvas apps, including using Monitor",
     "Create a Copilot Studio agent from a canvas app"])]),
   ("Build business application logic and automation", "40-45%", [
    ("Create cloud flows", [
     "Recommend cloud flow triggers",
     "Evaluate and recommend connectors",
     "Manage approvals by using cloud flows",
     "Configure cloud flow actions",
     "Implement flow control with conditions and loops",
     "Test and troubleshoot cloud flows"]),
    ("Create prompts and models in AI Hub", [
     "Build prompts from templates or from blank",
     "Consume a prompt in apps",
     "Consume a prompt in cloud flows",
     "Add knowledge to a prompt",
     "Customize prompt settings, including models",
     "Add inputs to a prompt",
     "Consume an AI model in apps",
     "Consume an AI model in cloud flows"]),
    ("Implement business and process logic", [
     "Configure business rules",
     "Configure business process flows",
     "Configure calculated, rollup, and formula columns",
     "Evaluate use cases for business logic"])])]),

 ("AB620", "ab-620", "AB-620: Designing and Building Integrated AI Solutions in Copilot Studio",
  "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-620",
  "page updated 2026-07-31 (ms.date 2026-04-09)",
  "Target exam (Associate prerequisite for AB-100). Pass mark 700.",
  [
   ("Plan and configure agent solutions", "30-35%", [
    ("Plan an agent solution", [
     "Plan integration with enterprise systems",
     "Plan identity strategy",
     "Plan channels and deployment",
     "Plan responsible AI strategy",
     "Evaluate security and governance considerations",
     "Plan reuseable agent components",
     "Design agents for internal or external audiences"]),
    ("Create and monitor agent flows in Copilot Studio", [
     "Create an agent flow",
     "Create a human-in-the-loop agent flow",
     "Configure actions and connectors",
     "Monitor agent flows",
     "Add input and output parameters",
     "Implement error handling in agent flows"]),
    ("Configure topics", [
     "Add agent flows to a topic",
     "Configure agent response formatting",
     "Add tools to a topic",
     "Configure advanced agent responses with custom prompts",
     "Configure advanced agent responses with custom knowledge sources",
     "Configure advanced agent responses with API and Send HTTP requests",
     "Configure generative answers node",
     "Configure adaptive cards",
     "Manage variables"])]),
   ("Integrate and extend agents in Copilot Studio", "40-45%", [
    ("Connect to enterprise knowledge sources", [
     "Connect to Copilot connectors",
     "Connect to Microsoft Power Platform connectors",
     "Connect to Azure AI Search"]),
    ("Add tools to agents", [
     "Configure and monitor computer use for an agent",
     "Configure MCP tools",
     "Add a tool by using an existing custom connector",
     "Add REST APIs to an agent"]),
    ("Configure multi-agent collaboration from Copilot Studio", [
     "Design multi-agent solutions in Copilot Studio",
     "Integrate a Foundry agent",
     "Integrate an existing agent in Copilot Studio",
     "Integrate a Fabric data agent",
     "Create a multi-agent solution by using A2A protocol"]),
    ("Integrate agents with Azure", [
     "Configure generative answers by using Azure AI Search with Foundry",
     "Configure custom prompts to use the Foundry model catalog",
     "Monitor agents by using Application Insights"])]),
   ("Test and manage agents", "20-25%", [
    ("Evaluate agent performance", [
     "Create a test set",
     "Choose an evaluation method",
     "Review test results"]),
    ("Implement application lifecycle management (ALM) for agents in Copilot Studio", [
     "Create a solution",
     "Add existing agents to a solution",
     "Create and use environment variables",
     "Implement and extend Microsoft Power Platform Pipelines"])])]),

 ("AB100", "ab-100", "AB-100: Agentic AI Business Solutions Architect",
  "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-100",
  "Skills measured as of 2026-10-14 (page updated 2026-09-14). Change log: minor changes to 1.2, 2.1, 3.3 vs prior version.",
  "Target exam (Expert). Requires an Associate cert first (AB-620 planned). No Microsoft learning path or ILT exists yet. Pass mark 700.",
  [
   ("Plan AI-powered business solutions", "25-30%", [
    ("Analyze requirements for AI-powered business solutions", [
     "Assess the use of agents in task automation, data analytics, and decision-making",
     "Review data for grounding, including accuracy, relevance, timeliness, cleanliness, and availability",
     "Organize business solution data to be available for other AI systems"]),
    ("Design overall AI strategy for business solutions", [
     "Implement the AI adoption process from the Cloud Adoption Framework for Azure",
     "Design the strategy for building AI and agents in business solutions",
     "Design a multi-agent solution by using platforms such as Microsoft 365 Copilot, Copilot Studio, and Microsoft Foundry",
     "Develop the use cases for prebuilt agents in the solution",
     "Define the solution rules and constraints when building AI components with Copilot Studio, Microsoft Foundry and Microsoft Foundry Tools",
     "Determine the use of generative AI and knowledge sources in agents built with Copilot Studio",
     "Determine when to build custom agents or extend Microsoft 365 Copilot",
     "Determine when custom AI models should be created",
     "Provide guidelines for creating a prompt library",
     "Develop the use cases for customized small language models for the solution",
     "Provide prompt engineering guidelines and techniques for AI-powered business solutions",
     "Include the elements of the Microsoft AI Center of Excellence",
     "Design AI solutions that use multiple Dynamics 365 apps"]),
    ("Evaluate the costs and benefits of an AI-powered business solution", [
     "Select ROI criteria for AI-powered business solutions, including the total cost of ownership",
     "Create an ROI analysis for the proposed AI solution for a business process",
     "Analyze whether to build, buy, or extend AI components for business solutions",
     "Implement a model router to intelligently route requests to the most suitable model"])]),
   ("Design AI-powered business solutions", "25-30%", [
    ("Design AI and agents for business solutions", [
     "Design business terms for Copilot in Dynamics 365 apps for customer experience and service",
     "Design customizations of Copilot in Dynamics 365 apps for customer experience and service",
     "Design connectors for Copilot in Dynamics 365 Sales",
     "Design agents for integration with Dynamics 365 Contact Center channels",
     "Design task agents",
     "Design autonomous agents",
     "Design prompt and response agents",
     "Propose Microsoft Foundry Tools for a given requirement",
     "Propose code-first generative pages and the use of an agent feed for apps",
     "Design topics for Copilot Studio, including fallback",
     "Design data processing for AI models and grounding",
     "Design a business process to include AI components in a Power Apps canvas app",
     "Apply the Microsoft Power Platform Well-Architected Framework to intelligent application workloads",
     "Determine when to use standard natural language processing, conversational language understanding, or generative AI orchestration in Copilot Studio",
     "Design agents and agent flows with Copilot Studio",
     "Design prompt actions in Copilot Studio"]),
    ("Design extensibility of AI solutions", [
     "Design AI solutions by using custom models in Microsoft Foundry",
     "Design agents in Microsoft 365 Copilot",
     "Design agent extensibility in Copilot Studio",
     "Design agent extensibility with Model Context Protocol in Copilot Studio",
     "Design agents to automate tasks in apps and websites by using Computer Use in Copilot Studio",
     "Design agent behaviors in Copilot Studio, including reasoning and voice mode",
     "Optimize solution design by using agents in Microsoft 365, including Teams and SharePoint"]),
    ("Orchestrate configuration for prebuilt agents and apps", [
     "Orchestrate AI features in Dynamics 365 apps for finance and supply chain",
     "Orchestrate AI features in Dynamics 365 apps for customer experience and service",
     "Propose Microsoft 365 agents for business scenarios",
     "Orchestrate the configuration of Microsoft 365 Copilot for Sales and Microsoft 365 Copilot for Service",
     "Propose Microsoft Power Platform AI features, including AI hub",
     "Design interoperability of the finance and operations agent chats to use additional knowledge sources",
     "Recommend the process of adding knowledge sources to in-app help and guidance for Dynamics 365 Finance or Dynamics 365 Supply Chain Management apps"])]),
   ("Deploy AI-powered business solutions", "40-45%", [
    ("Analyze, monitor, and tune AI-powered business solutions", [
     "Recommend the process and tools required for monitoring agents",
     "Analyze backlog and user feedback of AI and agent usage",
     "Apply AI-based tools to analyze and identify issues and perform tuning",
     "Monitor agent performance and metrics",
     "Interpret telemetry data for performance and model tuning"]),
    ("Manage the testing of AI-powered business solutions", [
     "Recommend the process and metrics to test agents",
     "Create validation criteria of custom AI models",
     "Validate effective Copilot prompt best practices",
     "Design end-to-end test scenarios of AI solutions that use multiple Dynamics 365 apps",
     "Build the strategy for creating test cases by using Copilot"]),
    ("Design the ALM process for AI-powered business solutions", [
     "Design the ALM process for data used in AI models and agents",
     "Design the ALM process for Copilot Studio agents, connectors, and actions",
     "Design the ALM process for Microsoft Foundry Agents Service",
     "Design the ALM process for custom AI models",
     "Design the ALM process for AI in Dynamics 365 apps for finance and supply chain",
     "Design the ALM process for AI in Dynamics 365 apps for customer experience and service"]),
    ("Design responsible AI, security, governance, risk management, and compliance", [
     "Design security for agents",
     "Design governance for agents",
     "Design model security",
     "Analyze solution and AI vulnerabilities and mitigations, including prompt manipulation",
     "Review solution for adherence to responsible AI principles",
     "Validate data residency and movement compliance",
     "Design access controls on grounding data and model tuning",
     "Design audit trails for changes to models and data"])])]),

 # PMI-CPMAI: flat domains (no sub-area level) -> IDs CPMAI-<domain>.<task>. Each task carries the
 # ECO's illustrative enablers (PMI: "not meant to be an exhaustive list"); they render in the register
 # only, not the matrix. Source (c)2025 PMI, reproduced as an objective mapping for personal study.
 ("CPMAI", "cpmai", "PMI-CPMAI: PMI Certified Professional in Managing AI",
  "https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/pmicpmai-exam-content-outline2025-updated.pdf",
  "Examination Content Outline, September 2025 (PMI-CPMAI replaced the earlier CPMAI v7 certification)",
  "Target exam (first). 120 questions (100 scored + 20 unscored pretest), 160 minutes, no breaks. Completion of the paid PMI-CPMAI Exam Prep Course is REQUIRED to schedule the exam. Up to 3 attempts in a 12-month eligibility window. Maintain with 30 PDUs / 3 years.",
  [
   ("Support Responsible and Trustworthy AI Efforts", "15%", [(None, [
     ("Oversee privacy and security plan", [
      "Establish data governance protocols for personally identifiable information (PII)",
      "Implement encryption and access controls for AI training data",
      "Conduct privacy impact assessments for AI model deployment",
      "Ensure compliance with GDPR, CCPA, and other data protection regulations",
      "Design secure data handling procedures throughout the AI lifecycle"]),
     ("Manage AI/ML transparency (e.g., data selection, algorithm selection)", [
      "Document model selection criteria and decision rationale",
      "Create transparent reporting on data sources and preprocessing steps",
      "Establish explainability requirements for stakeholder communication",
      "Maintain audit trails for algorithmic decision-making processes",
      "Implement model interpretability tools and techniques"]),
     ("Conduct bias checks (e.g., model, data, algorithm)", [
      "Analyze training data for demographic and representation imbalances",
      "Perform fairness testing across different population groups",
      "Implement bias detection metrics and monitoring systems",
      "Review model outputs for discriminatory patterns",
      "Apply bias mitigation techniques during model development"]),
     ("Monitor regulatory and policy compliance", [
      "Track evolving AI regulations and industry standards",
      "Ensure adherence to sector-specific compliance requirements",
      "Coordinate with legal and compliance teams on AI governance",
      "Implement compliance monitoring and reporting mechanisms",
      "Maintain documentation for regulatory audits and reviews"]),
     ("Manage accountability documentation and audit trail", [
      "Create comprehensive records of AI model development decisions",
      "Establish version control for models, data, and training processes",
      "Document stakeholder approvals and go/no-go decision points",
      "Maintain chain of custody records for training and test data",
      "Prepare accountability reports for executive and regulatory review"])])]),
   ("Identify Business Needs and Solutions", "26%", [(None, [
     ("Identify problem to be solved (e.g., needs, persona)", [
      "Conduct stakeholder interviews to understand business pain points",
      "Analyze existing processes to identify automation opportunities",
      "Define target user personas and use cases for AI solutions",
      "Map business problems to appropriate AI patterns and approaches",
      "Validate problem statements with subject matter experts"]),
     ("Evaluate initial AI feasibility", [
      "Assess technical viability of proposed AI solutions",
      "Analyze data availability and quality for model training",
      "Evaluate computational resource requirements and constraints",
      "Review organizational readiness for AI implementation",
      "Compare AI approaches against traditional solution alternatives"]),
     ("Conduct risk assessment(s) (e.g., security, safety, ethics)", [
      "Identify potential failure modes and safety implications",
      "Assess cybersecurity vulnerabilities in AI systems",
      "Evaluate ethical implications of AI decision-making",
      "Analyze reputational and business continuity risks",
      "Develop risk mitigation strategies and contingency plans"]),
     ("Develop AI project scope statement", [
      "Define project boundaries and deliverables for AI initiatives",
      "Establish success criteria and performance metrics",
      "Identify in-scope and out-of-scope functionality",
      "Document assumptions and constraints for AI implementation",
      "Align scope with business objectives and resource availability"]),
     ("Determine ROI", [
      "Calculate expected benefits from AI solution implementation",
      "Estimate total cost of ownership including infrastructure and maintenance",
      "Develop business case with financial justification",
      "Establish metrics for measuring return on investment",
      "Create cost-benefit analysis for stakeholder decision-making"]),
     ("Manage adoption/integration risks", [
      "Assess organizational change management requirements",
      "Identify potential user resistance and adoption barriers",
      "Plan integration with existing systems and workflows",
      "Develop training and communication strategies for end users",
      "Monitor adoption metrics and address implementation challenges"]),
     ("Draft AI solution", [
      "Create high-level architecture for AI system design",
      "Define data flow and processing requirements",
      "Specify AI model types and algorithmic approaches",
      "Document integration points with existing systems",
      "Outline deployment and operational considerations"]),
     ("Define success criteria (e.g., KPIs, metrics)", [
      "Establish measurable performance indicators for AI models",
      "Define business impact metrics and success thresholds",
      "Create technical performance benchmarks and targets",
      "Develop user satisfaction and adoption measurement criteria",
      "Align success metrics with organizational objectives"]),
     ("Support business case creation", [
      "Gather financial data and projected benefits for business case",
      "Collaborate with finance teams on cost estimates and projections",
      "Develop compelling narratives for executive presentations",
      "Provide technical expertise for business case validation",
      "Review and refine business case documentation"]),
     ("Identify project resources (e.g., people, hardware, contractors)", [
      "Assess skill requirements for AI project team composition",
      "Evaluate hardware and infrastructure needs for development and deployment",
      "Identify gaps requiring external contractors or consultants",
      "Plan resource allocation and timeline for project phases",
      "Coordinate with procurement for specialized AI tools and platforms"])])]),
   ("Identify Data Needs", "26%", [(None, [
     ("Define required data", [
      "Specify data types and formats needed for AI model training",
      "Determine data volume requirements and sampling strategies",
      "Identify temporal and granularity requirements for data collection",
      "Define data quality standards and acceptance criteria",
      "Map data requirements to business objectives and use cases"]),
     ("Identify data SMEs", [
      "Locate domain experts with knowledge of relevant data sources",
      "Engage business users who understand data context and meaning",
      "Connect with data stewards and data governance teams",
      "Identify technical experts familiar with data systems and structures",
      "Establish communication channels with identified subject matter experts"]),
     ("Identify data sources and locations", [
      "Map internal databases and data warehouses containing relevant information",
      "Explore external data sources and third-party data providers",
      "Assess cloud storage and distributed data repositories",
      "Inventory legacy systems and historical data archives",
      "Document data ownership and access permissions"]),
     ("Coordinate AI workspace and infrastructure", [
      "Provision computing resources for data processing and model training",
      "Establish secure development environments for AI teams",
      "Configure data storage and backup systems for project needs",
      "Set up collaboration tools and version control systems",
      "Ensure compliance with security and governance requirements"]),
     ("Gather required data", [
      "Execute data extraction from identified sources and systems",
      "Coordinate data transfers and migrations to AI development environments",
      "Implement data collection processes for ongoing data feeds",
      "Validate data completeness and accuracy during collection",
      "Establish data refresh and update procedures"]),
     ("Check data privacy, compliance, and access", [
      "Verify data usage rights and licensing agreements",
      "Ensure compliance with data protection regulations and policies",
      "Implement access controls and user permissions for data resources",
      "Conduct privacy impact assessments for data usage",
      "Document data lineage and usage for audit purposes"]),
     ("Oversee data evaluation", [
      "Assess data quality dimensions including accuracy, completeness, and consistency",
      "Analyze data distributions and identify potential biases or gaps",
      "Evaluate data freshness and relevance for AI model training",
      "Review data schema and structure for modeling compatibility",
      "Conduct exploratory data analysis to understand data characteristics"]),
     ("Determine if data meets solution needs", [
      "Compare available data against defined requirements and specifications",
      "Assess data sufficiency for training robust AI models",
      "Identify data gaps and develop strategies for addressing deficiencies",
      "Validate data representativeness for target use cases",
      "Make go/no-go decisions based on data readiness assessment"]),
     ("Convey data understanding to leadership", [
      "Prepare executive summaries of data assessment findings",
      "Create visualizations and reports to communicate data insights",
      "Present data readiness status and recommendations to stakeholders",
      "Translate technical data concepts into business-relevant language",
      "Provide regular updates on data preparation progress and challenges"])])]),
   ("Manage AI Model Development and Evaluation", "16%", [(None, [
     ("Oversee AI/ML model technique(s) (e.g., algorithm, selection)", [
      "Research and evaluate appropriate algorithms for specific use cases",
      "Guide selection between supervised, unsupervised, and reinforcement learning approaches",
      "Assess trade-offs between model complexity, performance, and interpretability",
      "Coordinate with data scientists on model architecture decisions",
      "Review algorithm selection criteria and decision documentation"]),
     ("Oversee AI/ML model QA/QC (e.g., configuration management, model performance)", [
      "Establish model testing protocols and quality assurance procedures",
      "Implement configuration management for model versions and parameters",
      "Monitor model performance metrics during development and testing",
      "Coordinate peer reviews and technical validation of model designs",
      "Ensure adherence to coding standards and best practices"]),
     ("Manage AI/ML model training", [
      "Plan training schedules and resource allocation for model development",
      "Monitor training progress and computational resource utilization",
      "Coordinate hyperparameter tuning and optimization activities",
      "Oversee cross-validation and model selection processes",
      "Manage training data versioning and experiment tracking"]),
     ("Manage data transformation to conduct data preparation", [
      "Oversee data cleaning and preprocessing workflows",
      "Coordinate feature engineering and selection activities",
      "Manage data normalization and standardization processes",
      "Supervise data augmentation and synthetic data generation",
      "Ensure data transformation reproducibility and documentation"]),
     ("Verify data quality for go/no-go decision to conduct data preparation", [
      "Conduct final data quality assessments before model training",
      "Validate data preprocessing and transformation results",
      "Assess data representativeness and potential bias issues",
      "Make decisions on data readiness for model development",
      "Document data quality findings and recommendations"]),
     ("Verify model ready for operationalization go/no-go decision", [
      "Evaluate model performance against established success criteria",
      "Assess model robustness and generalization capabilities",
      "Review deployment readiness including infrastructure requirements",
      "Validate model documentation and operational procedures",
      "Make final approval decisions for model deployment"])])]),
   ("Operationalize AI Solution", "17%", [(None, [
     ("Manage creation of AI solution deployment plan", [
      "Develop comprehensive deployment strategy and timeline",
      "Plan infrastructure requirements and resource allocation",
      "Coordinate with IT teams on system integration and deployment",
      "Establish rollback procedures and contingency plans",
      "Create deployment checklists and validation criteria"]),
     ("Manage AI solution deployment", [
      "Coordinate deployment activities across technical teams",
      "Monitor deployment progress and resolve implementation issues",
      "Validate system functionality and performance in production environment",
      "Manage user access provisioning and security configurations",
      "Conduct post-deployment verification and testing"]),
     ("Oversee model governance", [
      "Establish model lifecycle management procedures",
      "Implement model versioning and change control processes",
      "Monitor model performance and drift detection",
      "Coordinate model updates and retraining schedules",
      "Ensure compliance with governance policies and standards"]),
     ("Oversee AI solution metrics (e.g., KPI, model performance)", [
      "Implement monitoring dashboards for business and technical metrics",
      "Track key performance indicators and success measures",
      "Analyze model performance trends and degradation patterns",
      "Generate regular performance reports for stakeholders",
      "Establish alerting systems for performance threshold breaches"]),
     ("Prepare final report/lessons learned", [
      "Document project outcomes and achievement of objectives",
      "Capture lessons learned and best practices for future projects",
      "Analyze what worked well and areas for improvement",
      "Create knowledge transfer documentation for operational teams",
      "Present final project results to stakeholders and leadership"]),
     ("Manage AI solution transition plan", [
      "Plan transition from project team to operational support",
      "Coordinate knowledge transfer to production support teams",
      "Establish ongoing maintenance and support procedures",
      "Define roles and responsibilities for operational phase",
      "Create handover documentation and training materials"]),
     ("Oversee AI solution contingency plan", [
      "Develop incident response procedures for AI system failures",
      "Plan backup and disaster recovery strategies",
      "Establish escalation procedures for critical issues",
      "Create business continuity plans for AI service disruptions",
      "Test and validate contingency procedures regularly"])])]),
  ]),
]

COLUMNS = ["Framework", "Objective_ID", "Objective", "Weight_or_priority", "Lesson", "Product",
           "Evidence", "Status", "Confidence", "Last_practised", "Last_retested", "Source_version", "Notes"]


def build():
    rows = []
    for code, fname, title, url, version, notes, areas in FRAMEWORKS:
        md = [f"# {title}", "",
              f"- **Source:** {url}",
              f"- **Source version:** {version}",
              f"- **Retrieved:** {RETRIEVED}",
              f"- **Programme note:** {notes}", ""]
        if code == "CPMAI":
            md += ["**Methodology vs exam blueprint.** The CPMAI *methodology* is six iterative phases "
                   "(Business Understanding, Data Understanding, Data Preparation, Model Development, "
                   "Model Evaluation, Model Operationalisation). The *exam* is organised into the five "
                   "domains below (DACUM job-task analysis, May 2025), and PMI states that customising the "
                   "approach runs through all five domains rather than being isolated to one. Objectives here "
                   "are the exam tasks; the phases are taught as the lifecycle model in `method/README.md`.", ""]
        md += [
              "Objective wording is quoted from the official study guide so IDs stay traceable. "
              "Commentary belongs in lessons, not here. IDs are `CODE-area.subarea.n` and are stable "
              "across refreshes: a removed objective is marked *retired*, never renumbered.", "",
              "Generated by `curriculum/gen_objectives.py` - edit the generator, not this file.", ""]
        for ai, (atitle, weight, subs) in enumerate(areas, 1):
            md += [f"## {ai}. {atitle} ({weight})", ""]
            if subs and subs[0][0] is None:
                # flat area (PMI domain -> tasks): IDs CODE-area.n; objectives are (task, [enablers])
                md += ["| ID | Task | Illustrative enablers (PMI: not exhaustive) |", "|---|---|---|"]
                for oi, (obj, enablers) in enumerate(subs[0][1], 1):
                    oid = f"{code}-{ai}.{oi}"
                    md.append(f"| `{oid}` | {obj} | {' · '.join(enablers)} |")
                    rows.append({"Framework": code, "Objective_ID": oid, "Objective": obj,
                                 "Weight_or_priority": weight, "Status": "Unseen",
                                 "Source_version": version})
                md.append("")
                continue
            for si, (stitle, objs) in enumerate(subs, 1):
                md += [f"### {ai}.{si} {stitle}", "", "| ID | Objective |", "|---|---|"]
                for oi, obj in enumerate(objs, 1):
                    oid = f"{code}-{ai}.{si}.{oi}"
                    md.append(f"| `{oid}` | {obj} |")
                    rows.append({"Framework": code, "Objective_ID": oid, "Objective": obj,
                                 "Weight_or_priority": weight, "Status": "Unseen",
                                 "Source_version": version})
                md.append("")
        (ROOT / "curriculum" / "objectives" / f"{fname}.md").write_text("\n".join(md), encoding="utf-8")
    return rows


def write_matrix(rows):
    path = ROOT / "curriculum" / "COVERAGE-MATRIX.csv"
    existing = {}
    if path.exists():
        with open(path, newline="", encoding="utf-8") as f:
            existing = {r["Objective_ID"]: r for r in csv.DictReader(f)}
    out = []
    for r in rows:
        merged = {c: "" for c in COLUMNS}
        merged.update(existing.get(r["Objective_ID"], {}))
        # objective text / weight / source version always follow the generator
        merged.update({k: r[k] for k in ("Framework", "Objective", "Weight_or_priority", "Source_version")})
        merged["Objective_ID"] = r["Objective_ID"]
        merged["Status"] = merged["Status"] or "Unseen"
        out.append(merged)
    # objectives that vanished from the source are kept, flagged retired
    seen = {r["Objective_ID"] for r in rows}
    for oid, r in existing.items():
        if oid not in seen:
            r = dict(r)
            r["Notes"] = (r.get("Notes", "") + " RETIRED from source").strip()
            out.append(r)
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=COLUMNS)
        w.writeheader()
        w.writerows(out)
    return len(out)


if __name__ == "__main__":
    n = write_matrix(build())
    print(f"objectives: {n}")
