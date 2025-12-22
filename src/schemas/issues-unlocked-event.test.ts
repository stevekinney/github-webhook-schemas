/**
 * Auto-generated tests for IssuesUnlockedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesUnlockedEvent,
  IssuesUnlockedEventSchema,
} from './issues-unlocked-event.js';

describe('IssuesUnlockedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesUnlockedEventSchema).toBeDefined();
    expect(typeof IssuesUnlockedEventSchema.parse).toBe('function');
    expect(typeof IssuesUnlockedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesUnlockedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesUnlockedEventTest = IssuesUnlockedEvent;
