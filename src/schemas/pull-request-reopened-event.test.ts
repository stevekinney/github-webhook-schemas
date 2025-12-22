/**
 * Auto-generated tests for PullRequestReopenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestReopenedEvent,
  PullRequestReopenedEventSchema,
} from './pull-request-reopened-event.js';

describe('PullRequestReopenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestReopenedEventSchema).toBeDefined();
    expect(typeof PullRequestReopenedEventSchema.parse).toBe('function');
    expect(typeof PullRequestReopenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestReopenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestReopenedEventTest = PullRequestReopenedEvent;
