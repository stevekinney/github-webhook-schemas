/**
 * Auto-generated tests for SecretScanningAlertCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecretScanningAlertCreatedEvent,
  SecretScanningAlertCreatedEventSchema,
} from './secret-scanning-alert-created-event.js';

describe('SecretScanningAlertCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecretScanningAlertCreatedEventSchema).toBeDefined();
    expect(typeof SecretScanningAlertCreatedEventSchema.parse).toBe('function');
    expect(typeof SecretScanningAlertCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SecretScanningAlertCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecretScanningAlertCreatedEventTest = SecretScanningAlertCreatedEvent;
