/**
 * Auto-generated tests for PullRequestUnlabeledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestUnlabeledEvent,
  PullRequestUnlabeledEventSchema,
} from './pull-request-unlabeled-event.js';

describe('PullRequestUnlabeledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestUnlabeledEventSchema).toBeDefined();
    expect(typeof PullRequestUnlabeledEventSchema.parse).toBe('function');
    expect(typeof PullRequestUnlabeledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestUnlabeledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestUnlabeledEventTest = PullRequestUnlabeledEvent;
