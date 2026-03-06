# Theme Design Revamp Examples

## 1) Example Blog Article Markup
Use this structure for long-form posts:

```jsx
<article className="blog-article">
  <header className="blog-post-header">
    <h1>How to Build Reliable Product Systems</h1>
    <p className="blog-post-meta">March 6, 2026 • 8 min read</p>
  </header>

  <div className="blog-post-content article-prose">
    <p>Long-form paragraph content...</p>
    <h2>System Boundaries</h2>
    <p>More content...</p>
    <blockquote>Important architectural note.</blockquote>
  </div>
</article>
```

`article-prose` maps to: `prose prose-lg max-w-[680px] mx-auto`.

## 2) Example Component Classes
Use semantic component classes only:

```html
<a class="btn-primary" href="#">Call to Action</a>
<div class="card">Card content</div>
<section class="section">Section content</section>
<span class="tag">#architecture</span>
<a class="nav-link" href="/blog">Blog</a>
```

## 3) Theme Switcher Usage
Theme helper lives in `src/utils/theme.js`.

```js
import { setTheme } from "../utils/theme";

setTheme("sunset");
setTheme("dark");
```

In browser console (after client load):

```js
window.setTheme("sunset");
window.setTheme("dark");
```

## 4) Adding Future Themes
To add a new theme, define only CSS variables:

```css
html[data-theme="forest"] {
  --color-primary: #3f7a4b;
  --color-secondary: #a8d5b2;
  --color-accent: #4d6f87;

  --color-bg-main: #f2f6f2;
  --color-bg-card: #ffffff;

  --color-text-primary: #1e2d22;
  --color-text-secondary: #516357;

  --color-border: #c6d1c8;

  --brand-primary: var(--color-primary);
  --brand-secondary: var(--color-secondary);
  --brand-accent: var(--color-accent);

  --bg-page: var(--color-bg-main);
  --bg-card: var(--color-bg-card);
  --bg-muted: #edf5ef;

  --text-main: var(--color-text-primary);
  --text-muted: var(--color-text-secondary);

  --border-default: var(--color-border);
}
```

No component code changes are required.
