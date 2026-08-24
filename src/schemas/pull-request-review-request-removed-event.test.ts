/**
 * Auto-generated tests for PullRequestReviewRequestRemovedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewRequestRemovedEvent,
  PullRequestReviewRequestRemovedEventSchema,
} from './pull-request-review-request-removed-event.js';

describe('PullRequestReviewRequestRemovedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewRequestRemovedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewRequestRemovedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewRequestRemovedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewRequestRemovedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewRequestRemovedEventTest =
  PullRequestReviewRequestRemovedEvent;
