/**
 * Auto-generated tests for ForkEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type ForkEvent, ForkEventSchema } from './fork-event.js';

describe('ForkEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ForkEventSchema).toBeDefined();
    expect(typeof ForkEventSchema.parse).toBe('function');
    expect(typeof ForkEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ForkEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ForkEventTest = ForkEvent;
