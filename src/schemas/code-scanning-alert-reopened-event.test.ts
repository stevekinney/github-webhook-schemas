/**
 * Auto-generated tests for CodeScanningAlertReopenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CodeScanningAlertReopenedEvent,
  CodeScanningAlertReopenedEventSchema,
} from './code-scanning-alert-reopened-event.js';

describe('CodeScanningAlertReopenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CodeScanningAlertReopenedEventSchema).toBeDefined();
    expect(typeof CodeScanningAlertReopenedEventSchema.parse).toBe('function');
    expect(typeof CodeScanningAlertReopenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CodeScanningAlertReopenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CodeScanningAlertReopenedEventTest = CodeScanningAlertReopenedEvent;
