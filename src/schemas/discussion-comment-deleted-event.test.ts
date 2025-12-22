/**
 * Auto-generated tests for DiscussionCommentDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionCommentDeletedEvent,
  DiscussionCommentDeletedEventSchema,
} from './discussion-comment-deleted-event.js';

describe('DiscussionCommentDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionCommentDeletedEventSchema).toBeDefined();
    expect(typeof DiscussionCommentDeletedEventSchema.parse).toBe('function');
    expect(typeof DiscussionCommentDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionCommentDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionCommentDeletedEventTest = DiscussionCommentDeletedEvent;
