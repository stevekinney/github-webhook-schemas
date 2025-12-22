/**
 * Auto-generated tests for PackagePublishedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PackagePublishedEvent,
  PackagePublishedEventSchema,
} from './package-published-event.js';

describe('PackagePublishedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PackagePublishedEventSchema).toBeDefined();
    expect(typeof PackagePublishedEventSchema.parse).toBe('function');
    expect(typeof PackagePublishedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PackagePublishedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PackagePublishedEventTest = PackagePublishedEvent;
