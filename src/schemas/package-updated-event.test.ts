/**
 * Auto-generated tests for PackageUpdatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PackageUpdatedEvent,
  PackageUpdatedEventSchema,
} from './package-updated-event.js';

describe('PackageUpdatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PackageUpdatedEventSchema).toBeDefined();
    expect(typeof PackageUpdatedEventSchema.parse).toBe('function');
    expect(typeof PackageUpdatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PackageUpdatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PackageUpdatedEventTest = PackageUpdatedEvent;
