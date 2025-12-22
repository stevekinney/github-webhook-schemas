/**
 * Auto-generated tests for CheckSuiteRequestedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CheckSuiteRequestedEvent,
  CheckSuiteRequestedEventSchema,
} from './check-suite-requested-event.js';

describe('CheckSuiteRequestedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CheckSuiteRequestedEventSchema).toBeDefined();
    expect(typeof CheckSuiteRequestedEventSchema.parse).toBe('function');
    expect(typeof CheckSuiteRequestedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CheckSuiteRequestedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CheckSuiteRequestedEventTest = CheckSuiteRequestedEvent;
