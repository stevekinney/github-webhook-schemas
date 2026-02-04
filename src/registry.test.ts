import { describe, expect, it } from 'bun:test';

import { createPushEvent } from './fixtures/index.js';
import { isWebhookEvent, isWebhookEventName, schemas } from './registry.js';

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
});
