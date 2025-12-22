/**
 * Auto-generated tests for RegistryPackageUpdatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type RegistryPackageUpdatedEvent,
  RegistryPackageUpdatedEventSchema,
} from './registry-package-updated-event.js';

describe('RegistryPackageUpdatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(RegistryPackageUpdatedEventSchema).toBeDefined();
    expect(typeof RegistryPackageUpdatedEventSchema.parse).toBe('function');
    expect(typeof RegistryPackageUpdatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = RegistryPackageUpdatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _RegistryPackageUpdatedEventTest = RegistryPackageUpdatedEvent;
