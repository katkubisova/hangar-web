# AGENTS.md

## Quick Commands

| Command | Description |
| ------- | ------------ |
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests in watch mode |
| `pnpm check` | Run Biome check and fix |

## Development Philosophy

**"Measure twice, cut once"** — Think before implementing. Prioritize:
- **Architecture first**: Design for maintainability as the codebase scales
- **Readability**: Code should be self-explanatory
- **Safety**: Correctness over cleverness
- **Simplicity**: Avoid premature abstraction; follow existing patterns

## Key Conventions

- **TypeScript**: Strict mode, `import type` for type-only imports
- **Imports**: External first, then internal via `@/*` alias
- **Naming**: PascalCase components, camelCase functions, UPPER_SNAKE_CASE constants
- **React**: Server Components by default, `"use client"` when needed
- **Exports**: Prefer named exports (except pages, layouts, config)
- **Type Files**: Use `types/` folder instead of single `types.ts` file
- **Barrel Exports**: Do not use `index.ts` re-export files
- **Feature Structure**: Main component at root, sub-components in `components/`
- **Code Style**: Prefer declarative implementations. Code should be easy to read. Extract multi-line logic into util functions, custom hooks, or atomic components following existing architecture patterns
- **When Uncertain**: Sometimes you don't know. That is normal. Don't try to act alone - consider asking first. Asking first prevents creating technical debt and unmaintainable codebase

## Project Structure

```
src/
├── app/         # Next.js App Router
├── components/  # Shared UI components
├── features/    # Feature-specific components (main component at root, sub-components in components/)
├── lib/         # Utilities and helpers
├── trpc/        # tRPC setup and routers
├── db/          # Database schema and client
└── i18n/        # Internationalization
```

## Documentation

| Topic | File |
| ----- | ---- |
| Code Review | [docs/code-review.md](docs/code-review.md) |
| Database Setup | [docs/database-setup.md](docs/database-setup.md) |
| Internationalization | [docs/next-intl.md](docs/next-intl.md) |
| Testing | [docs/testing.md](docs/testing.md) |
| tRPC | [docs/trpc.md](docs/trpc.md) |
| React Conventions | [docs/react-conventions.md](docs/react-conventions.md) |
| Error Handling | [docs/error-handling.md](docs/error-handling.md) |