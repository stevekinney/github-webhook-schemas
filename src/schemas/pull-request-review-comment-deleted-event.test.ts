/**
 * Auto-generated tests for PullRequestReviewCommentDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewCommentDeletedEvent,
  PullRequestReviewCommentDeletedEventSchema,
} from './pull-request-review-comment-deleted-event.js';

describe('PullRequestReviewCommentDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewCommentDeletedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewCommentDeletedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewCommentDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewCommentDeletedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewCommentDeletedEventTest =
  PullRequestReviewCommentDeletedEvent;
