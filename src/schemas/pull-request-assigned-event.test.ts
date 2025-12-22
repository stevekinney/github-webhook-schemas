/**
 * Auto-generated tests for PullRequestAssignedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestAssignedEvent,
  PullRequestAssignedEventSchema,
} from './pull-request-assigned-event.js';

describe('PullRequestAssignedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestAssignedEventSchema).toBeDefined();
    expect(typeof PullRequestAssignedEventSchema.parse).toBe('function');
    expect(typeof PullRequestAssignedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestAssignedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestAssignedEventTest = PullRequestAssignedEvent;
