/**
 * Auto-generated tests for PullRequestUnlockedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestUnlockedEvent,
  PullRequestUnlockedEventSchema,
} from './pull-request-unlocked-event.js';

describe('PullRequestUnlockedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestUnlockedEventSchema).toBeDefined();
    expect(typeof PullRequestUnlockedEventSchema.parse).toBe('function');
    expect(typeof PullRequestUnlockedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestUnlockedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestUnlockedEventTest = PullRequestUnlockedEvent;
