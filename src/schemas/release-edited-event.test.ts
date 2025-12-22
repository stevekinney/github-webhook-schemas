/**
 * Auto-generated tests for ReleaseEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ReleaseEditedEvent,
  ReleaseEditedEventSchema,
} from './release-edited-event.js';

describe('ReleaseEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ReleaseEditedEventSchema).toBeDefined();
    expect(typeof ReleaseEditedEventSchema.parse).toBe('function');
    expect(typeof ReleaseEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ReleaseEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ReleaseEditedEventTest = ReleaseEditedEvent;
