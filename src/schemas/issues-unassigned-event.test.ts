/**
 * Auto-generated tests for IssuesUnassignedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesUnassignedEvent,
  IssuesUnassignedEventSchema,
} from './issues-unassigned-event.js';

describe('IssuesUnassignedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesUnassignedEventSchema).toBeDefined();
    expect(typeof IssuesUnassignedEventSchema.parse).toBe('function');
    expect(typeof IssuesUnassignedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesUnassignedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesUnassignedEventTest = IssuesUnassignedEvent;
