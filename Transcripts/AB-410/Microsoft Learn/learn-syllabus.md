# Microsoft Learn — official AB-410 preparation (syllabus and learning objectives)

> Extracted 2026-09-21 from the Microsoft Learn catalog API and module pages (read-only). Machine-readable: `learn-syllabus.json`. The exam objectives themselves are `curriculum/objectives/ab-410.md` (study guide S01); this is the training side.

## Course AB-410T00-A — Build intelligent applications

This course teaches learners how to design and build intelligent applications on the Microsoft Power Platform by using AI, copilots, and agents to solve real business problems. Learners explore how Power Apps, Power Automate, Power Pages, Copilot Studio, and AI-enabled capabilities work together to create agent-first, AI-enhanced solutions that improve productivity, decision-making, and user experience.

**Audience:** Individuals who want to learn how to build intelligent applications using the Microsoft Power Platform and are new to using AI, copilots, and agents in solution design; learners with a general understanding of business processes or app building who want to analyse requirements, select appropriate Power Platform components, and create AI-enhanced solutions, with awareness of governance and responsible use.

**Format:** 3-day instructor-led or self-paced; level Intermediate; roles Business Analyst, Functional Consultant, App Maker. Page updated 2026-07-30. https://learn.microsoft.com/en-us/training/courses/ab-410t00/

## Learning paths and modules

### Path 1. Get started with AI-first solutions in Microsoft Power Platform — 1h 31m, 3 modules

Establish the AI-first mindset and foundational skills you need to build intelligent Power Platform solutions. Learn to apply AI-first design patterns with Copilot, master prompt engineering to work effectively with generative AI, and use AI-powered Plans to translate business ideas into structured solution blueprints.  
https://learn.microsoft.com/en-us/training/paths/design-model-solutions-power-platform/ · updated 2026-05-21

#### 1.1 Design AI-powered business solutions with Microsoft Power Platform — 33m, 7 units

Learn to think like an AI-first architect: choose the right components, map processes to intelligent patterns, and know when to extend the platform for advanced scenarios.  
https://learn.microsoft.com/en-us/training/modules/design-ai-powered-solutions-power-platform/ · updated 2026-05-08 · maps to: AB410-1.1.1, AB410-1.1.2, AB410-1.1.3

*After completing this module, you will be able to:*
- Identify Power Platform components and describe how AI is embedded in both the maker experience and the end-user experience.
- Analyze business requirements and recommend appropriate Power Platform components for a given scenario.
- Map business processes and use cases to AI-first solution patterns using agents and automation.
- Identify built-in agents available in Power Platform and describe when extensibility options are needed.

*Prerequisites:*
- Ability to build basic canvas apps in Power Apps
- Familiarity with creating cloud flows in Power Automate
- Basic understanding of Microsoft Dataverse tables and data storage concepts

*Units:*
- Introduction
- Explore the AI-first Power Platform
- Recommend Power Platform components for business solutions
- Map business processes to AI-first solution patterns
- Explore extensibility options in Power Platform
- Knowledge check
- Summary

#### 1.2 Create effective prompts for generative AI training tools — 20m, 7 units

Learn how to craft engaging and informative prompts with Microsoft Copilot. This module will teach you the basic concepts of prompt engineering, the elements of an effective prompt, and best practices in prompting.  
https://learn.microsoft.com/en-us/training/modules/create-prompts-for-generative-ai-training-tools/ · updated 2026-03-16 · maps to: AB410-3.2.1

*By the end of this module, you'll be able to:*
- Critique the effectiveness of different prompt engineering techniques.
- Assess the clarity and relevance of instructions and context for prompt creation.
- Evaluate the benefits of creating content in various formats using generative AI.

*Units:*
- Introduction
- Prompt-based generative AI model
- What is prompt engineering?
- Identify the types of prompt instructions
- Create effective prompts
- Module assessment
- Summary

#### 1.3 Turn business ideas into Power Platform solutions with Plans — 38m, 8 units

Use plans in Power Apps to describe a business problem in natural language and let AI agents generate user requirements, a data model, and a technology proposal — then build the complete solution.  
https://learn.microsoft.com/en-us/training/modules/turn-business-ideas-power-platform-solutions-plans/ · updated 2026-05-08 · maps to: AB410-1.1.1, AB410-1.1.3, AB410-2.1.3

