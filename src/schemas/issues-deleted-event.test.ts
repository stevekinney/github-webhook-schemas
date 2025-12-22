/**
 * Auto-generated tests for IssuesDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesDeletedEvent,
  IssuesDeletedEventSchema,
} from './issues-deleted-event.js';

describe('IssuesDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesDeletedEventSchema).toBeDefined();
    expect(typeof IssuesDeletedEventSchema.parse).toBe('function');
    expect(typeof IssuesDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesDeletedEventTest = IssuesDeletedEvent;
