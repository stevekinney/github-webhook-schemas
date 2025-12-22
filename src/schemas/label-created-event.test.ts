/**
 * Auto-generated tests for LabelCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type LabelCreatedEvent,
  LabelCreatedEventSchema,
} from './label-created-event.js';

describe('LabelCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(LabelCreatedEventSchema).toBeDefined();
    expect(typeof LabelCreatedEventSchema.parse).toBe('function');
    expect(typeof LabelCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = LabelCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _LabelCreatedEventTest = LabelCreatedEvent;
