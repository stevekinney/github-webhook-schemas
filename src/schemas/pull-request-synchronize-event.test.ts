/**
 * Auto-generated tests for PullRequestSynchronizeEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestSynchronizeEvent,
  PullRequestSynchronizeEventSchema,
} from './pull-request-synchronize-event.js';

describe('PullRequestSynchronizeEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestSynchronizeEventSchema).toBeDefined();
    expect(typeof PullRequestSynchronizeEventSchema.parse).toBe('function');
    expect(typeof PullRequestSynchronizeEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestSynchronizeEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestSynchronizeEventTest = PullRequestSynchronizeEvent;
