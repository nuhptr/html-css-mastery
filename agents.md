# Repository Guidelines (`agents.md`)

Rules and engineering standards for AI agents and contributors working in **HTML & CSS Mastery**.

---

## 1. Repository Structure & Naming

- **Topic-based curriculum modules**: Organize lessons under the 11 numbered modules (`01-html-fundamentals/` through `11-projects/`).
- **Root Curriculum Hub**: [`index.html`](index.html), [`styles/hub.css`](styles/hub.css), and [`scripts/hub.js`](scripts/hub.js) serve as the interactive entry point for searching, filtering, and browsing all lessons, projects, and notes.
- **Shared lesson styling**: [`styles/lesson-base.css`](styles/lesson-base.css) provides the base layout, typography, form/table styling, and breadcrumb topbar for standalone lessons.
- **Consolidated study archive (`notes/`)**: Store PDFs in `notes/pdfs/`, visual diagrams in `notes/diagrams/{html-css-fundamentals,animations,accessibility}/`, and written notes in `notes/markdown/`.
- **Naming convention**: Always use lowercase `kebab-case` for directory and file names. Never leave spaces or legacy suffixes such as `[latest]`.
- **Course-origin tags in `README.md`**: Label material origin consistently using `[BR]` (*Build Responsive Real-World Websites with HTML and CSS*) and `[MH]` (*Modern HTML & CSS From The Beginning*).

---

## 2. HTML & Accessibility Standards

- Use semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<search>`, `<figure>`, `<dialog>`, `<details>`).
- Standalone lessons should link `../../styles/lesson-base.css` and wrap their layout with `.lesson-topbar` (including the back link to `../../index.html` and module label) plus `<main class="lesson-shell">`.
- Keep forms and interactive controls accessible:
  - Pair form controls with explicit `<label for="...">`.
  - Preserve visible keyboard focus indicators (`:focus-visible`).
  - Use valid ARIA attributes (`aria-label`, `aria-pressed`, `aria-expanded`) only where native HTML semantics need reinforcement.
  - Include descriptive `alt` text on informative images and `alt=""` on purely decorative images.

---

## 3. Modern CSS Architecture

- **Explicit cascade layers**: Declare `@layer reset, base, components, utilities;` upfront in shared and modular stylesheets.
- **Native CSS nesting**: Use native CSS nesting to group component descendants, interactive states (`&:hover`, `&.is-active`, `&:focus-visible`), pseudo-elements (`&::before`, `&::after`), and responsive `@media` rules.
- **No Sass-only nesting syntax**: Never use `&__` or `&--` string concatenation in plain `.css` files (for example, write `.lesson-topbar__back` inside `.lesson-topbar`, never `&__back`).
- **No global `*` resets**: Apply targeted element resets inside `@layer reset` rather than broad `*` rules so web components and lower-priority layers remain easy to override.
- **Modern styling primitives**: Prefer `:root` CSS custom properties, CSS logical properties (`inline-size`, `block-size`, `margin-inline`, `padding-block`), and fluid sizing (`clamp()`, `min()`).

---

## 4. JavaScript, Formatting & Asset Preservation

- **Vanilla ES6+ JavaScript**: Keep scripts clean, modular, and loaded with `defer`; avoid unnecessary build pipelines for standalone lessons.
- **Code formatting**: Follow `.prettierrc` (`tabWidth: 4`, `singleQuote: false`, `printWidth: 100`, `semi: false`, `bracketSameLine: true`; Markdown files are excluded via `.prettierignore`).
- **Preserve media & study assets**: Never delete images, audio, video, PDFs, or diagrams during refactors, and keep all relative `src`/`href` paths working.
- **Ignored files**: Never commit `.DS_Store`, `node_modules/`, `*.log`, or `.vscode/` (enforced in `.gitignore`).

---

## 5. Adding New Lessons or Projects Checklist

1. Create a lowercase `kebab-case` directory inside the appropriate module (`01-` through `11-`).
2. Register the new entry in both [`index.html`](index.html) (Curriculum Hub) and [`README.md`](README.md) (with `[BR]` / `[MH]` attribution if applicable).
3. Verify zero broken local links across HTML/CSS/README, valid JS syntax (`node --input-type=commonjs --check`), balanced CSS braces with valid native nesting, and clean rendering on desktop + mobile via a local HTTP server.

---

## 6. Git & GitHub Workflow

- **Default branch**: Keep `master` clean and release-ready as the sole long-lived branch (no `dev` or `develop` branch).
- **Short-lived branches**: Branch from `master` using lowercase `kebab-case` prefixes: `feature/<name>`, `fix/<name>`, `hotfix/<name>`, `docs/<name>`, or `chore/<name>`.
- **Conventional Commits v1.0.0**: Use `<type>[optional scope]: <description>` in lowercase imperative style without a trailing period. Include a blank line followed by `Co-authored-by: Gemini <gemini@google.com>` on AI-assisted commits.
- **Pull Requests & merging**: Open PRs into `master` with structured sections (**Summary / Context**, **Key Changes**, **Verification / Test Plan**, **Notes / Risks**) and wait for confirmation before merging when working interactively. Do **not** automatically delete merged branches.
- **Releases & tags**: Tag completed milestones on `master` strictly with SemVer (`vMAJOR.MINOR.PATCH`) and keep GitHub Release titles strictly to the version number (e.g., `v2.0.0`).
- **Pushing**: Only run `git push` when explicitly requested.
