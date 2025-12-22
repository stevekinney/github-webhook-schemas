/**
 * Auto-generated tests for PublicEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type PublicEvent, PublicEventSchema } from './public-event.js';

describe('PublicEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PublicEventSchema).toBeDefined();
    expect(typeof PublicEventSchema.parse).toBe('function');
    expect(typeof PublicEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PublicEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PublicEventTest = PublicEvent;
