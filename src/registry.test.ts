import { describe, expect, expectTypeOf, it } from 'bun:test';

import {
  createPullRequestClosedEvent,
  createPullRequestOpenedEvent,
  createPushEvent,
} from './fixtures/index.js';
import {
  createGithubWebhookRouter,
  isWebhookEvent,
  isWebhookEventName,
  schemas,
  type WebhookEventMap,
  type WebhookRouteEvent,
} from './registry.js';

describe('registry', () => {
  it('resolves event schemas by name', () => {
    const schema = schemas.get('push');
    const result = schema.safeParse(createPushEvent());
    expect(result.success).toBe(true);
  });

  it('validates webhook event names', () => {
    expect(isWebhookEventName('push')).toBe(true);
    expect(isWebhookEventName('not-a-real-event')).toBe(false);
  });

  it('detects webhook events', () => {
    const fixture = createPushEvent();
    expect(isWebhookEvent(fixture)).toBe(true);
    expect(isWebhookEvent({})).toBe(false);
  });

  it('routes a payload to a base-event handler', () => {
    const event = createPushEvent();
    const calls: string[] = [];
    const router = createGithubWebhookRouter({
      push: (event) => {
        calls.push(event.repository.full_name);
      },
    });

    return router(event).then(() => {
      expect(calls).toEqual([event.repository.full_name]);
    });
  });

  it('routes a payload to an action-specific handler', async () => {
    const calls: string[] = [];
    const router = createGithubWebhookRouter({
      'pull_request.opened': (event) => {
        calls.push(event.action);
      },
      'pull_request.closed': (event) => {
        calls.push(event.action);
      },
    });

    await router(createPullRequestOpenedEvent());
    expect(calls).toEqual(['opened']);
  });

  it('prefers action-specific handlers before base-event handlers', async () => {
    const calls: string[] = [];
    const router = createGithubWebhookRouter({
      pull_request: () => {
        calls.push('base');
      },
      'pull_request.opened': () => {
        calls.push('opened');
      },
    });

    await router(createPullRequestOpenedEvent());
    expect(calls).toEqual(['opened']);
  });

  it('does nothing when no handler matches', async () => {
    const router = createGithubWebhookRouter({
      pull_request: () => {},
    });

    await router(createPushEvent());
  });

  it('supports asynchronous handlers', async () => {
    const calls: number[] = [];
    const router = createGithubWebhookRouter({
      'pull_request.closed': async (event) => {
        calls.push(await Promise.resolve(event.pull_request.id));
      },
    });

    const event = createPullRequestClosedEvent();
    await router(event);
    expect(calls).toEqual([event.pull_request.id]);
  });

  it('throws for invalid route keys', () => {
    expect(() =>
      createGithubWebhookRouter({
        'not-a-real-event': () => {},
      } as unknown as Record<string, (event: unknown) => void>),
    ).toThrow('Unsupported webhook route key');
  });

  it('infers route handler payload types and router return type', () => {
    const router = createGithubWebhookRouter({
      push: (event) => {
        expectTypeOf(event).toEqualTypeOf<WebhookEventMap['push']>();
      },
      'pull_request.opened': async (event) => {
        expectTypeOf(event).toEqualTypeOf<
          Extract<WebhookEventMap['pull_request'], { action: 'opened' }>
        >();
        await Promise.resolve(event.pull_request.id);
      },
    });

    expectTypeOf<WebhookRouteEvent<'push'>>().toEqualTypeOf<WebhookEventMap['push']>();
    expectTypeOf<WebhookRouteEvent<'pull_request.opened'>>().toEqualTypeOf<
      Extract<WebhookEventMap['pull_request'], { action: 'opened' }>
    >();
    expectTypeOf(router).toEqualTypeOf<(payload: unknown) => Promise<void>>();
  });
});
