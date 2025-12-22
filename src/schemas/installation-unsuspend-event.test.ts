/**
 * Auto-generated tests for InstallationUnsuspendEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type InstallationUnsuspendEvent,
  InstallationUnsuspendEventSchema,
} from './installation-unsuspend-event.js';

describe('InstallationUnsuspendEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(InstallationUnsuspendEventSchema).toBeDefined();
    expect(typeof InstallationUnsuspendEventSchema.parse).toBe('function');
    expect(typeof InstallationUnsuspendEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = InstallationUnsuspendEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _InstallationUnsuspendEventTest = InstallationUnsuspendEvent;
