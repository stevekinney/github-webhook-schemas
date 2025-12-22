/**
 * Auto-generated tests for PullRequestReadyForReviewEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReadyForReviewEvent,
  PullRequestReadyForReviewEventSchema,
} from './pull-request-ready-for-review-event.js';

describe('PullRequestReadyForReviewEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReadyForReviewEventSchema).toBeDefined();
    expect(typeof PullRequestReadyForReviewEventSchema.parse).toBe('function');
    expect(typeof PullRequestReadyForReviewEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReadyForReviewEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReadyForReviewEventTest = PullRequestReadyForReviewEvent;
