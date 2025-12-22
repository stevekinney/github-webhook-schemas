/**
 * Auto-generated tests for DiscussionLockedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionLockedEvent,
  DiscussionLockedEventSchema,
} from './discussion-locked-event.js';

describe('DiscussionLockedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionLockedEventSchema).toBeDefined();
    expect(typeof DiscussionLockedEventSchema.parse).toBe('function');
    expect(typeof DiscussionLockedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionLockedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionLockedEventTest = DiscussionLockedEvent;