*By the end of this module, you'll be able to:*
- Describe how plans and its three AI agents transform a business problem into a solution design.
- Write an effective prompt and refine the generated requirements, data model, and technology proposal.
- Build solution components from a plan and manage them using the Objects view.
- Create a plan from an existing solution to document and improve it.

*Prerequisites:*
- Familiarity with Power Apps and the maker experience
- Basic understanding of Microsoft Dataverse tables and data storage concepts
- A Power Apps environment with a Dataverse database

*Units:*
- Introduction
- Explore plans and the AI agents that power them
- Create a plan and refine the requirements
- Review the data model and technology proposal
- Build and manage your solution
- Create a plan from an existing solution
- Knowledge check
- Summary

### Path 2. Build your data model with Microsoft Dataverse — 3h 22m, 3 modules

Build the data foundation that intelligent Power Platform solutions are built on. Learn how Dataverse tables and columns work, how to model your business data, apply security roles to control access, and encode business logic directly into the data layer with business rules.  
https://learn.microsoft.com/en-us/training/paths/build-data-model-microsoft-dataverse/ · updated 2026-06-12

#### 2.1 Create tables in Dataverse — 1h 27m, 12 units

Explore secure data management with Dataverse, learning how to create tables and import data into a cloud-based storage system.  
https://learn.microsoft.com/en-us/training/modules/get-started-with-powerapps-common-data-service/ · updated 2026-06-12 · maps to: AB410-1.2.1, AB410-1.2.2, AB410-1.2.3, AB410-1.2.5

*This module explains how to:*
- Create tables with Dataverse
- Import data into a Dataverse database
- Create table relationships in Dataverse
- Apply business rules and security roles to Dataverse tables
- Configure Dataverse auditing

*Prerequisites:*
- A Microsoft Power Apps account. If you don't already have a Power Apps account, select the Get started free link on powerapps.com.

*Units:*
- Introduction to Microsoft Dataverse
- Table characteristics
- Dual-write vs. virtual tables
- Exercise - Create a Microsoft Dataverse table
- Exercise - Import data into your Microsoft Dataverse database
- Table relationships
- Exercise - Create table relationships
- Dataverse logic and security
- Exercise - Create a custom table and import data
- Dataverse auditing
- Check your knowledge
- Summary

#### 2.2 Create and manage columns within a table in Dataverse — 1h 14m, 11 units

Learn how to create and manage table columns in Dataverse.  
https://learn.microsoft.com/en-us/training/modules/create-manage-fields-within-entity/ · updated 2026-06-11 · maps to: AB410-1.2.4, AB410-1.2.5, AB410-3.3.3

*This module explains:*
- What a column is in Dataverse.
- The types of columns that are available in Dataverse.
- How to add a column to a table.
- How to create and configure Prompt columns using AI-generated content.
- What a primary name column is in Dataverse.
- How to identify restrictions that are associated with columns.
- How to create an auto-numbering column.
- How to create an alternate key.

*Units:*
- Define columns in Microsoft Dataverse
- Column types in Microsoft Dataverse
- Add a column to a table
- Work with Prompt columns and row summaries
- Primary column
- Restrictions that apply to columns in a table
- Create an auto numbering column
- Create an alternate key
- Exercises
- Check your knowledge
- Summary

#### 2.3 Get started with security roles in Dataverse — 41m, 10 units

Learn how you can set permissions to limit access to an environment, or limit which users can view, edit, or delete data in an environment within Dataverse.  
https://learn.microsoft.com/en-us/training/modules/get-started-security-roles/ · updated 2026-06-11 · maps to: AB410-1.2.10, AB410-2.1.5, AB410-2.1.6

*In this module, you will:*
- Learn about security roles and apply them to users in an environment.
- Learn how to add users to an environment.
- Understand security concepts in Dataverse.
- Identify default security roles.
- Create a custom role.
- Create a custom security role and assign it to entities and users.
- Learn how to configure Dataverse teams for security.
- Learn how to configure Dataverse group teams for security.

