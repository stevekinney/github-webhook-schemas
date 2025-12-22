/**
 * Auto-generated tests for PullRequestReviewDismissedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewDismissedEvent,
  PullRequestReviewDismissedEventSchema,
} from './pull-request-review-dismissed-event.js';

describe('PullRequestReviewDismissedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewDismissedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewDismissedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewDismissedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewDismissedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewDismissedEventTest = PullRequestReviewDismissedEvent;
