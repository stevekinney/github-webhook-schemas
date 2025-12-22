/**
 * Auto-generated tests for PullRequestDemilestonedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestDemilestonedEvent,
  PullRequestDemilestonedEventSchema,
} from './pull-request-demilestoned-event.js';

describe('PullRequestDemilestonedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestDemilestonedEventSchema).toBeDefined();
    expect(typeof PullRequestDemilestonedEventSchema.parse).toBe('function');
    expect(typeof PullRequestDemilestonedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestDemilestonedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestDemilestonedEventTest = PullRequestDemilestonedEvent;
