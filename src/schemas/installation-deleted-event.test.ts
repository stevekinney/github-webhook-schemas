/**
 * Auto-generated tests for InstallationDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type InstallationDeletedEvent,
  InstallationDeletedEventSchema,
} from './installation-deleted-event.js';

describe('InstallationDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(InstallationDeletedEventSchema).toBeDefined();
    expect(typeof InstallationDeletedEventSchema.parse).toBe('function');
    expect(typeof InstallationDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = InstallationDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _InstallationDeletedEventTest = InstallationDeletedEvent;
