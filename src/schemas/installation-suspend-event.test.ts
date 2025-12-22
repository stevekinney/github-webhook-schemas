/**
 * Auto-generated tests for InstallationSuspendEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type InstallationSuspendEvent,
  InstallationSuspendEventSchema,
} from './installation-suspend-event.js';

describe('InstallationSuspendEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(InstallationSuspendEventSchema).toBeDefined();
    expect(typeof InstallationSuspendEventSchema.parse).toBe('function');
    expect(typeof InstallationSuspendEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = InstallationSuspendEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _InstallationSuspendEventTest = InstallationSuspendEvent;
