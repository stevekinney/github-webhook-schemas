/**
 * Auto-generated tests for InstallationNewPermissionsAcceptedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type InstallationNewPermissionsAcceptedEvent,
  InstallationNewPermissionsAcceptedEventSchema,
} from './installation-new-permissions-accepted-event.js';

describe('InstallationNewPermissionsAcceptedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(InstallationNewPermissionsAcceptedEventSchema).toBeDefined();
    expect(typeof InstallationNewPermissionsAcceptedEventSchema.parse).toBe('function');
    expect(typeof InstallationNewPermissionsAcceptedEventSchema.safeParse).toBe(
      'function',
    );
  });

  it('should reject invalid data', () => {
    const result = InstallationNewPermissionsAcceptedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _InstallationNewPermissionsAcceptedEventTest =
  InstallationNewPermissionsAcceptedEvent;
