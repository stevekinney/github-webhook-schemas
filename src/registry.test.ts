import { describe, expect, expectTypeOf, it } from 'bun:test';

import {
  createPullRequestClosedEvent,
  createPullRequestOpenedEvent,
  createPushEvent,
} from './fixtures/index.js';
import {
  createGithubWebhookRouter,
  createWebhookRouter,
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

  it('emits base event to registered handler', () => {
    const event = createPushEvent();
    const calls: string[] = [];
    const router = createWebhookRouter();

    router.on('push', (event) => {
      calls.push(event.repository.full_name);
    });

    router.receive(event);
    expect(calls).toEqual([event.repository.full_name]);
  });

  it('emits action-specific event', () => {
    const calls: string[] = [];
    const router = createWebhookRouter();

    router.on('pullRequestOpened', (event) => {
      calls.push(event.action);
    });

    router.on('pullRequestClosed', (event) => {
      calls.push(event.action);
    });

    router.receive(createPullRequestOpenedEvent());
    expect(calls).toEqual(['opened']);
  });

  it('emits both action-specific and base events', () => {
    const calls: string[] = [];
    const router = createWebhookRouter();

    router.on('pullRequestOpened', () => {
      calls.push('opened');
    });

    router.on('pullRequest', () => {
      calls.push('base');
    });

    router.receive(createPullRequestOpenedEvent());
    expect(calls).toEqual(['opened', 'base']);
  });

  it('does nothing when no listener matches', () => {
    const router = createWebhookRouter();

    router.on('pullRequest', () => {
      throw new Error('should not be called');
    });

    router.receive(createPushEvent());
  });

  it('handles async handlers', async () => {
    const calls: number[] = [];
    const router = createWebhookRouter();

    router.on('pullRequestClosed', async (event) => {
      calls.push(await Promise.resolve(event.pull_request.id));
    });

    const event = createPullRequestClosedEvent();
    router.receive(event);

    // Give the async handler time to resolve
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(calls).toEqual([event.pull_request.id]);
  });

  it('emits errors from sync handlers to error listener', () => {
    const router = createWebhookRouter();
    const errors: unknown[] = [];
    const testError = new Error('sync error');

    router.on('push', () => {
      throw testError;
    });

    router.on('error', (err) => {
      errors.push(err);
    });

    router.receive(createPushEvent());
    expect(errors).toEqual([testError]);
  });

  it('emits errors from async handlers to error listener', async () => {
    const router = createWebhookRouter();
    const errors: unknown[] = [];
    const testError = new Error('async error');

    router.on('push', () => {
      return Promise.reject(testError);
    });

    router.on('error', (err) => {
      errors.push(err);
    });

    router.receive(createPushEvent());

    // Give the async rejection time to propagate
    await new Promise((resolve) => setTimeout(resolve, 10));
    expect(errors).toEqual([testError]);
  });

  it('throws if handler errors and no error listener registered', () => {
    const router = createWebhookRouter();

    router.on('push', () => {
      throw new Error('unhandled');
    });

    expect(() => router.receive(createPushEvent())).toThrow('unhandled');
  });

  it('supports multiple handlers for the same event', () => {
    const calls: string[] = [];
    const router = createWebhookRouter();

    router.on('push', () => {
      calls.push('handler1');
    });

    router.on('push', () => {
      calls.push('handler2');
    });

    router.receive(createPushEvent());
    expect(calls).toEqual(['handler1', 'handler2']);
  });

  it('off() removes a handler', () => {
    const calls: string[] = [];
    const router = createWebhookRouter();
    const handler = () => {
      calls.push('should-not-fire');
    };

    router.on('push', handler);
    router.off('push', handler);

    router.receive(createPushEvent());
    expect(calls).toEqual([]);
  });

  it('removeAllListeners() clears all handlers', () => {
    const calls: string[] = [];
    const router = createWebhookRouter();

    router.on('push', () => {
      calls.push('push');
    });

    router.on('pullRequest', () => {
      calls.push('pr');
    });

    router.removeAllListeners();

    router.receive(createPushEvent());
    router.receive(createPullRequestOpenedEvent());
    expect(calls).toEqual([]);
  });

  it('removeAllListeners(event) clears handlers for a specific event', () => {
    const calls: string[] = [];
    const router = createWebhookRouter();

    router.on('push', () => {
      calls.push('push');
    });

    router.on('pullRequest', () => {
      calls.push('pr');
    });

    router.removeAllListeners('push');

    router.receive(createPushEvent());
    router.receive(createPullRequestOpenedEvent());
    expect(calls).toEqual(['pr']);
  });

  it('infers event payload types on .on()', () => {
    const router = createWebhookRouter();

    router.on('push', (event) => {
      expectTypeOf(event).toEqualTypeOf<WebhookEventMap['push']>();
    });

    router.on('pullRequestOpened', (event) => {
      expectTypeOf(event).toEqualTypeOf<
        Extract<WebhookEventMap['pull_request'], { action: 'opened' }>
      >();
    });

    expectTypeOf<WebhookRouteEvent<'push'>>().toEqualTypeOf<WebhookEventMap['push']>();
    expectTypeOf<WebhookRouteEvent<'pullRequestOpened'>>().toEqualTypeOf<
      Extract<WebhookEventMap['pull_request'], { action: 'opened' }>
    >();
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
      pullRequestOpened: (event) => {
        calls.push(event.action);
      },
      pullRequestClosed: (event) => {
        calls.push(event.action);
      },
    });

    await router(createPullRequestOpenedEvent());
    expect(calls).toEqual(['opened']);
  });

  it('prefers action-specific handlers before base-event handlers', async () => {
    const calls: string[] = [];
    const router = createGithubWebhookRouter({
      pullRequest: () => {
        calls.push('base');
      },
      pullRequestOpened: () => {
        calls.push('opened');
      },
    });

    await router(createPullRequestOpenedEvent());
    expect(calls).toEqual(['opened']);
  });

  it('does nothing when no handler matches', async () => {
    const router = createGithubWebhookRouter({
      pullRequest: () => {},
    });

    await router(createPushEvent());
  });

  it('supports asynchronous handlers', async () => {
    const calls: number[] = [];
    const router = createGithubWebhookRouter({
      pullRequestClosed: async (event) => {
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
      pullRequestOpened: async (event) => {
        expectTypeOf(event).toEqualTypeOf<
          Extract<WebhookEventMap['pull_request'], { action: 'opened' }>
        >();
        await Promise.resolve(event.pull_request.id);
      },
    });

    expectTypeOf(router).toEqualTypeOf<(payload: unknown) => Promise<void>>();
  });
});
