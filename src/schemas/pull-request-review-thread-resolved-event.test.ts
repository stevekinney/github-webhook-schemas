/**
 * Auto-generated tests for PullRequestReviewThreadResolvedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewThreadResolvedEvent,
  PullRequestReviewThreadResolvedEventSchema,
} from './pull-request-review-thread-resolved-event.js';

describe('PullRequestReviewThreadResolvedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewThreadResolvedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewThreadResolvedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewThreadResolvedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewThreadResolvedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewThreadResolvedEventTest =
  PullRequestReviewThreadResolvedEvent;
