# github-webhook-schemas

Zod schemas for validating GitHub webhook payloads with full TypeScript support.

## Installation

```bash
# npm
npm install github-webhook-schemas zod

# pnpm
pnpm add github-webhook-schemas zod

# bun
bun add github-webhook-schemas zod
```

> **Note:** `zod` is a peer dependency and must be installed separately.

## Usage

### Import all schemas

```typescript
import {
  PushEventSchema,
  PullRequestOpenedEventSchema,
  IssuesOpenedEventSchema,
} from 'github-webhook-schemas';

// Validate a webhook payload
const result = PushEventSchema.safeParse(payload);

if (result.success) {
  console.log('Valid push event:', result.data);
} else {
  console.error('Invalid payload:', result.error);
}
```

### Import individual schemas (tree-shakeable)

For smaller bundle sizes, import only the schemas you need:

```typescript
import { PushEventSchema } from 'github-webhook-schemas/push-event';
import { PullRequestOpenedEventSchema } from 'github-webhook-schemas/pull-request-opened-event';
```

### Type guards

Each schema exports a type guard function:

```typescript
import { isPushEvent, type PushEvent } from 'github-webhook-schemas/push-event';

function handleWebhook(payload: unknown) {
  if (isPushEvent(payload)) {
    // payload is now typed as PushEvent
    console.log(`Push to ${payload.repository.full_name}`);
  }
}
```

### Shared schemas

Common types used across events are available as shared schemas:

```typescript
import { RepositorySchema } from 'github-webhook-schemas/shared/repository';
import { UserSchema } from 'github-webhook-schemas/shared/user';
```

## Available Schemas

This package includes Zod schemas for all GitHub webhook events:

- Branch protection events
- Check run/suite events
- Code scanning alerts
- Commit comments
- Deployments
- Discussions
- Forks
- Issues and issue comments
- Labels
- Milestones
- Organizations
- Packages
- Pull requests and reviews
- Pushes
- Releases
- Repositories
- Secret scanning alerts
- Security advisories
- Sponsorships
- Stars
- Teams
- Workflows
- And more...

## TypeScript Support

All schemas export their inferred types:

```typescript
import { PushEventSchema, type PushEvent } from 'github-webhook-schemas/push-event';

// Use the type directly
function processPush(event: PushEvent) {
  console.log(`${event.pusher.name} pushed to ${event.ref}`);
}

// Or infer from the schema
type InferredPushEvent = z.infer<typeof PushEventSchema>;
```

## Webhook Handler Example

```typescript
import { PushEventSchema, isPushEvent } from 'github-webhook-schemas/push-event';
import {
  PullRequestOpenedEventSchema,
  isPullRequestOpenedEvent,
} from 'github-webhook-schemas/pull-request-opened-event';

async function handleGitHubWebhook(request: Request) {
  const event = request.headers.get('x-github-event');
  const payload = await request.json();

  switch (event) {
    case 'push': {
      const result = PushEventSchema.safeParse(payload);
      if (result.success) {
        await handlePush(result.data);
      }
      break;
    }
    case 'pull_request': {
      if (isPullRequestOpenedEvent(payload)) {
        await handlePullRequestOpened(payload);
      }
      break;
    }
  }
}
```

## License

MIT
