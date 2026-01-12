# github-webhook-schemas

Zod schemas for validating GitHub webhook payloads with full TypeScript support.

## What this package provides

- Runtime validation for GitHub webhook payloads using Zod
- One schema per event or action (for example, `PushEventSchema`, `PullRequestOpenedEventSchema`)
- Shared schemas for common objects (for example, `Repository`, `User`)
- Type guards and exported TypeScript types for every schema
- Tree-shakeable subpath exports

This package does not:

- verify webhook signatures
- run an HTTP server or route requests

## Installation

```bash
# npm
npm install github-webhook-schemas zod

# pnpm
pnpm add github-webhook-schemas zod

# bun
bun add github-webhook-schemas zod
```

Notes:

- `zod` is a peer dependency and must be installed separately.
- This package is ESM only.

## Quick start

```ts
import { PushEventSchema } from 'github-webhook-schemas/push-event';

const result = PushEventSchema.safeParse(payload);

if (result.success) {
  console.log('Valid push event:', result.data);
} else {
  console.error('Invalid payload:', result.error);
}
```

## Importing schemas

Import from subpaths for smaller bundles:

```ts
import { PushEventSchema } from 'github-webhook-schemas/push-event';
import { PullRequestOpenedEventSchema } from 'github-webhook-schemas/pull-request-opened-event';
```

Shared schemas live under `shared/`:

```ts
import { RepositorySchema } from 'github-webhook-schemas/shared/repository';
import { UserSchema } from 'github-webhook-schemas/shared/user';
```

## Event names and actions

GitHub sends event names in the `x-github-event` header and includes `action` on many
payloads. This library exposes schemas for specific actions (for example, opened, closed).

```ts
import { PullRequestClosedEventSchema } from 'github-webhook-schemas/pull-request-closed-event';
import { PullRequestOpenedEventSchema } from 'github-webhook-schemas/pull-request-opened-event';

function parsePullRequest(payload: unknown) {
  const action = (payload as { action?: string }).action;

  switch (action) {
    case 'opened':
      return PullRequestOpenedEventSchema.parse(payload);
    case 'closed':
      return PullRequestClosedEventSchema.parse(payload);
    default:
      throw new Error(`Unsupported action: ${action ?? 'unknown'}`);
  }
}
```

## Type guards and TypeScript types

Every schema exports:

- `XxxEventSchema` (the Zod schema)
- `XxxEvent` (the TypeScript type)
- `isXxxEvent` (a type guard)

Example:

```ts
import { isPushEvent, type PushEvent } from 'github-webhook-schemas/push-event';

function handleWebhook(payload: unknown) {
  if (isPushEvent(payload)) {
    const event: PushEvent = payload;
    console.log(`Push to ${event.repository.full_name}`);
  }
}
```

You can also infer types directly from a schema:

```ts
import { z } from 'zod';
import { PushEventSchema } from 'github-webhook-schemas/push-event';

type PushEvent = z.infer<typeof PushEventSchema>;
```

## Working with Zod

These are regular Zod schemas, so you can compose them as needed:

```ts
import { PushEventSchema } from 'github-webhook-schemas/push-event';

const MinimalPushSchema = PushEventSchema.pick({
  ref: true,
  repository: true,
}).required();
```

## Development

This project is built and tested with Bun.

### Prerequisites

- Bun >= 1.3.0

### Repo layout

```
src/
  schemas/                 # generated event schemas and tests
  schemas/shared/          # generated shared schemas
scripts/
  generate-webhook-schemas.ts  # generates schemas from @octokit/webhooks-types
  update-exports.ts            # keeps package.json exports in sync
  build.ts                     # builds dist/ and type declarations
```

### Key scripts

```bash
bun run generate:schemas   # regenerate src/schemas from @octokit/webhooks-types
bun run update:exports     # update package.json exports after schema changes
bun run build              # build dist/ and .d.ts files
bun run test               # run tests
bun run lint               # lint the codebase
bun run typecheck          # run TypeScript type checking
```

### Regenerating schemas

The schemas are generated from `@octokit/webhooks-types`. When GitHub adds or changes
event payloads:

1. Update the `@octokit/webhooks-types` version in `package.json`.
2. Run `bun install`.
3. Run `bun run generate:schemas`.
4. Run `bun run update:exports`.
5. Run `bun run test` and `bun run build` to validate output.

Do not hand edit files in `src/schemas` or `src/schemas/shared`. They are overwritten
on every generation run. If you need to change output, update
`scripts/generate-webhook-schemas.ts` instead.

## License

MIT
