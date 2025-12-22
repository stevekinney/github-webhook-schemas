/**
 * Auto-generated tests for SecretScanningAlertLocationCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecretScanningAlertLocationCreatedEvent,
  SecretScanningAlertLocationCreatedEventSchema,
} from './secret-scanning-alert-location-created-event.js';

describe('SecretScanningAlertLocationCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecretScanningAlertLocationCreatedEventSchema).toBeDefined();
    expect(typeof SecretScanningAlertLocationCreatedEventSchema.parse).toBe('function');
    expect(typeof SecretScanningAlertLocationCreatedEventSchema.safeParse).toBe(
      'function',
    );
  });

  it('should reject invalid data', () => {
    const result = SecretScanningAlertLocationCreatedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecretScanningAlertLocationCreatedEventTest =
  SecretScanningAlertLocationCreatedEvent;
