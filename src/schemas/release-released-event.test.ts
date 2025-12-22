/**
 * Auto-generated tests for ReleaseReleasedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ReleaseReleasedEvent,
  ReleaseReleasedEventSchema,
} from './release-released-event.js';

describe('ReleaseReleasedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ReleaseReleasedEventSchema).toBeDefined();
    expect(typeof ReleaseReleasedEventSchema.parse).toBe('function');
    expect(typeof ReleaseReleasedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ReleaseReleasedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ReleaseReleasedEventTest = ReleaseReleasedEvent;
