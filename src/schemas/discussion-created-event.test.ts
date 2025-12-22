/**
 * Auto-generated tests for DiscussionCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionCreatedEvent,
  DiscussionCreatedEventSchema,
} from './discussion-created-event.js';

describe('DiscussionCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionCreatedEventSchema).toBeDefined();
    expect(typeof DiscussionCreatedEventSchema.parse).toBe('function');
    expect(typeof DiscussionCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionCreatedEventTest = DiscussionCreatedEvent;
