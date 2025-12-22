/**
 * Auto-generated tests for ReleasePublishedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ReleasePublishedEvent,
  ReleasePublishedEventSchema,
} from './release-published-event.js';

describe('ReleasePublishedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ReleasePublishedEventSchema).toBeDefined();
    expect(typeof ReleasePublishedEventSchema.parse).toBe('function');
    expect(typeof ReleasePublishedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ReleasePublishedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ReleasePublishedEventTest = ReleasePublishedEvent;