*Units:*
- Introduction to environment roles
- Understand environment roles
- Adding or disabling an environment user
- Understand user security roles and security role defaults
- Exercise - Create a custom role
- Check the roles that a user belongs to
- Configure Dataverse teams for security
- Configure Dataverse group teams for security
- Check your knowledge
- Summary

### Path 3. Build intelligent apps and portals with Microsoft Power Apps — 7h 06m, 7 modules

Build AI-ready apps and portals that surface intelligent, Dataverse-backed data. Create and customize canvas apps, configure model-driven apps for customer engagement, and build data-connected Power Pages portals for any audience.  
https://learn.microsoft.com/en-us/training/paths/build-apps-portals-power-apps/ · updated 2026-05-21

#### 3.1 Get started with Power Apps canvas apps — 1h 12m, 9 units

Learn how Power Apps can make your business more efficient and streamline your processes.  
https://learn.microsoft.com/en-us/training/modules/get-started-with-powerapps/ · updated 2026-06-03 · maps to: AB410-2.2.1

*This module explains how to:*
- Describe what canvas apps are and how they differ from other Power Apps app types.
- Navigate the Power Apps maker portal and identify key canvas app creation options.
- Connect a canvas app to a data source and use gallery and form controls to display and edit data.
- Build a canvas app from an Excel workbook using both the template path and a blank canvas.
- Use Copilot to generate a canvas app from an uploaded file.

*Units:*
- Introduction to Power Apps
- Start Power Apps
- Exercise - Create your first app in Power Apps
- Power Apps data sources
- Exercise - Create an app from Excel using Copilot
- Use Power Apps with Power Automate and Power BI
- Designing a Power Apps app
- Check your knowledge
- Summary

#### 3.2 Customize a canvas app in Power Apps — 1h 12m, 9 units

This module takes the learner to the next level in app development by teaching how to customize the app by adding controls, images, and logic.  
https://learn.microsoft.com/en-us/training/modules/customize-apps-in-powerapps/ · updated 2026-09-18 · maps to: AB410-2.2.4, AB410-2.2.5, AB410-2.2.6

*In this module, you will:*
- Customize gallery and form controls to display and edit data the way your users need it.
- Build screen navigation using Power Fx Navigate() and Back() formulas.
- Apply Power Fx formulas to control appearance, filter data, and handle errors.
- Add AI capabilities to your app using Microsoft Copilot controls.
- Create named formulas, user-defined functions, and reusable component libraries.

*Units:*
- Introduction
- Improve your app by making basic customizations
- Explore controls and screens in canvas apps
- Apply Power Fx formulas to canvas app controls
- Work with Power Fx formulas in canvas apps
- Create screen navigation in a canvas app
- Build reusable components and formulas in canvas apps
- Check your knowledge
- Summary

#### 3.3 Publish, share, and maintain a canvas app — 27m, 7 units

You've built your first app. Now, it's time to publish, share it with others, and maintain subsequent versions of the app.  
https://learn.microsoft.com/en-us/training/modules/publish-share-maintain-app/ · updated 2026-06-03 · maps to: AB410-2.2.2, AB410-2.2.7

*This module explains how to:*
- Introduce the primary app build.
- Launch future iterations of the app.
- Manage versions and publish your app.

*Units:*
- Introduction
- Publish your app
- Share your app
- Maintain your app
- Application lifecycle management
- Check your knowledge
- Summary

#### 3.4 Get started with model-driven apps in Power Apps — 1h 29m, 13 units

Model-driven app design is an approach that focuses on quickly adding components to your apps. These components include dashboards, forms, views, and charts. With little to no code, you can make apps that are simple or complex. Unlike in canvas app development, where the designer has total control over the app layout, much of the layout in model-driven apps is determined by the components you add. In other words, the emphasis is more on quickly viewing your business data and making decisions than on intricate app design.  
https://learn.microsoft.com/en-us/training/modules/get-started-with-model-driven-apps-in-powerapps/ · updated 2026-06-12 · maps to: AB410-2.1.1, AB410-2.1.2, AB410-2.1.4

*This module explains these concepts:*
- Model-driven app design
- Creating a model-driven app

