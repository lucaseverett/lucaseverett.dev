# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/`
  - Components: `src/components/*.astro` (PascalCase, reusable UI)
  - Layouts: `src/layouts/*.astro` (site wrappers)
  - Pages: `src/pages/**.astro` (route-mapped; folder/file name = route)
  - Styles: `src/styles/global.css` (global styles)
- Static assets: `public/` (served at site root)
- Build output: `dist/`
- Tooling config: `astro.config.mjs`, `eslint.config.js`, `.prettierrc`, `tsconfig.json`.

## Build, Test, and Development Commands
- `npm run dev`: Start Astro dev server with HMR.
- `npm run build`: Production build to `dist/`.
- `npm run preview`: Serve the built site locally.
- `npm run lint`: Lint `.astro` and JS files via ESLint.
- `npm run format`: Auto-format code with Prettier.

Example: during development, run `npm run dev`; before pushing, run `npm run lint && npm run format && npm run build`.

## Coding Style & Naming Conventions
- Formatting: Prettier (configured in `.prettierrc`), including Astro and import sorting; use default 2‑space indentation.
- Linting: ESLint with `eslint-plugin-astro` and `eslint-config-prettier`.
- Components: PascalCase (e.g., `WorkCard.astro`).
- Pages/routes: kebab-case filenames map to URLs (e.g., `src/pages/about.astro` → `/about`).
- Modules: ESM only (`"type": "module"`).

## Testing Guidelines
- Automated tests are not set up yet. For changes, verify:
  - `npm run build` completes without errors.
  - `npm run preview` renders pages and interactive components correctly.
- If adding tests, prefer page-level checks with Playwright and lightweight unit tests with Vitest; colocate under `src/` following file under test.

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject; include scope when helpful (e.g., `components: simplify Social links`).
- Link issues in the body (e.g., `Closes #123`).
- PRs: clear description of changes, screenshots for UI updates, steps to verify locally, and any follow-up tasks. Ensure `lint`, `format`, and `build` pass.

## Security & Configuration Tips
- Do not commit secrets; this is a static Astro site—prefer runtime env only if added later.
- Keep assets under `public/`; reference with absolute paths (e.g., `/icons/...`).
- Tailwind CSS v4 is enabled via `@tailwindcss/vite`; add utility classes in templates or `global.css`.

