/**
 * Auto-generated tests for ReleaseCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type ReleaseCreatedEvent,
  ReleaseCreatedEventSchema,
} from './release-created-event.js';

describe('ReleaseCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(ReleaseCreatedEventSchema).toBeDefined();
    expect(typeof ReleaseCreatedEventSchema.parse).toBe('function');
    expect(typeof ReleaseCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = ReleaseCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _ReleaseCreatedEventTest = ReleaseCreatedEvent;
