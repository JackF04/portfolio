# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Jack Fernando, built with React (Create React App) and deployed on Netlify. Terminal/CRT-themed single-page app with client-side routing.

## Commands

```bash
npm install       # install dependencies
npm start         # dev server at http://localhost:3000 with hot reload
npm run build     # production build to build/
npm test          # react-scripts test (Jest + React Testing Library, watch mode)
```

There is no lint script defined; ESLint runs via the `react-app` config baked into `react-scripts` (surfaced as warnings during `start`/`build`).

To run a single test file: `npm test -- <filename-or-pattern>` (still interactive/watch — react-scripts test wraps Jest's watch mode).

To preview a production build locally: `npx serve -s build`.

## Deployment

Netlify auto-deploys on every merge/push to `main` — there is no staging environment or manual approval step, so a merge to `main` goes live on the real site immediately. Treat merges to `main` accordingly (e.g. favor smaller, verified changes over large unreviewed ones).

## Architecture

- **Routing**: `src/App.js` defines all routes via `react-router-dom` (`/`, `/projects`, `/weightlifting`, `/about`, catch-all `NotFound`). Pages live in `src/pages/`, shared UI in `src/components/`.
- **SPA fallback**: `public/_redirects` rewrites all paths to `index.html` (Netlify). When adding a new route in `App.js`, no further config is needed since the catch-all redirect already covers it.
- **Terminal theme**: global look (CRT scanline/vignette overlay, color variables, monospace font) lives in `src/index.css` under `:root` custom properties (`--primary-color`, `--background-color`, etc.). `src/App.css` is unused CRA boilerplate — don't add real styles there; page-specific styles go in a co-located `<PageName>.css` next to the page (see `Weightlifting.css`, `About.css`) or in `index.css` for shared/global classes.
- **Typing animation**: headings wrapped in `<div className="typing-container"><h3 className="typing-text">...</h3></div>` get a CSS-only typewriter effect (`@keyframes typing` in `index.css`). `App.js` tracks a module-level `hasAnimatedOnce` flag and a `skipTyping` state; after `ANIMATION_DURATION_MS` (2000ms) on first mount, it adds a `no-typing` class to `.App` that disables the animation (`.no-typing .typing-text` rule) so the effect only plays once per session, not on every route change. Respects `prefers-reduced-motion`.
- **Content is inline data**: page content (experience, education, projects, competition history, rankings) is hardcoded as JS objects/arrays directly inside the page components (e.g. the `projects` array in `Projects.jsx`, the `competitions` array in `Weightlifting.jsx`) — there is no CMS or data file layer. Update content by editing the relevant page component directly.
- **Static assets**: images, CV PDF, and favicons live in `public/` and are referenced by root-relative paths (e.g. `/profile-photo.jpg`), not imported — this matches CRA's convention of serving `public/` as the web root. The `build/` directory is a committed build output, not source; don't hand-edit it.
