/**
 * Auto-generated tests for IssueCommentDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssueCommentDeletedEvent,
  IssueCommentDeletedEventSchema,
} from './issue-comment-deleted-event.js';

describe('IssueCommentDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssueCommentDeletedEventSchema).toBeDefined();
    expect(typeof IssueCommentDeletedEventSchema.parse).toBe('function');
    expect(typeof IssueCommentDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssueCommentDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssueCommentDeletedEventTest = IssueCommentDeletedEvent;
