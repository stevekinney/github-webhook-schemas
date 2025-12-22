/**
 * Auto-generated tests for InstallationCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type InstallationCreatedEvent,
  InstallationCreatedEventSchema,
} from './installation-created-event.js';

describe('InstallationCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(InstallationCreatedEventSchema).toBeDefined();
    expect(typeof InstallationCreatedEventSchema.parse).toBe('function');
    expect(typeof InstallationCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = InstallationCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _InstallationCreatedEventTest = InstallationCreatedEvent;
