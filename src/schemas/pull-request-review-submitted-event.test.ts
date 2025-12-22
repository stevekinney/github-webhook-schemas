/**
 * Auto-generated tests for PullRequestReviewSubmittedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewSubmittedEvent,
  PullRequestReviewSubmittedEventSchema,
} from './pull-request-review-submitted-event.js';

describe('PullRequestReviewSubmittedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewSubmittedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewSubmittedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewSubmittedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewSubmittedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewSubmittedEventTest = PullRequestReviewSubmittedEvent;
