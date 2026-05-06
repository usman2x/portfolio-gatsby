# Projects and Case Studies Blueprint

This document defines the structure for the projects archive and individual project detail pages.

It includes page hierarchy, content structure, and SEO-aware URL guidance.

## Goal

- Turn project previews into credible case studies
- Make project pages useful for both users and search engines
- Keep homepage project cards short while giving deeper proof on internal pages

## Recommended URL Structure

Archive page:

- `/projects/`

Detail pages:

- `/projects/<slug>/`

Examples:

- `/projects/data-landscape-scanner/`
- `/projects/unified-data-platform/`
- `/projects/error-reprocessing-tool/`
- `/projects/core-payment-services-platform/`

Rule:

- Use one stable canonical slug per project.
- Do not change slugs unless there is a strong reason.

## Slug Rules

- Use lowercase
- Use hyphens, not spaces
- Keep them human-readable
- Prefer descriptive slugs over abbreviations unless the abbreviation is the common name
- Avoid dates in project slugs
- Avoid version numbers in public URLs unless required

Good:

- `data-landscape-scanner`
- `unified-data-platform`
- `error-reprocessing-tool`

Avoid:

- `project-1`
- `udp-v2-final`
- `my-work-april-2026`

## Archive Page: `/projects/`

Purpose:

- Show the full set of project previews
- Help users scan by relevance
- Route users into project detail pages

Required content:

- Page title
- Project list
- Optional filtering by category or tag

Recommended title:

- `Projects`

Recommended meta description direction:

- `Selected software engineering, data platform, cloud, and AI-related projects by Muhammad Usman.`

Project preview content:

- Project preview image when available
- Project title
- One-sentence summary
- Role or contribution
- Tags
- Link to detail page

Recommended optional filters:

- Data Platforms
- Backend Systems
- Cloud / DevOps
- Payments / Fintech
- Frontend / Product

Rule:

- Keep the archive intro to one visible heading.
- Archive cards should summarize.
- Detail pages should carry the full proof.

## Detail Page: `/projects/<slug>/`

Purpose:

- Present one project as a case study
- Show context, contribution, and outcome clearly

Recommended page order:

1. Case study header
2. Project summary
3. Context / problem
4. Role and responsibilities
5. What I worked on
6. Stack / tools
7. Outcomes / impact
8. Related projects
9. CTA block
10. Footer

## 1. Case Study Header

Required content:

- Project title
- Short descriptor
- Optional project category
- Project image when available

Example:

- `Data Landscape Scanner`
- `Data discovery and governance across 40+ technologies`

SEO rule:

- Title tag should start with the project name.

Recommended title tag pattern:

- `<Project Name> | Project Case Study`

## 2. Project Summary

Purpose:

- Give the visitor the project in plain language before details

Should answer:

- What was the project?
- What kind of system was it?
- Why did it matter?

Rule:

- Keep this short and readable.

## 3. Context / Problem

Purpose:

- Explain the business or technical challenge

Examples:

- data discovery across multiple technologies
- ETL orchestration complexity
- migration error observability
- payment workflow reliability

Rule:

- Frame the project around a real problem, not only the stack.

## 4. Role and Responsibilities

Purpose:

- Clarify your contribution

Should answer:

- What was your role?
- What did you own?
- What decisions or work areas were yours?

Rule:

- Be precise about your contribution.

## 5. What I Worked On

Purpose:

- Show the technical and delivery details

Recommended content:

- 3 to 6 specific contribution blocks
- each block can include:
  - challenge
  - action
  - result

Rule:

- Focus on meaningful contribution, not task listing.

## 6. Stack / Tools

Purpose:

- Give quick technical context

Suggested layout:

- compact list of technologies

Examples from current repo content:

- Java
- Spring Boot
- React
- Apache Kafka
- Snowflake
- Apache Airflow
- AWS

Rule:

- Keep stack compact and scannable.

## 7. Outcomes / Impact

Purpose:

- Show why the project matters

Examples of outcome framing:

- improved discovery coverage
- reduced migration risk
- strengthened security posture
- improved delivery reliability
- reduced manual effort

Rule:

- Prefer measurable outcomes when available.
- If exact numbers are unavailable, use clear qualitative impact.

## 8. Related Projects

Purpose:

- Keep users exploring adjacent work

Should include:

- 2 to 3 related case studies

Rule:

- Related projects should be chosen by domain, stack, or type of problem.

## 9. CTA Block

Purpose:

- Convert proof into action

Primary CTA:

- `Get a Quote`

Secondary CTA:

- `Book a Call`

Trust CTA:

- `View Credentials`

Supporting copy:

- `If you need similar engineering help, send a concrete ask or book a short call.`

## SEO Requirements

### Canonical URL

- Every project detail page should have a canonical URL matching `/projects/<slug>/`

### Meta Title

Recommended pattern:

- `<Project Name> | Project Case Study`

Alternative:

- `<Project Name> | Muhammad Usman`

### Meta Description

Should include:

- project name
- type of work
- your contribution or domain

### H1

- H1 should match or closely mirror the project title

### Internal Linking

Project pages should link to:

- `/projects/`
- relevant writings if related
- CTA destination

Homepage and archive pages should link into:

- `/projects/<slug>/`

### Slug Consistency

- Slug must be stored in content data, not generated ad hoc in components.

## Recommended Content Model

Project preview content:

- JSON is acceptable

Case study detail content:

- Markdown is recommended if you want flexible long-form structure

Suggested future file model:

- `src/content/misc/projects.json` for preview metadata
- `src/content/projects/<slug>.md` for case study pages

Recommended frontmatter for case study Markdown:

- `title`
- `slug`
- `description`
- `category`
- `tags`
- `cover`
- `featured`

## Candidate Starting Case Studies from Current Repo Content

- Data Landscape Scanner
- Unified Data Platform
- Error Reprocessing Tool
- Core Payment Services Platform

These are the strongest starting candidates because they show:

- depth
- systems thinking
- delivery responsibility
- technical credibility

## What to Avoid

- External-only project links as the long-term main destination
- Project pages that only list technologies
- Slugs generated from display text at runtime
- Very long archive cards
- Repeating the same generic CTA on every block without hierarchy
