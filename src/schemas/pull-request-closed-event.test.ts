/**
 * Auto-generated tests for PullRequestClosedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestClosedEvent,
  PullRequestClosedEventSchema,
} from './pull-request-closed-event.js';

describe('PullRequestClosedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestClosedEventSchema).toBeDefined();
    expect(typeof PullRequestClosedEventSchema.parse).toBe('function');
    expect(typeof PullRequestClosedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestClosedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestClosedEventTest = PullRequestClosedEvent;
