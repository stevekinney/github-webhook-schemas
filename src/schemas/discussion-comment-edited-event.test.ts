/**
 * Auto-generated tests for DiscussionCommentEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionCommentEditedEvent,
  DiscussionCommentEditedEventSchema,
} from './discussion-comment-edited-event.js';

describe('DiscussionCommentEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionCommentEditedEventSchema).toBeDefined();
    expect(typeof DiscussionCommentEditedEventSchema.parse).toBe('function');
    expect(typeof DiscussionCommentEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionCommentEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionCommentEditedEventTest = DiscussionCommentEditedEvent;
