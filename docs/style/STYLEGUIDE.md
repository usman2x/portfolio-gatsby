# Style Guide

This is the minimal visual reference for the current site.

---

## Design Direction

* Blog-first, content-heavy, calm, and minimal.
* Balance **readability (like Medium)** with **subtle brand expression**.
* Let typography, spacing, and hierarchy carry most of the design.
* Use color intentionally to create **focus and identity**, not decoration.
* Aim for a quiet interface with **one moment of emphasis per section**.

---

## Theme System

* Theme values live in `src/styles/global.css`.
* Use semantic tokens, not raw hex values, in component styling.
* Active themes:

  * `sunset` (default)
  * `dark` (alternate)

---

## Color Palette

Default `sunset` theme:

* Primary: `#E97A3C`
* Secondary: `#F2B38A`
* Accent: `#6F8798`
* Page background: `#F7F3EE`
* Card background: `#FFFFFF`
* Main text: `#2F2F2F`
* Muted text: `#6B6B6B`
* Border: `#C9C3BD`

### Derived Surface Tokens (Required)

Use soft tinted backgrounds to introduce subtle visual structure:

* `--bg-brand-soft`: rgba(233, 122, 60, 0.08)
* `--bg-brand-soft-strong`: rgba(233, 122, 60, 0.14) (rare use)
* `--bg-accent-soft`: rgba(111, 135, 152, 0.08)

These should be used for:

* Section separation
* Hero or intro surfaces
* Subtle emphasis blocks

---

## Color Usage Rules

* Use `--text-main` and `--text-muted` for most of the interface.
* Use `--brand-primary` for:

  * Links
  * Active states
  * One key emphasis per section
* Use `--brand-accent` for:

  * Tags
  * Secondary emphasis
  * Contrast against warm primary areas
* Keep backgrounds mostly neutral, but introduce **soft tinted sections** for rhythm.
* Avoid large areas of fully saturated brand color.
* Borders should remain subtle and structural.

### Emphasis Rule (Core Principle)

Each section should have:

* **One primary visual focus**
* Color should support that focus, not compete across multiple elements

---

## Typography

* Body font: `Inter`
* Heading font: `Merriweather`
* Base font size: `18px`
* Base line height: `1.7`
* Long-form content width: `680px`

Typography rules:

* `h1` to `h4` use `Merriweather`
* Body copy uses `Inter`
* Prioritize readable paragraph rhythm over dense layouts
* Prefer strong type hierarchy over heavy UI treatment
* Keep headings clear and direct

### Spacing Rhythm

* Headings should have more top margin than bottom margin
* Paragraph spacing should support relaxed reading
* Maintain consistent vertical rhythm across sections

---

## Components

### Buttons

* Use:

  * `.theme-btn-outline` as default
  * `.theme-btn-primary` only for key actions (hero, main CTA)
* Buttons should feel functional, not promotional
* Avoid multiple competing button styles in one section

### Cards

* Use `.card` only when grouping improves scanning
* Avoid unnecessary card usage
* Featured cards may:

  * Use subtle brand border accents
  * Slight background variation on hover

### Links

* Default: `--brand-primary`
* Keep visually understated but clearly identifiable
* Use hover states (underline or subtle change)

### Tags

* Background: `--bg-accent-soft`
* Text: `--brand-accent`
* Keep compact and quiet

---

## Layout Rules

* Keep section spacing consistent and generous
* Prefer vertical flow over complex multi-column layouts
* Use fewer containers and more whitespace
* Use **alternating background surfaces** for section separation:

  * `--bg-page`
  * `--bg-brand-soft`
* Keep navigation and footer visually quiet
* Favor rhythm and scanning over density

---

## Section Design Guidelines

### Hero Section

* May use `--bg-brand-soft`
* Highlight one keyword or phrase using `--brand-primary`
* Avoid heavy UI or large colored blocks
* Maintain strong typographic focus

### Content Sections

* Default to neutral backgrounds
* Introduce tinted backgrounds sparingly for contrast
* Ensure clear entry point for the eye

### Featured Elements

* Use subtle emphasis:

  * border accents
  * soft background shifts
* Avoid heavy shadows or loud styling

---

## Do / Don't

### Do

* Use theme tokens from `global.css`
* Use color to guide attention, not decorate
* Maintain one clear focal point per section
* Preserve consistency across components
* Use soft surfaces to create structure
* Keep UI quiet so content leads

### Don't

* Introduce random new colors outside the theme system
* Hardcode palette values inside components
* Apply brand color to multiple competing elements
* Overuse cards, borders, or visual containers
* Use gradients, heavy shadows, or loud UI by default
* Let portfolio elements overpower readability
* Keep everything neutral to the point of flatness

---

## Mental Model (Reference)

* Typography → carries content
* Spacing → creates clarity
* Color → creates focus

If everything is minimal, nothing stands out.
Use restraint, but allow intentional emphasis.
