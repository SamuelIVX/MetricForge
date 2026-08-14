# MetricForge

MetricForge is a Next.js UI dashboard shell for team analytics and task metrics — "Autonomous Metrics for Teams." It features an interactive UI frontend backed by a local mock dataset (`db.json`), fully testable with Vitest.

## Quick Start (local development)

### Prerequisites
- Node.js (v20+)
- npm

### 1. Install dependencies

```bash
npm install
```

### 2. Run the Next.js app (development)

```bash
npm run dev
# open http://localhost:3000 (redirects to /tasks)
```

### 3. Run tests, lint, and typecheck

```bash
npm run test      # Vitest component & accessibility tests
npm run lint      # ESLint code hygiene
npx tsc --noEmit  # TypeScript type checking
npm run build     # Production Next.js build
```

## Project Layout

- `app/` — Next.js App Router (pages, layouts, UI components, tables, dialogs)
  - `app/page.tsx` — redirects to `/tasks`
  - `app/layout.tsx` — root layout including navigation sidebar and header
  - `app/tasks/` — task dashboard tables and task detail views
  - `app/team/` — team member profiles and member card components
  - `app/components/` — reusable UI components, tables, dialogs, accessibility tests
- `docs/specs/` — refactoring specifications (`05-metricforge-refactor.md`)

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** TailwindCSS + shadcn/ui
- **Testing:** Vitest 4 + Testing Library + axe-core
- **Data:** Local mock JSON dataset (`db.json`)