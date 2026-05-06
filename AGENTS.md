# Repo Guidance

## Planning Docs
- Keep planning, architecture, and page blueprint docs under `docs/`, not the repo root.
- Before implementing page, layout, or navigation changes, read the relevant docs in this order:
  1. `docs/style/STYLEGUIDE.md`
  2. `docs/structure/STRUCTURE.md`
  3. page-specific doc in `docs/pages/`
  4. `docs/seo/SEO_URLS.md`
  5. `docs/content/CONTENT_CONFIGURATION.md`

## Implementation Rules
- Treat the docs in `docs/` as the active source of truth for structure, style, SEO, and content modeling.
- If implementation changes the intended behavior or layout, update the corresponding doc in the same change.
- Keep copy, labels, and repeated page content configurable where practical; do not hardcode content in components when a shared content file is more appropriate.
