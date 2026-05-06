# Landing Page Blueprint

This document defines the structure of the homepage.

It translates `docs/structure/STRUCTURE.md` into a concrete landing page plan.

## Goal

- Introduce you clearly
- Show proof through selected work and writing
- Give users a clear next action
- Keep the page quiet, minimal, and content-led

## Landing Page Order

1. Header
2. Identity block
3. Selected projects
4. Latest writings
5. CTA block
6. Footer

## 1. Header

Purpose:

- Help users orient quickly
- Keep top navigation simple

Recommended links:

- About
- Projects
- Writings
- Get a Quote
- Book a Call

Rule:

- Keep the header visually quiet.
- Use a subtle primary-color underline on nav hover and active states.
- Avoid adding too many links.

## 2. Identity Block

Purpose:

- Establish who you are in one screen
- Give a quick reason to trust the site
- Create a path to the full About page

Required content:

- Portrait
- Name
- Professional title
- 1 to 2 line introduction
- Link to `/about`

Recommended framing:

- The picture, name, and title should read as one unit
- That unit should link to `/about`

Content intent:

- This is not a large marketing hero
- It should feel like a calm personal introduction

Suggested content pattern:

- Name
- Title
- Short value statement
- Small supporting line about blog + work

Example structure:

- `Muhammad Usman`
- `Software Engineer | Full-Stack, Data, and AI Delivery`
- `I build reliable software systems and write about engineering, AI, and product execution.`
- `Read more about me`

Primary action inside this section:

- `Read about me`

Secondary action:

- `Book a call`

Rule:

- Keep this block compact.
- Let typography and spacing do the work.

## 3. Selected Projects

Purpose:

- Show real work without making the homepage feel heavy
- Move users toward deeper case studies

Section title:

- `Selected projects`

Required content:

- 3 to 6 featured projects
- Short description for each
- Link from each project to a detailed project page or case study
- Project preview image when available

Each project preview should show:

- Project name
- One-sentence context
- Your role or contribution
- Optional stack or outcome

Project detail pages should eventually include:

- Context
- Problem
- Your role
- What you built or changed
- Stack
- Result

CTA in this section:

- `View all projects`

Rule:

- Homepage cards are previews only.
- Keep the section intro to one visible heading.
- Do not place long project descriptions on the landing page.
- Keep selected-project previews visually light with consistent image sizing and minimal card chrome.
- Keep the project CTA inline at the end of supporting text as `Read more...`, not as a detached control.

## 4. Latest Writings

Purpose:

- Reinforce expertise
- Make the site clearly writing-led
- Create a path into the blog archive

Section title:

- `Latest writings`

Required content:

- Latest 3 to 6 articles
- Tag visibility
- Link to `/blog`

Each article preview should show:

- Title
- Date
- Optional short summary
- Tags
- Link to article detail page

Archive page requirements:

- Pagination
- Tag filters

Article detail page requirements:

- Related writings
- Previous/next post
- Share actions

CTA in this section:

- `See all writings`

Rule:

- Writings should feel equal to or stronger than projects in importance.
- Keep the section intro to one visible heading.

## 5. CTA Block

Purpose:

- Convert interest into action
- Replace vague contact behavior with structured options

Primary CTA:

- `Get a quote`

Secondary CTA:

- `Book a call`

Trust CTA:

- `See credentials`

Credential links:

- LinkedIn
- GitHub
- WhatsApp
- Email

Preferred quote flow:

1. What do you need help with?
2. Project type
3. Timeline
4. Budget or engagement range
5. Contact details

Rule:

- Do not use a generic `Contact Me` form as the main action.
- The user should know what each action is for.
- Keep this section intro compact and avoid stacked eyebrow/title/description treatments.

Suggested CTA copy:

- `Tell me what you need`
- `Book a call`
- `View credentials`

## 6. Footer

Purpose:

- Re-engage users at the bottom of the page
- Keep important routes and trust links available

Footer should include:

- Short CTA
- Navigation
- Credentials/social links
- Email or booking link

Optional:

- One featured project
- One featured article

Rule:

- Footer should feel useful, not decorative.
- Every page should end with a meaningful next step.

## Page-Level Hierarchy

- Identity introduces you
- Projects prove capability
- Writings prove thinking
- CTA converts intent
- Footer catches late-stage visitors

## What the Landing Page Should Not Try to Do

- Tell your full life story
- Show every project
- Replace detailed case studies
- Replace the full writings archive
- Use a long, generic contact section as the only conversion path

## Build Priority

Recommended implementation order:

1. Identity block
2. Selected projects with detail-page links
3. Latest writings section
4. CTA block with credentials
5. Footer

## Open Follow-Ups

- Create `/about` page structure
- Create project/case-study detail template
- Create writings archive behavior: pagination + tags
- Create quote wizard flow

---

# Content-Ready Homepage Spec

This section turns the landing page blueprint into concrete homepage content using the material currently in the repo.

## Recommended Homepage Order

1. Header
2. Identity block
3. Selected projects
4. Latest writings
5. CTA block
6. Footer

## 1. Header

Recommended nav:

- About
- Projects
- Writings
- Get a Quote
- Book a Call

Right-side utility links may include:

- LinkedIn
- GitHub

Rule:

- Keep the header small and quiet.
- Use only one high-visibility action in the header.

Recommended header CTA:

- `Book a Call`

## 2. Identity Block

This should replace the current oversized hero pattern with a compact personal entry point.

Required content:

- Portrait
- Name
- Professional title
- Short introduction
- Link to `/about`

Recommended content draft:

