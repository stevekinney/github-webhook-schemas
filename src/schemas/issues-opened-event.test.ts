/**
 * Auto-generated tests for IssuesOpenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesOpenedEvent,
  IssuesOpenedEventSchema,
} from './issues-opened-event.js';

describe('IssuesOpenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesOpenedEventSchema).toBeDefined();
    expect(typeof IssuesOpenedEventSchema.parse).toBe('function');
    expect(typeof IssuesOpenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesOpenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesOpenedEventTest = IssuesOpenedEvent;
