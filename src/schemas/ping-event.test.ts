/**
 * Auto-generated tests for PingEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type PingEvent, PingEventSchema } from './ping-event.js';

describe('PingEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PingEventSchema).toBeDefined();
    expect(typeof PingEventSchema.parse).toBe('function');
    expect(typeof PingEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PingEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PingEventTest = PingEvent;
