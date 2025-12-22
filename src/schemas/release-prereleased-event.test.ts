/**
 * Auto-generated tests for ReleasePrereleasedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ReleasePrereleasedEvent,
  ReleasePrereleasedEventSchema,
} from './release-prereleased-event.js';

describe('ReleasePrereleasedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ReleasePrereleasedEventSchema).toBeDefined();
    expect(typeof ReleasePrereleasedEventSchema.parse).toBe('function');
    expect(typeof ReleasePrereleasedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ReleasePrereleasedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ReleasePrereleasedEventTest = ReleasePrereleasedEvent;
