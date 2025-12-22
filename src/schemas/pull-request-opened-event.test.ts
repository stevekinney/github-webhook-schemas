/**
 * Auto-generated tests for PullRequestOpenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestOpenedEvent,
  PullRequestOpenedEventSchema,
} from './pull-request-opened-event.js';

describe('PullRequestOpenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestOpenedEventSchema).toBeDefined();
    expect(typeof PullRequestOpenedEventSchema.parse).toBe('function');
    expect(typeof PullRequestOpenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestOpenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestOpenedEventTest = PullRequestOpenedEvent;
