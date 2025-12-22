/**
 * Auto-generated tests for GollumEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type GollumEvent, GollumEventSchema } from './gollum-event.js';

describe('GollumEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(GollumEventSchema).toBeDefined();
    expect(typeof GollumEventSchema.parse).toBe('function');
    expect(typeof GollumEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = GollumEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _GollumEventTest = GollumEvent;
