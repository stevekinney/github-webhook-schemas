/**
 * Auto-generated tests for PullRequestEnqueuedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestEnqueuedEvent,
  PullRequestEnqueuedEventSchema,
} from './pull-request-enqueued-event.js';

describe('PullRequestEnqueuedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestEnqueuedEventSchema).toBeDefined();
    expect(typeof PullRequestEnqueuedEventSchema.parse).toBe('function');
    expect(typeof PullRequestEnqueuedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestEnqueuedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestEnqueuedEventTest = PullRequestEnqueuedEvent;
