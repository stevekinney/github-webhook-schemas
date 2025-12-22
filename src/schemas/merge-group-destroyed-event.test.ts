/**
 * Auto-generated tests for MergeGroupDestroyedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MergeGroupDestroyedEvent,
  MergeGroupDestroyedEventSchema,
} from './merge-group-destroyed-event.js';

describe('MergeGroupDestroyedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MergeGroupDestroyedEventSchema).toBeDefined();
    expect(typeof MergeGroupDestroyedEventSchema.parse).toBe('function');
    expect(typeof MergeGroupDestroyedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MergeGroupDestroyedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MergeGroupDestroyedEventTest = MergeGroupDestroyedEvent;
