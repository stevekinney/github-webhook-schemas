/**
 * Auto-generated tests for PullRequestLockedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestLockedEvent,
  PullRequestLockedEventSchema,
} from './pull-request-locked-event.js';

describe('PullRequestLockedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestLockedEventSchema).toBeDefined();
    expect(typeof PullRequestLockedEventSchema.parse).toBe('function');
    expect(typeof PullRequestLockedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestLockedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestLockedEventTest = PullRequestLockedEvent;
