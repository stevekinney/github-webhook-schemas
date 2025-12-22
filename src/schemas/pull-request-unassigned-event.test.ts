/**
 * Auto-generated tests for PullRequestUnassignedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestUnassignedEvent,
  PullRequestUnassignedEventSchema,
} from './pull-request-unassigned-event.js';

describe('PullRequestUnassignedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestUnassignedEventSchema).toBeDefined();
    expect(typeof PullRequestUnassignedEventSchema.parse).toBe('function');
    expect(typeof PullRequestUnassignedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestUnassignedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestUnassignedEventTest = PullRequestUnassignedEvent;
