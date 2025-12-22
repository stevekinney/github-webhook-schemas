/**
 * Auto-generated tests for IssuesPinnedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesPinnedEvent,
  IssuesPinnedEventSchema,
} from './issues-pinned-event.js';

describe('IssuesPinnedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesPinnedEventSchema).toBeDefined();
    expect(typeof IssuesPinnedEventSchema.parse).toBe('function');
    expect(typeof IssuesPinnedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesPinnedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesPinnedEventTest = IssuesPinnedEvent;
