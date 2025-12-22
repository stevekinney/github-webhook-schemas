/**
 * Auto-generated tests for IssuesClosedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesClosedEvent,
  IssuesClosedEventSchema,
} from './issues-closed-event.js';

describe('IssuesClosedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesClosedEventSchema).toBeDefined();
    expect(typeof IssuesClosedEventSchema.parse).toBe('function');
    expect(typeof IssuesClosedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesClosedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesClosedEventTest = IssuesClosedEvent;
