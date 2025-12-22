/**
 * Auto-generated tests for IssueCommentCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssueCommentCreatedEvent,
  IssueCommentCreatedEventSchema,
} from './issue-comment-created-event.js';

describe('IssueCommentCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssueCommentCreatedEventSchema).toBeDefined();
    expect(typeof IssueCommentCreatedEventSchema.parse).toBe('function');
    expect(typeof IssueCommentCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssueCommentCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssueCommentCreatedEventTest = IssueCommentCreatedEvent;
