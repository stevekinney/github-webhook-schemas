/**
 * Auto-generated tests for SecretScanningAlertRevokedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecretScanningAlertRevokedEvent,
  SecretScanningAlertRevokedEventSchema,
} from './secret-scanning-alert-revoked-event.js';

describe('SecretScanningAlertRevokedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecretScanningAlertRevokedEventSchema).toBeDefined();
    expect(typeof SecretScanningAlertRevokedEventSchema.parse).toBe('function');
    expect(typeof SecretScanningAlertRevokedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SecretScanningAlertRevokedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecretScanningAlertRevokedEventTest = SecretScanningAlertRevokedEvent;
