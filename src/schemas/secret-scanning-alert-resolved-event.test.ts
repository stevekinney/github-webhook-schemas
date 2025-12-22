/**
 * Auto-generated tests for SecretScanningAlertResolvedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecretScanningAlertResolvedEvent,
  SecretScanningAlertResolvedEventSchema,
} from './secret-scanning-alert-resolved-event.js';

describe('SecretScanningAlertResolvedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecretScanningAlertResolvedEventSchema).toBeDefined();
    expect(typeof SecretScanningAlertResolvedEventSchema.parse).toBe('function');
    expect(typeof SecretScanningAlertResolvedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SecretScanningAlertResolvedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecretScanningAlertResolvedEventTest = SecretScanningAlertResolvedEvent;