*Units:*
- Introducing model-driven apps
- Components of model-driven apps
- Design model-driven apps
- Exercise - Create a model-driven app
- Build pages with generative AI
- Exercise - Control security when sharing model-driven apps
- Incorporate business process flows
- Add logic to commands with Power Fx
- Exercise - Create a model-driven app
- Enable Copilot chat for app users
- Add agents to your model-driven app
- Module assessment
- Summary

#### 3.5 Configure forms, charts, and dashboards in model-driven apps — 1h 09m, 9 units

Learn how to configure forms, charts, and dashboards.  
https://learn.microsoft.com/en-us/training/modules/configure-model-driven-apps-customer-engagement-apps/ · updated 2026-06-11 · maps to: AB410-1.2.8, AB410-1.2.9, AB410-2.1.1, AB410-2.1.2, AB410-2.1.7

*This module explains how to:*
- Use form elements and controls
- Configure forms
- Use specialized form components
- Use editable grids
- Identify views and use public views
- Learn how to configure charts
- Learn how to configure dashboards

*Units:*
- Forms overview
- Form elements
- Configure multiple forms
- Use specialized form components
- Extend model-driven apps with custom pages
- Configure views overview
- Configure charts overview
- Module assessment
- Summary

#### 3.6 Core components of Power Pages — 48m, 7 units

Use Power Pages to create modern data-driven external-facing business websites. Extend Dataverse data to external and internal audiences such as customers, partners, and employees. Empower anyone inside or outside your organization to interact with the business by using Power Pages sites.  
https://learn.microsoft.com/en-us/training/modules/power-pages-intro/ · updated 2026-06-12 · maps to: AB410-audience:Power Pages

*In this module, you will:*
- Identify the capabilities of Power Pages.
- Review the Power Pages site provisioning process.
- Learn about Power Pages core components and tools.
- Discover how to control user access to site content and Dataverse data.

*Units:*
- Introduction to Power Pages
- Get started with Power Pages
- Core tools and components of Power Pages
- Overview of Power Pages security
- Overview of Power Pages extensibility
- Check your knowledge
- Summary

#### 3.7 Explore Power Pages design studio — 49m, 9 units

Power Pages makers spend most of their time building sites in Power Pages design studio. It's important that makers have a full understanding of the capabilities and also the limitations of the design studio. This module focuses on understanding and using the design studio to create and customize sites — including adding and configuring pages, components, CSS, and forms, securing the site with the Security workspace, and using Copilot and AI-powered agents to accelerate site development and enhance the visitor experience.  
https://learn.microsoft.com/en-us/training/modules/power-pages-studio/ · updated 2026-06-12 · maps to: AB410-audience:Power Pages

*In this module, you'll:*
- Learn how to launch and run Power Pages design studio.
- Identify the various workspaces, commands, and tools.
- Discover how to add new pages, how to place them in the site structure, and how to style the site appearance.
- Learn about the process of configuring specific layouts and adding and modifying different types of content to a page.
- Identify where to add or modify custom HTML, CSS, or code to the webpages by using the design studio.
- Configure site security using the Security workspace.
- Add AI-powered features to your site, including Copilot and agents.

*Units:*
- Introduction to Power Pages design studio
- Work with pages
- Page components
- Site styling and templates
- Secure your Power Pages site
- Add an AI-powered agent to your site
- Exercise - Edit pages
- Knowledge check
- Summary

### Path 4. Automate and extend your solutions with AI in Microsoft Power Automate — 3h 27m, 4 modules

Wire your Power Platform solutions with intelligent automation and generative AI capabilities. Create event-driven cloud flows, connect automation directly to your Dataverse data model, build approval flows that route decisions to the right people — then extend your solutions further by generating natural language responses from your own business data with AI Builder grounded prompts.  
https://learn.microsoft.com/en-us/training/paths/automate-business-processes-power-automate/ · updated 2026-05-21

#### 4.1 Get started with Power Automate — 1h 02m, 9 units

Learn how to create simple flows to make your life easier.  
https://learn.microsoft.com/en-us/training/modules/get-started-flows/ · updated 2026-06-12 · maps to: AB410-3.1.1, AB410-3.1.2, AB410-3.1.4, AB410-3.1.5, AB410-3.1.6

