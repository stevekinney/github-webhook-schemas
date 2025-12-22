/**
 * Auto-generated tests for PullRequestLabeledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestLabeledEvent,
  PullRequestLabeledEventSchema,
} from './pull-request-labeled-event.js';

describe('PullRequestLabeledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestLabeledEventSchema).toBeDefined();
    expect(typeof PullRequestLabeledEventSchema.parse).toBe('function');
    expect(typeof PullRequestLabeledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestLabeledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestLabeledEventTest = PullRequestLabeledEvent;
