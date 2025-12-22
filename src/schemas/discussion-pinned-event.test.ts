/**
 * Auto-generated tests for DiscussionPinnedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionPinnedEvent,
  DiscussionPinnedEventSchema,
} from './discussion-pinned-event.js';

describe('DiscussionPinnedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionPinnedEventSchema).toBeDefined();
    expect(typeof DiscussionPinnedEventSchema.parse).toBe('function');
    expect(typeof DiscussionPinnedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionPinnedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionPinnedEventTest = DiscussionPinnedEvent;
