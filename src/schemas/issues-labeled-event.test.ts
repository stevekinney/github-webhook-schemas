/**
 * Auto-generated tests for IssuesLabeledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type IssuesLabeledEvent,
  IssuesLabeledEventSchema,
} from './issues-labeled-event.js';

describe('IssuesLabeledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(IssuesLabeledEventSchema).toBeDefined();
    expect(typeof IssuesLabeledEventSchema.parse).toBe('function');
    expect(typeof IssuesLabeledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = IssuesLabeledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _IssuesLabeledEventTest = IssuesLabeledEvent;
