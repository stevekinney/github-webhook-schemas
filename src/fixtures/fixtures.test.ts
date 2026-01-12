import { describe, expect, expectTypeOf, it } from 'bun:test';

import type { GithubAppAuthorizationRevokedEvent, PushEvent } from '../schemas/index.js';
import { createGithubAppAuthorizationRevokedEvent, createPushEvent } from './index.js';

describe('fixtures', () => {
  it('creates typed fixtures for events', () => {
    const event = createPushEvent();
    expectTypeOf(event).toEqualTypeOf<PushEvent>();
  });

  it('respects literal action defaults', () => {
    const event = createGithubAppAuthorizationRevokedEvent();
    expectTypeOf(event).toEqualTypeOf<GithubAppAuthorizationRevokedEvent>();
    expect(event.action).toBe('revoked');
  });

  it('deeply merges overrides', () => {
    const event = createPushEvent({
      repository: {
        full_name: 'acme/widgets',
        owner: { login: 'octo' },
      },
    });

    expect(event.repository.full_name).toBe('acme/widgets');
    expect(event.repository.owner.login).toBe('octo');
  });

  it('allows partial array overrides', () => {
    const event = createPushEvent({
      commits: [{ id: 'abc123' }],
    });

    expect(event.commits).toHaveLength(1);
    expect(event.commits[0]?.id).toBe('abc123');
  });
});
