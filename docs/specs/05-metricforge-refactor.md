# Spec: MetricForge Refactor — Full Backend/Infra De-Scope (D4)

## Objective

De-scope MetricForge's JSDoc-only backend and infrastructure skeletons per Decision D4 of `master-refactor-v3.md`. Remove `backend/`, `infra/`, `docker/`, `scripts/upload_to_s3.ts`, and 5 `app/api/decisions/**` 501 HTTP stubs. Rescope repo documentation to accurately describe MetricForge as a Next.js UI dashboard shell on mock data (`db.json`).

## Scope

- Package: MetricForge (checkout `~/Documents/projects/metricforge`)
- Modifies:
  - Deletes `backend/` (13 TS files)
  - Deletes `infra/` (6 TS files)
  - Deletes `docker/` (LocalStack compose + init script)
  - Deletes `scripts/upload_to_s3.ts`
  - Deletes `app/api/decisions/` (5 HTTP 501 stubs)
  - Updates `README.md`
- Off-limits:
  - `db.json` and `data/generate_mock_data.js`
  - UI components under `app/`, `components/`, `hooks/`, `lib/`
  - Vitest test suite (`app/**/*.test.{ts,tsx}`)

## Non-Goals

- Do not attempt to build a real backend or replace `db.json`.
- Do not modify UI layout, styling, or existing component logic.
- Do not invent package dependency removals (verified: `package.json` contains no AWS/CDK packages).

## Invariants

- **UI Shell Functionality:** MetricForge remains a fully functional Next.js UI dashboard shell backed by `db.json`.
- **Test Integrity:** All 13 existing Vitest tests must pass without modification or deletion.

## Requirements

1. THE SYSTEM SHALL delete `backend/`, `infra/`, `docker/`, `scripts/upload_to_s3.ts`, and `app/api/decisions/`. (R1)
2. THE SYSTEM SHALL preserve `db.json` and `data/generate_mock_data.js` as the sole mock data generation mechanism. (R2)
3. WHEN `npm run test`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` are executed, THE SYSTEM SHALL pass with zero errors. (R3)
4. THE SYSTEM SHALL update `README.md` to reflect MetricForge's actual scope as a UI dashboard on mock data. (R4)

## Acceptance Criteria

1. Directories `backend/`, `infra/`, `docker/`, `app/api/decisions/`, and file `scripts/upload_to_s3.ts` no longer exist in the repo. (R1)
2. `db.json` and `data/generate_mock_data.js` exist and generate mock data correctly. (R2)
3. `npm run test` passes 13/13 tests across 4 test files. (R3)
4. `npm run lint`, `npx tsc --noEmit`, and `npm run build` complete with 0 errors. (R3)
5. `README.md` accurately documents the UI dashboard shell architecture. (R4)

## Current State

- `backend/` contains 13 TS files (JSDoc skeletons); `infra/` contains 6 TS files; `docker/` contains compose + init; `app/api/decisions/` contains 5 HTTP 501 stubs. [verified]
- `package.json` has zero AWS/CDK dependencies. [verified]
- Baseline: 13 Vitest tests pass (4 files); lint clean (0 errors, 4 warnings); `tsc --noEmit` clean; `next build` clean. [verified 2026-08-13]

## Tests

- `npm run test` — verifies 13 tests across `app/team/...`, `app/components/...`, `AddTaskDialog`, `task_table`.
- Build and typecheck gates guard against missing imports.

## Constraints

- Follow `docs/specs` in-repo convention (D6/D7 of `master-refactor-v3.md`).
