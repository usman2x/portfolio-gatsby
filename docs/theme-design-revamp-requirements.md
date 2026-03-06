# Theme and Design Revamp Requirements

## Document Purpose
This document defines the requirements for refactoring the existing styling system of the current blog + portfolio website into a scalable Tailwind CSS design system.

The website already exists and is functional.

This effort is a styling-system refactor, not a component/layout redesign.

## Project Context
- Stack: Gatsby + React
- Existing styling: global CSS + utility classes
- Content type: blog + portfolio (content-heavy)
- Primary objective: make theming and long-form readability first-class, while keeping component code stable

## Scope and Non-Goals
### In Scope
- Introduce multi-theme architecture with `data-theme`
- Define theme variables and semantic tokens
- Integrate tokens into Tailwind config
- Improve long-form typography system
- Add reusable component classes driven by semantic tokens
- Add theme switch helper function
- Show how to add future themes without component edits

### Out of Scope
- Redesigning page layout structure
- Rewriting existing React component hierarchy
- Replacing Gatsby with another framework
- Business/content copy changes

## Functional Requirements

### 1) Theme Architecture
- The site must support multiple themes using CSS variables.
- Theme selection must be driven by `data-theme` on `<html>`.
- Example contract:
  - `<html data-theme="sunset">`
- Themes must override variable values only.
- Components must consume semantic tokens, not hardcoded colors.

### 2) Color System Layers
Implement a two-layer token model:
1. Theme Values (raw palette)
2. Semantic Tokens (consumed by UI)

### 3) Theme Values (Sunset)
Define and support this base palette:
- Primary: `#E97A3C`
- Secondary: `#F2B38A`
- Accent: `#6F8798`
- Background main: `#F7F3EE`
- Background card: `#FFFFFF`
- Text primary: `#2F2F2F`
- Text secondary: `#6B6B6B`
- Border subtle: `#C9C3BD`

### 4) Base Theme Variables
Global variables required:
- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-bg-main`
- `--color-bg-card`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-border`

### 5) Semantic Design Tokens
Define semantic tokens that reference base theme values:
- `--brand-primary`
- `--brand-secondary`
- `--brand-accent`
- `--bg-page`
- `--bg-card`
- `--bg-muted`
- `--text-main`
- `--text-muted`
- `--border-default`

### 6) Tailwind Configuration
Update/create `tailwind.config.js` to expose semantic colors via CSS variables.

Required color namespaces:
- `brand.primary`
- `brand.secondary`
- `brand.accent`
- `background.page`
- `background.card`
- `text.main`
- `text.muted`
- `border.default`

Each Tailwind color value must map to semantic CSS variables.

### 7) Gradient Utility
Provide reusable sunset gradient utility/config:
- `#6F8798 → #F2B38A → #E97A3C`

Must be available as:
- either Tailwind background image token, or
- dedicated utility class in stylesheet.

### 8) Typography System (Blog First)
Global readability standards:
- Base font size: `18px`
- Base line height: `1.7`
- Max reading width: `680px`
- Target line length: `60–75` characters

Font pairing:
- Body: `Inter`
- Headings: `Merriweather`

Heading elements (`h1`–`h4`) must use heading font.
Body copy must use body font.

### 9) Tailwind Typography Plugin
- Install and configure `@tailwindcss/typography`.
- Long-form article container standard:
  - `prose prose-lg max-w-[680px] mx-auto`

Customize prose styling to theme:
- heading colors
- link colors
- blockquote accent border
- paragraph spacing

### 10) Base Typography via Tailwind Layers
Use `@layer base` to enforce:
- `body` font family, `18px`, `1.7`
- `h1`–`h4` heading font family

### 11) Component Tokens via Tailwind Layers
Use `@layer components` to create reusable classes:
- `.btn-primary`
- `.card`
- `.section`
- `.tag`
- `.nav-link`

Rules:
- component classes must use semantic tokens only
- no hardcoded raw palette inside component classes

### 12) Responsive Blog Content Layout
Article layout requirements:
- max width `680px`
- centered content
- clear vertical rhythm
- clear heading hierarchy

### 13) Theme Switching Helper
Add JS helper for runtime theme switching:
- `setTheme("sunset")`
- `setTheme("dark")`

Behavior:
- update `document.documentElement.dataset.theme`

### 14) Future Themes
Demonstrate a dark theme by overriding variables under:
- `html[data-theme="dark"]`

No component modifications should be required to support new themes.

## Implementation Deliverables
Required outputs:
1. `tailwind.config.js`
2. `global.css` (or equivalent) with theme vars + semantic tokens
3. typography/prose configuration
4. example blog article markup using prose classes
5. example component classes (`btn-primary`, `card`, etc.)
6. theme switcher helper function
7. documentation section showing how to add future themes

## Suggested File Targets (for this repo)
- `tailwind.config.js`
- `src/styles/global.css`
- `src/styles/theme.css` (optional split)
- `src/utils/theme.js` (theme switch helper)
- `docs/theme-design-revamp-implementation.md` (optional follow-up)

## Acceptance Criteria
- Existing page/component structure remains intact (no layout rewrite).
- Switching `data-theme` updates full UI colors without component edits.
- All primary UI colors in components come from semantic tokens.
- Blog article readability matches typography requirements.
- Prose styles are theme-consistent.
- Component utility classes exist and are reusable.
- Dark theme proof exists and works.

## Quality Gates
- No hardcoded theme colors in component-level classes, except inside theme definition blocks.
- Visual regression check on:
  - Home
  - Blog index
  - Blog detail
  - Contact section
- Theme switching smoke test:
  - `setTheme("sunset")`
  - `setTheme("dark")`

## Migration Notes
- Convert existing global CSS rules to semantic token usage first.
- Then map Tailwind config to semantic tokens.
- Then move repeated patterns into `@layer components` classes.
- Keep compatibility with existing Gatsby pages and templates.

## Final Output Expectation
The final system must make future theme creation a variable-only task, while preserving current page structure and improving maintainability and blog readability.
