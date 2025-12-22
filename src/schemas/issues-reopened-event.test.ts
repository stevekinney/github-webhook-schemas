/**
 * Auto-generated tests for IssuesReopenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesReopenedEvent,
  IssuesReopenedEventSchema,
} from './issues-reopened-event.js';

describe('IssuesReopenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesReopenedEventSchema).toBeDefined();
    expect(typeof IssuesReopenedEventSchema.parse).toBe('function');
    expect(typeof IssuesReopenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesReopenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesReopenedEventTest = IssuesReopenedEvent;
