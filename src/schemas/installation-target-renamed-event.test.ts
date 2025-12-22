/**
 * Auto-generated tests for InstallationTargetRenamedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type InstallationTargetRenamedEvent,
  InstallationTargetRenamedEventSchema,
} from './installation-target-renamed-event.js';

describe('InstallationTargetRenamedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(InstallationTargetRenamedEventSchema).toBeDefined();
    expect(typeof InstallationTargetRenamedEventSchema.parse).toBe('function');
    expect(typeof InstallationTargetRenamedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = InstallationTargetRenamedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _InstallationTargetRenamedEventTest = InstallationTargetRenamedEvent;
