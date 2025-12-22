/**
 * Auto-generated tests for PullRequestAutoMergeDisabledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestAutoMergeDisabledEvent,
  PullRequestAutoMergeDisabledEventSchema,
} from './pull-request-auto-merge-disabled-event.js';

describe('PullRequestAutoMergeDisabledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestAutoMergeDisabledEventSchema).toBeDefined();
    expect(typeof PullRequestAutoMergeDisabledEventSchema.parse).toBe('function');
    expect(typeof PullRequestAutoMergeDisabledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestAutoMergeDisabledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestAutoMergeDisabledEventTest = PullRequestAutoMergeDisabledEvent;
