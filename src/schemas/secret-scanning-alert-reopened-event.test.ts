/**
 * Auto-generated tests for SecretScanningAlertReopenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecretScanningAlertReopenedEvent,
  SecretScanningAlertReopenedEventSchema,
} from './secret-scanning-alert-reopened-event.js';

describe('SecretScanningAlertReopenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecretScanningAlertReopenedEventSchema).toBeDefined();
    expect(typeof SecretScanningAlertReopenedEventSchema.parse).toBe('function');
    expect(typeof SecretScanningAlertReopenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SecretScanningAlertReopenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecretScanningAlertReopenedEventTest = SecretScanningAlertReopenedEvent;
