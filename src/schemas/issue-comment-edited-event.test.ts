/**
 * Auto-generated tests for IssueCommentEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssueCommentEditedEvent,
  IssueCommentEditedEventSchema,
} from './issue-comment-edited-event.js';

describe('IssueCommentEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssueCommentEditedEventSchema).toBeDefined();
    expect(typeof IssueCommentEditedEventSchema.parse).toBe('function');
    expect(typeof IssueCommentEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssueCommentEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssueCommentEditedEventTest = IssueCommentEditedEvent;
