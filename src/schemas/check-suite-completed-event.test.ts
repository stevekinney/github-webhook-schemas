/**
 * Auto-generated tests for CheckSuiteCompletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CheckSuiteCompletedEvent,
  CheckSuiteCompletedEventSchema,
} from './check-suite-completed-event.js';

describe('CheckSuiteCompletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CheckSuiteCompletedEventSchema).toBeDefined();
    expect(typeof CheckSuiteCompletedEventSchema.parse).toBe('function');
    expect(typeof CheckSuiteCompletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CheckSuiteCompletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CheckSuiteCompletedEventTest = CheckSuiteCompletedEvent;
