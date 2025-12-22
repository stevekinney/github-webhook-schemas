/**
 * Auto-generated tests for LabelEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type LabelEditedEvent, LabelEditedEventSchema } from './label-edited-event.js';

describe('LabelEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(LabelEditedEventSchema).toBeDefined();
    expect(typeof LabelEditedEventSchema.parse).toBe('function');
    expect(typeof LabelEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = LabelEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _LabelEditedEventTest = LabelEditedEvent;
