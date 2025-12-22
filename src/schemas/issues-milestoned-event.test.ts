/**
 * Auto-generated tests for IssuesMilestonedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesMilestonedEvent,
  IssuesMilestonedEventSchema,
} from './issues-milestoned-event.js';

describe('IssuesMilestonedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesMilestonedEventSchema).toBeDefined();
    expect(typeof IssuesMilestonedEventSchema.parse).toBe('function');
    expect(typeof IssuesMilestonedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesMilestonedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesMilestonedEventTest = IssuesMilestonedEvent;
