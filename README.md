# Hangar Gyms — Website Rebuild

A Next.js rebuild of the HangarGyms website. The current build phase is
**wireframes only** — see [`CLAUDE.md`](./CLAUDE.md) for the full scope,
the six build phases, and the rules governing this phase (most importantly:
if a task doesn't match the spec, it gets flagged, not guessed).

The full retro-spec this rebuild is based on lives in the "HANGARGYMS —
Website Spec & Rebuild Task Breakdown" doc (linked from `CLAUDE.md`).

## Getting started

```bash
pnpm install
pnpm dev
```

| Command | Description |
| ------- | ------------ |
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests in watch mode |
| `pnpm check` | Run Biome lint + format, with fixes |

See [`AGENTS.md`](./AGENTS.md) for coding conventions (file structure,
naming, TypeScript/React patterns) and [`docs/`](./docs) for topic guides
(testing, tRPC, i18n, error handling, code review).

## Architecture for this phase

See [`docs/architecture.md`](./docs/architecture.md) for how the wireframe
build's data layer and design tokens are structured, and which parts of the
existing scaffold (tRPC, Drizzle, next-intl) are intentionally not in use
yet.
