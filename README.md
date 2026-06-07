# MetricForge

MetricForge is a work-in-progress analytics dashboard for teams — "Autonomous Metrics for Teams." It is a Next.js (app router) application with a mocked REST API (json-server) used for local development and data exploration.

Status: In progress — README and some infra may be incomplete. The instructions below get you running locally for development.

Quick Start (local development)

Prerequisites
- Node.js (recommend v18+ / v20+)
- npm (or pnpm/yarn, but commands below assume npm)

Install dependencies

```bash
npm install
```

Generate or use seeded mock data

- The repository includes a pre-seeded `db.json`. To regenerate mock data run:

```bash
npm run generate-data
```

Run the mock API

This project uses json-server to serve `db.json` as a REST API used by the front-end during development.

```bash
npm run mock-api
# json-server will start on http://localhost:3001
```

Run the Next.js app (development)

```bash
npm run dev
# open http://localhost:3000 (the app redirects to /tasks)
```

Production build

```bash
npm run build
npm run start
```

Project Layout (key folders)

- app/ — Next.js app router (pages, layouts, components used by the UI)
  - app/page.tsx — redirects to /tasks
  - app/layout.tsx — root layout including sidebar and navbar
  - app/providers.tsx — React Query provider
  - app/api/ — edge/server route endpoints (examples for decisions)
  - app/components/ — UI components, charts, tables
- db.json — mock dataset used by json-server (teamMembers, tasks, awsCosts)
- data/generate_mock_data.js — script that regenerates db.json
- scripts/ — miscellaneous scripts (e.g. upload_to_s3.ts placeholder)
- backend/, infra/ — additional backend or infra code (inspect as needed)

Data & Mock API

- The mock dataset (`db.json`) contains sample resources:
  - teamMembers — developer profiles
  - tasks — synthetic task/decision entries
  - awsCosts — sample monthly AWS cost & usage data

- Start json-server with `npm run mock-api` which watches `db.json` on port 3001.

Linting, TypeScript & Style

- Lint: `npm run lint` (eslint configured)
- TypeScript: tsconfig.json is present; project uses TypeScript in parts of the codebase
- Tailwind + PostCSS are configured (see postcss.config.mjs)

Notes for contributors

- This repo is a work-in-progress. If you contribute, please:
  1. Create a branch from main with a descriptive name.
 2. Run lint before opening a PR.
 3. Include a concise PR description and screenshots for UI changes.