- Name: `Muhammad Usman`
- Title: `Software Engineer working across full-stack, data, and AI systems`
- Intro line 1: `I build reliable software products and write about engineering, AI, and execution.`
- Intro line 2: `8+ years of experience delivering systems for global teams, including Fortune 100 environments.`

Primary action:

- `Read About Me`

Secondary action:

- `Book a Call`

Optional supporting line:

- `Latest writing, selected work, and ways to start a conversation are below.`

Linking rule:

- The name + portrait block should link to `/about`.

## 3. Selected Projects

Recommended section title:

- `Projects I’ve worked on`

Recommended section subtitle:

- `Selected work across data platforms, cloud systems, and product engineering.`

Recommended featured homepage projects:

1. `Data Landscape Scanner`
2. `Unified Data Platform (UDP)`
3. `Error Reprocessing Tool`
4. `Core Payment Services Platform`

Why these four:

- They show stronger technical depth than the website projects.
- Together they cover data systems, platform engineering, observability, and fintech.

Recommended homepage card structure:

- Project title
- One-sentence summary
- Short role line
- Link to detailed case study

Recommended homepage summaries:

### Data Landscape Scanner

- Summary: `A data discovery and governance system supporting 40+ technologies for cataloguing, lineage, and classification.`
- Role line: `Worked on connectors, security hardening, tagging, and scanner optimization.`

### Unified Data Platform (UDP)

- Summary: `A platform for designing and deploying big data pipelines without exposing users to infrastructure complexity.`
- Role line: `Built backend features, Airflow integrations, quality gates, and automated testing coverage.`

### Error Reprocessing Tool

- Summary: `A system for monitoring and recovering data migration failures in near real time.`
- Role line: `Helped improve observability, recovery flow, and operational reliability during migration work.`

### Core Payment Services Platform

- Summary: `A full digital payments platform covering card activation, transactions, fee handling, and notifications.`
- Role line: `Worked end-to-end across backend, frontend integration, deployment, and production support.`

Section CTA:

- `View All Projects`

Important structural note:

- Homepage cards should eventually link to internal project detail pages, not only external profile links.
- Each project detail page should become a case study.

## 4. Latest Writings

Recommended section title:

- `Latest writings`

Recommended section subtitle:

- `Notes on AI, engineering, and the human side of doing meaningful work.`

Current articles available in repo:

1. `The Digital Paradigm and AI: A Perspective`
2. `Sometimes the Anxiety You Feel Isn’t About the Moment: It’s Your Younger Self Asking to Be Seen, Heard, and Healed`

Recommended homepage article cards:

### The Digital Paradigm and AI: A Perspective

- Summary: `A perspective on AI as productivity acceleration, changing skill models, and the future of work.`
- Tags: `AI`, `Digital Paradigm`, `Technology`, `Productivity`

### Sometimes the Anxiety You Feel Isn’t About the Moment...

- Summary: `A reflective article on hidden anxiety, subconscious triggers, and mindful self-observation.`
- Tags: `anxiety`, `healing`, `mental-health`

Section CTA:

- `See All Writings`

Structural note:

- Since only two posts exist right now, show both.
- When more posts are added, keep homepage display limited to the latest 3 to 6.

Archive requirements for `/blog`:

- Pagination
- Tag filters

Detail page requirements:

- Related writings
- Previous and next post
- Share actions

## 5. CTA Block

This section should replace a generic contact-first approach with clearer action paths.

Recommended section title:

- `Start a conversation with a concrete ask`

Recommended supporting copy:

- `If you need help with product engineering, platform work, data systems, or AI integration, tell me what you are trying to build and where you are blocked.`

Primary CTA:

- `Get a Quote`

Secondary CTA:

- `Book a Call`

Trust CTA:

- `See Credentials`

Recommended credential links:

- LinkedIn
- GitHub
- WhatsApp
- Email

Suggested behavior:

### Get a Quote

This should eventually lead to a wizard-based flow:

1. What do you need help with?
2. Project type
3. Timeline
4. Budget or engagement range
5. Contact details

### Book a Call

- Link to calendar if added later
- If no calendar exists, temporarily use WhatsApp or direct email scheduling

### See Credentials

- Show:
  - LinkedIn
  - GitHub
  - Resume
  - Email
  - WhatsApp

Recommended CTA labels:

- `Get a Quote`
- `Book a Call`
- `View Credentials`
- `Email Me`
- `Connect on WhatsApp`

## 6. Footer

Recommended footer structure:

### Column 1: Short identity

- Name
- One-line positioning

Suggested line:

- `Software engineer writing and building across full-stack, data, and AI systems.`

### Column 2: Navigate

- About
- Projects
- Writings
- Get a Quote

### Column 3: Connect

- LinkedIn
- GitHub
- Email
- WhatsApp
- Book a Call

### Column 4: Optional engagement slot

Choose one:

- Featured article
- Featured project
- Short CTA

Recommended footer CTA:

- `Have a project in mind? Start with a quote or book a short call.`

Rule:

- Footer should appear on every page with the same structure.

## Recommended Homepage CTA Hierarchy

- Primary: `Get a Quote`
- Secondary: `Book a Call`
- Trust: `View Credentials`
- Utility: `Email` and `WhatsApp`

## Implementation Notes

- Keep the landing page summary-driven.
- Do not place the full bio on the homepage.
- Do not list all projects on the homepage.
- Do not turn latest writings into a full archive block.
- Build internal destinations next:
  - `/about`
  - project detail pages
  - improved `/blog`
  - quote wizard flow
