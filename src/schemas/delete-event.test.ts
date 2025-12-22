/**
 * Auto-generated tests for DeleteEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type DeleteEvent, DeleteEventSchema } from './delete-event.js';

describe('DeleteEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeleteEventSchema).toBeDefined();
    expect(typeof DeleteEventSchema.parse).toBe('function');
    expect(typeof DeleteEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DeleteEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeleteEventTest = DeleteEvent;
