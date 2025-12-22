/**
 * Auto-generated tests for PullRequestReviewEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewEditedEvent,
  PullRequestReviewEditedEventSchema,
} from './pull-request-review-edited-event.js';

describe('PullRequestReviewEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewEditedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewEditedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewEditedEventTest = PullRequestReviewEditedEvent;
