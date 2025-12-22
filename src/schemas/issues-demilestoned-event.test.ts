/**
 * Auto-generated tests for IssuesDemilestonedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesDemilestonedEvent,
  IssuesDemilestonedEventSchema,
} from './issues-demilestoned-event.js';

describe('IssuesDemilestonedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesDemilestonedEventSchema).toBeDefined();
    expect(typeof IssuesDemilestonedEventSchema.parse).toBe('function');
    expect(typeof IssuesDemilestonedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesDemilestonedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesDemilestonedEventTest = IssuesDemilestonedEvent;
