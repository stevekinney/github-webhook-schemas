/**
 * Auto-generated tests for CodeScanningAlertClosedByUserEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CodeScanningAlertClosedByUserEvent,
  CodeScanningAlertClosedByUserEventSchema,
} from './code-scanning-alert-closed-by-user-event.js';

describe('CodeScanningAlertClosedByUserEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CodeScanningAlertClosedByUserEventSchema).toBeDefined();
    expect(typeof CodeScanningAlertClosedByUserEventSchema.parse).toBe('function');
    expect(typeof CodeScanningAlertClosedByUserEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CodeScanningAlertClosedByUserEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CodeScanningAlertClosedByUserEventTest = CodeScanningAlertClosedByUserEvent;
