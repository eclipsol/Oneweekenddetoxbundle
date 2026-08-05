# The Life Beyond Screens Challenge

A production-ready React + Vite + TypeScript landing page recreated from the supplied Figma file for HumanBehaviorLab.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Validate and build

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to Vercel

Import the `frontend` folder as the project root, or deploy from the repository root with the Vercel project root set to `frontend`. The included `vercel.json` uses `npm run build` and publishes `dist/`.

## Project structure

- `src/components/layout` — shared section and container primitives
- `src/components/ui` — reusable buttons, headings, image frames, and preview cards
- `src/components/sections` — page sections composed from the shared primitives
- `src/data/content.ts` — typed static content and configurable purchase URL
- `src/styles` — design tokens, global styles, and section-specific CSS
- `src/assets` — local product photography extracted from the supplied design file
