/**
 * Auto-generated tests for ReleaseUnpublishedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ReleaseUnpublishedEvent,
  ReleaseUnpublishedEventSchema,
} from './release-unpublished-event.js';

describe('ReleaseUnpublishedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ReleaseUnpublishedEventSchema).toBeDefined();
    expect(typeof ReleaseUnpublishedEventSchema.parse).toBe('function');
    expect(typeof ReleaseUnpublishedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ReleaseUnpublishedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ReleaseUnpublishedEventTest = ReleaseUnpublishedEvent;
