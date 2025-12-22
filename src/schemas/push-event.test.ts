/**
 * Auto-generated tests for PushEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type PushEvent, PushEventSchema } from './push-event.js';

describe('PushEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PushEventSchema).toBeDefined();
    expect(typeof PushEventSchema.parse).toBe('function');
    expect(typeof PushEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PushEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PushEventTest = PushEvent;
