/**
 * Auto-generated tests for RegistryPackagePublishedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RegistryPackagePublishedEvent,
  RegistryPackagePublishedEventSchema,
} from './registry-package-published-event.js';

describe('RegistryPackagePublishedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RegistryPackagePublishedEventSchema).toBeDefined();
    expect(typeof RegistryPackagePublishedEventSchema.parse).toBe('function');
    expect(typeof RegistryPackagePublishedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RegistryPackagePublishedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RegistryPackagePublishedEventTest = RegistryPackagePublishedEvent;
