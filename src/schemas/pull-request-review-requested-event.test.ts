/**
 * Auto-generated tests for PullRequestReviewRequestedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewRequestedEvent,
  PullRequestReviewRequestedEventSchema,
} from './pull-request-review-requested-event.js';

describe('PullRequestReviewRequestedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewRequestedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewRequestedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewRequestedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewRequestedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewRequestedEventTest = PullRequestReviewRequestedEvent;
