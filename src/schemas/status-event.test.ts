/**
 * Auto-generated tests for StatusEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type StatusEvent, StatusEventSchema } from './status-event.js';

describe('StatusEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(StatusEventSchema).toBeDefined();
    expect(typeof StatusEventSchema.parse).toBe('function');
    expect(typeof StatusEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = StatusEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _StatusEventTest = StatusEvent;
