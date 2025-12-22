/**
 * Auto-generated tests for PullRequestEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestEditedEvent,
  PullRequestEditedEventSchema,
} from './pull-request-edited-event.js';

describe('PullRequestEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestEditedEventSchema).toBeDefined();
    expect(typeof PullRequestEditedEventSchema.parse).toBe('function');
    expect(typeof PullRequestEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestEditedEventTest = PullRequestEditedEvent;
