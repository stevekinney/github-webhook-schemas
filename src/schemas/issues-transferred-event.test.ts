/**
 * Auto-generated tests for IssuesTransferredEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesTransferredEvent,
  IssuesTransferredEventSchema,
} from './issues-transferred-event.js';

describe('IssuesTransferredEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesTransferredEventSchema).toBeDefined();
    expect(typeof IssuesTransferredEventSchema.parse).toBe('function');
    expect(typeof IssuesTransferredEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesTransferredEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesTransferredEventTest = IssuesTransferredEvent;
