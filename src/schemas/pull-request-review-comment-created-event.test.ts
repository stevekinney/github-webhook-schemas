/**
 * Auto-generated tests for PullRequestReviewCommentCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewCommentCreatedEvent,
  PullRequestReviewCommentCreatedEventSchema,
} from './pull-request-review-comment-created-event.js';

describe('PullRequestReviewCommentCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewCommentCreatedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewCommentCreatedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewCommentCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewCommentCreatedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewCommentCreatedEventTest =
  PullRequestReviewCommentCreatedEvent;
