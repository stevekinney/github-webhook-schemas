# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development

```bash
bun run dev               # Start development with watch mode
bun run build             # Build for production (outputs to dist/)
# Run production build
bun ./dist/index.js       # After build, run with Bun
```

### Testing

```bash
bun test                  # Run all tests
bun test src/utils        # Run tests in specific directory
bun test logger          # Run tests matching pattern
bun test --watch         # Watch mode
bun test --coverage      # Generate coverage report
```

### Code Quality

```bash
bun run lint             # Check linting errors
bun run lint:fix         # Auto-fix linting errors
bun run typecheck        # TypeScript type checking
bun run format           # Format all files with Prettier
bun run format:check     # Check formatting without changes
```

### Utilities

```bash
bun run clean            # Clean build artifacts (dist/, coverage/, caches)
```

## Architecture Overview

### Core Design Principles

1. **Environment-First Configuration**: All configuration starts with environment variables validated through Zod schemas in `src/environment.ts`. The `environment` object is the single source of truth.

2. **Lean Surface Area**: This template intentionally avoids framework-specific scaffolding (custom error classes, logger wrappers, etc.). Add only what you need for your project.

### Key Notes

- **ESM + TypeScript**: Source files are TypeScript modules; build output targets Bun.
- **Import paths**: Use standard TS/ESM imports; no special runtime helpers are required.

### Git Hooks Architecture

Hooks live as Bun TypeScript files under `scripts/husky/` and are invoked by tiny sh wrappers in `.husky/`:

- `pre-commit`: runs lint-staged and basic dependency checks
- `post-checkout`: installs deps when `package.json`+`bun.lock` change; surfaces config changes
- `post-merge`: installs/cleans when dependencies or config changed; shows merge stats

They use `chalk` for color, `change-case` for headings, and Bun’s `$` and `Bun.write` for shell/IO.

### Types

There is no shared `src/types.ts` in this template. Add shared or domain-specific types near their modules as needed.

## Development Patterns

### Adding New Features

1. **Environment variables**: Add to `.env.example` first, then update the schema in `src/environment.ts`.
2. **Types**: Shared/reusable types go in `src/types.ts`; domain-specific types live near their modules.

### Testing Approach

- Tests use Bun's built-in test runner with `describe`, `it`, `expect`.
- Test files are typically colocated with sources using the `.test.ts` suffix.

### Import Organization

Prettier plus import sorting keeps imports consistent. A common order is:

1. Bun built-ins (e.g., `import { file, write } from 'bun'`)
2. Node built-ins (e.g., `import { readFile } from 'node:fs'`)
3. External packages (e.g., `import { z } from 'zod'`)
4. Internal absolute imports (e.g., `@/configuration/environment`)
5. Relative imports (e.g., `./local-module`)

## Bun-Specific Considerations

- Always use `bun` commands, not `npm` or `yarn`.
- Prefer Bun's built-in APIs (e.g., `Bun.serve()` over Express) when building servers.
- The lockfile in this repo is `bun.lock`.
- Bun provides native TypeScript execution without precompilation.
- Use `bunx` for one-off package execution (like `npx`).

<!-- Removed Bun-Optimized Utilities section; these files are not present in this codebase. -->

### Configuration Notes

- **bunfig.toml**: Build targets Bun with sourcemaps and minification.
- **TypeScript**: Uses Bun types; Node type libs are not included by default.
- **ESLint**: Flat config with `typescript-eslint` presets; type-aware rules only under `src/**` for speed. Unused imports are auto-fixable via `eslint-plugin-unused-imports`; import order via `eslint-plugin-simple-import-sort`; stylistic conflicts disabled by `eslint-config-prettier`.
- **Testing**: You can run tests in parallel via `bun test --parallel`.

<!-- No CI workflows are included by default in this template. Add your own under .github/workflows as needed. -->
