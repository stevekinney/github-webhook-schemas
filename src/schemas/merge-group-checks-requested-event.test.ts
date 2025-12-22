/**
 * Auto-generated tests for MergeGroupChecksRequestedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MergeGroupChecksRequestedEvent,
  MergeGroupChecksRequestedEventSchema,
} from './merge-group-checks-requested-event.js';

describe('MergeGroupChecksRequestedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MergeGroupChecksRequestedEventSchema).toBeDefined();
    expect(typeof MergeGroupChecksRequestedEventSchema.parse).toBe('function');
    expect(typeof MergeGroupChecksRequestedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MergeGroupChecksRequestedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MergeGroupChecksRequestedEventTest = MergeGroupChecksRequestedEvent;
