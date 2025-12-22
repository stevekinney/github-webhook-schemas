/**
 * Auto-generated tests for CommitCommentCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CommitCommentCreatedEvent,
  CommitCommentCreatedEventSchema,
} from './commit-comment-created-event.js';

describe('CommitCommentCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CommitCommentCreatedEventSchema).toBeDefined();
    expect(typeof CommitCommentCreatedEventSchema.parse).toBe('function');
    expect(typeof CommitCommentCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CommitCommentCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CommitCommentCreatedEventTest = CommitCommentCreatedEvent;
