/**
 * Auto-generated tests for PullRequestConvertedToDraftEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestConvertedToDraftEvent,
  PullRequestConvertedToDraftEventSchema,
} from './pull-request-converted-to-draft-event.js';

describe('PullRequestConvertedToDraftEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestConvertedToDraftEventSchema).toBeDefined();
    expect(typeof PullRequestConvertedToDraftEventSchema.parse).toBe('function');
    expect(typeof PullRequestConvertedToDraftEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestConvertedToDraftEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestConvertedToDraftEventTest = PullRequestConvertedToDraftEvent;