*In this module, you will:*
- Create a flow that automatically saves email attachments.
- Learn how to create a button flow to send yourself a reminder.

*Prerequisites:*
- Signed up for Power Automate.
- Have OneDrive for work or school.

*Units:*
- Introducing Power Automate
- Create a cloud flow
- Exercise - Create recurring flows
- Exercise - Monitor incoming emails
- Exercise - Share flows
- Troubleshoot flows
- Convert a flow to an agent flow
- Module assessment
- Summary

#### 4.2 Use Dataverse triggers and actions in Power Automate — 1h 07m, 7 units

Extend Dataverse usability by integrating with Power Automate to reduce or eliminate repetitive business processes.  
https://learn.microsoft.com/en-us/training/modules/use-dataverse-triggers-actions/ · updated 2026-06-12 · maps to: AB410-3.1.1, AB410-3.1.4

*This module explains the following concepts:*
- Dataverse triggers and actions in Power Automate.
- Other available inputs.

*Units:*
- Introduction
- Dataverse triggers
- Query data
- Create, update, delete, and relate actions
- Exercise - Create a cloud flow with a Dataverse connector
- Check your knowledge
- Summary

#### 4.3 Build approval flows with Power Automate — 44m, 6 units

Learn how to build approval flows with Power Automate.  
https://learn.microsoft.com/en-us/training/modules/build-approval-flows/ · updated 2026-03-03 · maps to: AB410-3.1.3

*This module explains how to:*
- Create and process approval requests.
- Build a flow that runs at recurring time intervals.
- Create a business process flow with conditions.

*Units:*
- Introduction to approval flows
- Build an approval request
- Create a business process flow
- Create a business process flow with conditions
- Check your knowledge
- Summary

#### 4.4 Create AI Builder prompts using your own Dataverse data — 34m, 7 units

Learn how to create and use grounded prompts in AI Builder.  
https://learn.microsoft.com/en-us/training/modules/ai-builder-grounded-prompts/ · updated 2026-03-04 · maps to: AB410-3.2.1, AB410-3.2.2, AB410-3.2.3, AB410-3.2.4, AB410-3.2.6

*This module explains how to:*
- Create and use AI Builder grounded prompts in Copilot Studio, Power Apps, and Power Automate.
- Use grounded prompts to generate natural language responses based on your data and business logic.
- Test and publish your prompts and then give feedback.

*Prerequisites:*
- An environment that’s on the list of available regions (/ai-builder/availability-region)
- At least one of the following licenses: Power Apps, Power Automate, or Copilot Studio
- A Microsoft Dataverse database that's installed on the environment
- A created or accessible Dataverse table with data
- An AI Builder add-on (not required if you have a Copilot Studio license)

*Units:*
- Introduction
- Exercise - Create a grounded prompt in AI Builder
- Use a grounded prompt in a cloud flow
- Use a grounded prompt in a canvas app
- Use a grounded prompt in a custom copilot
- Check your knowledge
- Summary

**Total self-paced content: 15h 26m across 17 modules / 147 units.**

## Objective coverage by the official paths

Covered: 36 of 48. **Not covered by any official-path module:**

- `AB410-1.1.4` — Recommend environment types
- `AB410-1.1.5` — Apply a Microsoft Power Platform solution and ALM strategy
- `AB410-1.2.6` — Configure prompt columns
- `AB410-1.2.7` — Configure row summaries
- `AB410-2.2.3` — Automate business processes from canvas apps
- `AB410-2.2.8` — Create a Copilot Studio agent from a canvas app
- `AB410-3.2.5` — Customize prompt settings, including models
- `AB410-3.2.7` — Consume an AI model in apps
- `AB410-3.2.8` — Consume an AI model in cloud flows
- `AB410-3.3.1` — Configure business rules
- `AB410-3.3.2` — Configure business process flows
- `AB410-3.3.4` — Evaluate use cases for business logic

Curated gap-fillers are in `README.md` in this folder; raw catalog search results are in the JSON under `supplementary_modules_for_gaps`.
