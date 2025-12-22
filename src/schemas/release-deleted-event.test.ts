/**
 * Auto-generated tests for ReleaseDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ReleaseDeletedEvent,
  ReleaseDeletedEventSchema,
} from './release-deleted-event.js';

describe('ReleaseDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ReleaseDeletedEventSchema).toBeDefined();
    expect(typeof ReleaseDeletedEventSchema.parse).toBe('function');
    expect(typeof ReleaseDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ReleaseDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ReleaseDeletedEventTest = ReleaseDeletedEvent;
