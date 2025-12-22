/**
 * Auto-generated tests for PullRequestAutoMergeEnabledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestAutoMergeEnabledEvent,
  PullRequestAutoMergeEnabledEventSchema,
} from './pull-request-auto-merge-enabled-event.js';

describe('PullRequestAutoMergeEnabledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestAutoMergeEnabledEventSchema).toBeDefined();
    expect(typeof PullRequestAutoMergeEnabledEventSchema.parse).toBe('function');
    expect(typeof PullRequestAutoMergeEnabledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestAutoMergeEnabledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestAutoMergeEnabledEventTest = PullRequestAutoMergeEnabledEvent;
