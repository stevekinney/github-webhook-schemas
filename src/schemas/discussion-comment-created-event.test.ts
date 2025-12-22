/**
 * Auto-generated tests for DiscussionCommentCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionCommentCreatedEvent,
  DiscussionCommentCreatedEventSchema,
} from './discussion-comment-created-event.js';

describe('DiscussionCommentCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionCommentCreatedEventSchema).toBeDefined();
    expect(typeof DiscussionCommentCreatedEventSchema.parse).toBe('function');
    expect(typeof DiscussionCommentCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionCommentCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionCommentCreatedEventTest = DiscussionCommentCreatedEvent;
