/**
 * Auto-generated tests for PullRequestDequeuedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestDequeuedEvent,
  PullRequestDequeuedEventSchema,
} from './pull-request-dequeued-event.js';

describe('PullRequestDequeuedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestDequeuedEventSchema).toBeDefined();
    expect(typeof PullRequestDequeuedEventSchema.parse).toBe('function');
    expect(typeof PullRequestDequeuedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestDequeuedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestDequeuedEventTest = PullRequestDequeuedEvent;
