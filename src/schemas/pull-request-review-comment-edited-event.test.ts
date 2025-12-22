/**
 * Auto-generated tests for PullRequestReviewCommentEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewCommentEditedEvent,
  PullRequestReviewCommentEditedEventSchema,
} from './pull-request-review-comment-edited-event.js';

describe('PullRequestReviewCommentEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewCommentEditedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewCommentEditedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewCommentEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewCommentEditedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewCommentEditedEventTest =
  PullRequestReviewCommentEditedEvent;
