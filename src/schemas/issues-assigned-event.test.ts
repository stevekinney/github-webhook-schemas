/**
 * Auto-generated tests for IssuesAssignedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesAssignedEvent,
  IssuesAssignedEventSchema,
} from './issues-assigned-event.js';

describe('IssuesAssignedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesAssignedEventSchema).toBeDefined();
    expect(typeof IssuesAssignedEventSchema.parse).toBe('function');
    expect(typeof IssuesAssignedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesAssignedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesAssignedEventTest = IssuesAssignedEvent;
