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
- provide real-world example payloads (fixtures are minimal, schema-valid shapes)

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

## Event types

Use the `eventTypes` export to get the list of supported event names. The list
includes base event names and action-specific names like `pull_request.opened`:

```ts
import { eventTypes } from 'github-webhook-schemas/event-types';
```

## Schema registry

Use the registry to look up the schema for a webhook event name and parse any of its actions.

```ts
import {
  schemas,
  isWebhookEventName,
  type WebhookEventName,
} from 'github-webhook-schemas/registry';

function parseWebhook(eventType: string, payload: unknown) {
  if (!isWebhookEventName(eventType)) {
    throw new Error(`Unsupported event type: ${eventType}`);
  }

  const schema = schemas.get(eventType);
  return schema.parse(payload);
}
```

`schemas.get` expects the base event name from `x-github-event` (for example,
`pull_request`), not the action-specific `event.action` string.

### Webhook router

Use `createWebhookRouter` to route unknown payloads to typed handlers using an
event emitter pattern.

```ts
import { createWebhookRouter } from 'github-webhook-schemas/registry';

const router = createWebhookRouter();

router.on('push', (event) => {
  console.log(`push:${event.repository.full_name}`);
});

router.on('pullRequestOpened', (event) => {
  console.log(`opened:${event.pull_request.number}`);
});

router.on('error', (err) => {
  console.error('Handler error:', err);
});

// In your server handler — synchronous, fire-and-forget
router.receive(payload);
```

Router behavior:

- Supports both base event keys (for example, `push`) and action-specific keys
  (for example, `pullRequestOpened`).
- A payload with an action emits both the action-specific event and the base
  event (action-specific first).
- Multiple handlers can be registered for the same event.
- `receive(payload)` is synchronous. Async handlers run independently; rejected
  promises are forwarded to the `error` event.
- If a handler throws and no `error` listener is registered, the error is
  re-thrown.
- Use `off(event, handler)` to remove a specific handler, or
  `removeAllListeners()` to clear everything.

The registry module also re-exports useful types:

- `WebhookEvent`
- `WebhookEventInput`
- `WebhookEventName`
- `WebhookEventMap`
- `WebhookEvents`
- `WebhookRouteKey`
- `WebhookRouteEvent`
- `WebhookHandler`
- `WebhookRouter`
- `WebhookRouteHandlers`

Alternatively, use `createGithubWebhookRouter` for a config-object style where
you pass all handlers upfront and get back an async function:

```ts
import { createGithubWebhookRouter } from 'github-webhook-schemas/registry';

const routeWebhook = createGithubWebhookRouter({
  push: (event) => {
    console.log(`push:${event.repository.full_name}`);
  },
  pullRequestOpened: async (event) => {
    await saveAuditEntry(`opened:${event.pull_request.number}`);
  },
});

await routeWebhook(payload);
```

This style checks action-specific handlers before base-event handlers and
invokes only the first match. It returns `Promise<void>` and resolves even when
no handler matches.

## Type guards and TypeScript types

Every schema exports:

- `XxxEventSchema` (the Zod schema)
- `XxxEvent` (the parsed output type)
- `isXxxEvent` (a type guard for the accepted input type)

Example:

```ts
import { isPushEvent } from 'github-webhook-schemas/push-event';

function handleWebhook(payload: unknown) {
  if (isPushEvent(payload)) {
    console.log(`Push to ${payload.repository.full_name}`);
  }
}
```

Guards narrow the original value to `z.input<typeof XxxEventSchema>`. Use
`parse` or `safeParse` and read its returned data when you need the parsed
`XxxEvent` output, including defaults or transforms.

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

### Validate only fields that are present

GitHub occasionally omits fields that its published webhook types mark as required.
For "validate what's present" semantics, wrap a schema with `deepPartial`:

```ts
import { deepPartial } from 'github-webhook-schemas/deep-partial';
import { schemas } from 'github-webhook-schemas/registry';

const LoosePullRequestSchema = deepPartial(schemas.get('pull_request'));
const result = LoosePullRequestSchema.safeParse(payload);
```

Every object property becomes optional recursively. Values that are present must
still match the original schema.

## Fixtures

Fixture factories live under the `fixtures` subpath and return schema-valid payloads
with minimal defaults. They are useful for tests and quick experiments.

```ts
import { createPushEvent } from 'github-webhook-schemas/fixtures';

const payload = createPushEvent({
  repository: { full_name: 'acme/widgets' },
  sender: { login: 'octo' },
});
```

More detailed example:

```ts
import { createPullRequestOpenedEvent } from 'github-webhook-schemas/fixtures';
import { PullRequestOpenedEventSchema } from 'github-webhook-schemas/pull-request-opened-event';

const payload = createPullRequestOpenedEvent({
  repository: {
    full_name: 'acme/widgets',
    owner: { login: 'acme' },
  },
  pull_request: {
    title: 'Fix widget sizing',
    user: { login: 'octo' },
  },
  sender: { login: 'octo' },
});

const result = PullRequestOpenedEventSchema.safeParse(payload);
if (!result.success) {
  throw new Error(result.error.message);
}
```

Notes:

- Every event has a `createXxxEvent` factory (for example, `createPushEvent`).
- Factories accept deep partial overrides and merge them into the base fixture.
- Overrides are not validated; use a schema or guard if you want to assert validity.
- Optional fields are omitted unless you set them via overrides.
- Arrays are replaced when overridden (provide the full array you want).

When you regenerate schemas, also regenerate fixtures:

```bash
bun run scripts/generate-fixtures.ts
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
