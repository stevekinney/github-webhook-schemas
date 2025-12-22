/**
 * Auto-generated tests for CodeScanningAlertCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CodeScanningAlertCreatedEvent,
  CodeScanningAlertCreatedEventSchema,
} from './code-scanning-alert-created-event.js';

describe('CodeScanningAlertCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CodeScanningAlertCreatedEventSchema).toBeDefined();
    expect(typeof CodeScanningAlertCreatedEventSchema.parse).toBe('function');
    expect(typeof CodeScanningAlertCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CodeScanningAlertCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CodeScanningAlertCreatedEventTest = CodeScanningAlertCreatedEvent;
