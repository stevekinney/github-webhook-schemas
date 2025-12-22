/**
 * Auto-generated tests for CreateEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type CreateEvent, CreateEventSchema } from './create-event.js';

describe('CreateEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CreateEventSchema).toBeDefined();
    expect(typeof CreateEventSchema.parse).toBe('function');
    expect(typeof CreateEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CreateEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CreateEventTest = CreateEvent;
