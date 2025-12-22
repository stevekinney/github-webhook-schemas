/**
 * Auto-generated tests for IssuesLockedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesLockedEvent,
  IssuesLockedEventSchema,
} from './issues-locked-event.js';

describe('IssuesLockedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesLockedEventSchema).toBeDefined();
    expect(typeof IssuesLockedEventSchema.parse).toBe('function');
    expect(typeof IssuesLockedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesLockedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesLockedEventTest = IssuesLockedEvent;
