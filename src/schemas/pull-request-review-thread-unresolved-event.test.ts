/**
 * Auto-generated tests for PullRequestReviewThreadUnresolvedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReviewThreadUnresolvedEvent,
  PullRequestReviewThreadUnresolvedEventSchema,
} from './pull-request-review-thread-unresolved-event.js';

describe('PullRequestReviewThreadUnresolvedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReviewThreadUnresolvedEventSchema).toBeDefined();
    expect(typeof PullRequestReviewThreadUnresolvedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReviewThreadUnresolvedEventSchema.safeParse).toBe(
      'function',
    );
  });

  it('should reject invalid data', () => {
    const result = PullRequestReviewThreadUnresolvedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReviewThreadUnresolvedEventTest =
  PullRequestReviewThreadUnresolvedEvent;
