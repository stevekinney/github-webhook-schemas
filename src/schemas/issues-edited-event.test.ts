/**
 * Auto-generated tests for IssuesEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesEditedEvent,
  IssuesEditedEventSchema,
} from './issues-edited-event.js';

describe('IssuesEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesEditedEventSchema).toBeDefined();
    expect(typeof IssuesEditedEventSchema.parse).toBe('function');
    expect(typeof IssuesEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesEditedEventTest = IssuesEditedEvent;
