/**
 * Auto-generated tests for IssuesUnlabeledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesUnlabeledEvent,
  IssuesUnlabeledEventSchema,
} from './issues-unlabeled-event.js';

describe('IssuesUnlabeledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesUnlabeledEventSchema).toBeDefined();
    expect(typeof IssuesUnlabeledEventSchema.parse).toBe('function');
    expect(typeof IssuesUnlabeledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesUnlabeledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesUnlabeledEventTest = IssuesUnlabeledEvent;
