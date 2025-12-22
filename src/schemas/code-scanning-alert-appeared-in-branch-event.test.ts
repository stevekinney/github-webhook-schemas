/**
 * Auto-generated tests for CodeScanningAlertAppearedInBranchEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CodeScanningAlertAppearedInBranchEvent,
  CodeScanningAlertAppearedInBranchEventSchema,
} from './code-scanning-alert-appeared-in-branch-event.js';

describe('CodeScanningAlertAppearedInBranchEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CodeScanningAlertAppearedInBranchEventSchema).toBeDefined();
    expect(typeof CodeScanningAlertAppearedInBranchEventSchema.parse).toBe('function');
    expect(typeof CodeScanningAlertAppearedInBranchEventSchema.safeParse).toBe(
      'function',
    );
  });

  it('should reject invalid data', () => {
    const result = CodeScanningAlertAppearedInBranchEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CodeScanningAlertAppearedInBranchEventTest =
  CodeScanningAlertAppearedInBranchEvent;
