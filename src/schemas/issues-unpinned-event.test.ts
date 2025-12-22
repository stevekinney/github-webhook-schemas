/**
 * Auto-generated tests for IssuesUnpinnedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesUnpinnedEvent,
  IssuesUnpinnedEventSchema,
} from './issues-unpinned-event.js';

describe('IssuesUnpinnedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesUnpinnedEventSchema).toBeDefined();
    expect(typeof IssuesUnpinnedEventSchema.parse).toBe('function');
    expect(typeof IssuesUnpinnedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesUnpinnedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesUnpinnedEventTest = IssuesUnpinnedEvent;
