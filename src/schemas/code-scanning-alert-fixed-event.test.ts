/**
 * Auto-generated tests for CodeScanningAlertFixedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CodeScanningAlertFixedEvent,
  CodeScanningAlertFixedEventSchema,
} from './code-scanning-alert-fixed-event.js';

describe('CodeScanningAlertFixedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CodeScanningAlertFixedEventSchema).toBeDefined();
    expect(typeof CodeScanningAlertFixedEventSchema.parse).toBe('function');
    expect(typeof CodeScanningAlertFixedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CodeScanningAlertFixedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CodeScanningAlertFixedEventTest = CodeScanningAlertFixedEvent;
