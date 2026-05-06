# About Page Blueprint

This document defines the structure of the About page.

It focuses on layout, section hierarchy, and content responsibilities.

## Goal
- Give a fuller introduction than the landing page
- Explain who you are, how you work, and what kind of work you do
- Support trust without turning the page into a resume dump
- Reuse content that can also support the landing page identity block

## About Page Order
1. Intro block
2. Extended summary
3. Strengths / focus areas
4. How I work
5. Selected experience highlights
6. Credentials
7. CTA block
8. Footer

## 1. Intro Block
Purpose:
- Continue from the landing page identity block
- Confirm who you are in a more complete way

Required content:
- Portrait
- Name
- Professional title
- 2 to 4 sentence introduction

Recommended content direction using current repo material:
- Name: `Muhammad Usman`
- Title: `Software Engineer working across full-stack, data, and AI systems`
- Summary should combine:
  - years of experience
  - global delivery context
  - technical range
  - practical orientation

Rule:
- This should feel personal and professional, not like a giant hero section.

## 2. Extended Summary
Purpose:
- Give a deeper written introduction
- Clarify the kind of problems you solve

Content should cover:
- Your technical range
- What kind of systems you work on
- What kind of teams or environments you have worked in
- How you think about software delivery

Recommended content sources:
- `src/content/misc/about.json`
- selected points from `src/content/experience/all.md`

Rule:
- Write in clear paragraphs, not bullet overload.
- Use this section to explain direction, not to list every achievement.

## 3. Strengths / Focus Areas
Purpose:
- Help visitors scan your strongest areas quickly

Recommended items:
- Full-stack engineering
- Data platforms and ETL systems
- Cloud and distributed systems
- AI-enabled product work
- Delivery reliability and technical execution

Recommended layout:
- 4 to 6 compact items
- each item has:
  - title
  - one-sentence description

Rule:
- Keep this section scannable.
- This is a strengths map, not a full skills matrix.

## 4. How I Work
Purpose:
- Show working style, not just technical stack

Recommended topics:
- clarity in problem framing
- practical execution
- balancing speed and reliability
- collaboration and communication
- documentation and mentoring

Recommended layout:
- short intro paragraph
- 3 to 5 working principles

Example principle pattern:
- `Start with the problem`
- `Build for clarity and maintainability`
- `Prefer measurable outcomes over technical theater`
- `Communicate tradeoffs early`

Rule:
- This section should feel human and operational.

## 5. Selected Experience Highlights
Purpose:
- Give proof without duplicating a full experience timeline page

Recommended layout:
- 3 to 5 highlights
- each highlight should include:
  - short title
  - one-sentence explanation

Suggested source material from current repo:
- built data scanners and governance tooling across 40+ technologies
- delivered ETL and orchestration systems
- improved code quality, reliability, and cloud migration outcomes
- worked on PCI-compliant payment and fintech systems
- mentored teams and improved delivery processes

Rule:
- Use highlights, not a full chronological resume.
- If a full experience page exists later, link out from here instead of expanding this section endlessly.

## 6. Credentials
Purpose:
- Give visitors an easy trust checkpoint

Should include:
- LinkedIn
- GitHub
- Resume
- Email
- WhatsApp

Optional:
- client/industry references if added later

Rule:
- This section should be utility-first and easy to access.

## 7. CTA Block
Purpose:
- Convert trust into action

Primary CTA:
- `Get a Quote`

Secondary CTA:
- `Book a Call`

Trust CTA:
- `View Projects`

Supporting copy:
- `If you already know what you need, send a concrete ask. If not, book a short call and we can clarify scope together.`

Rule:
- Keep the About page conversion-focused at the bottom.

## 8. Footer
Purpose:
- Keep navigation and engagement consistent across the site

Should match the site-wide footer structure defined in `docs/pages/LANDING_PAGE.md`.

## Content Balance Rules
- Keep the intro and summary readable
- Do not turn the page into a long CV
- Use short sections with clear headings
- Let deeper project pages carry the delivery proof
- Let the writings page carry thought leadership proof

## Recommended Content Sources
- `src/content/misc/about.json`
- `src/content/misc/hero.json`
- `src/content/misc/contact-data.json`
- `src/content/experience/all.md`

## Implementation Notes
- The landing page identity block and About page intro should share the same source of truth where possible.
- Credentials should be pulled from a reusable content source, not duplicated in component files.
- Strengths, principles, and highlights should be configurable content blocks.

## Open Follow-Ups
- Define `/about` content model
- Define `/projects` detail page structure
- Define quote wizard structure
