/**
 * Auto-generated tests for LabelDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type LabelDeletedEvent,
  LabelDeletedEventSchema,
} from './label-deleted-event.js';

describe('LabelDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(LabelDeletedEventSchema).toBeDefined();
    expect(typeof LabelDeletedEventSchema.parse).toBe('function');
    expect(typeof LabelDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = LabelDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _LabelDeletedEventTest = LabelDeletedEvent;
