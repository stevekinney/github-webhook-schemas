/**
 * Auto-generated tests for CodeScanningAlertReopenedByUserEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CodeScanningAlertReopenedByUserEvent,
  CodeScanningAlertReopenedByUserEventSchema,
} from './code-scanning-alert-reopened-by-user-event.js';

describe('CodeScanningAlertReopenedByUserEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CodeScanningAlertReopenedByUserEventSchema).toBeDefined();
    expect(typeof CodeScanningAlertReopenedByUserEventSchema.parse).toBe('function');
    expect(typeof CodeScanningAlertReopenedByUserEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CodeScanningAlertReopenedByUserEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CodeScanningAlertReopenedByUserEventTest =
  CodeScanningAlertReopenedByUserEvent;
