/**
 * Auto-generated tests for DiscussionDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionDeletedEvent,
  DiscussionDeletedEventSchema,
} from './discussion-deleted-event.js';

describe('DiscussionDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionDeletedEventSchema).toBeDefined();
    expect(typeof DiscussionDeletedEventSchema.parse).toBe('function');
    expect(typeof DiscussionDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionDeletedEventTest = DiscussionDeletedEvent;
