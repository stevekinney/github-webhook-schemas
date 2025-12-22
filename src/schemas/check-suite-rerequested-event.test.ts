/**
 * Auto-generated tests for CheckSuiteRerequestedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CheckSuiteRerequestedEvent,
  CheckSuiteRerequestedEventSchema,
} from './check-suite-rerequested-event.js';

describe('CheckSuiteRerequestedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CheckSuiteRerequestedEventSchema).toBeDefined();
    expect(typeof CheckSuiteRerequestedEventSchema.parse).toBe('function');
    expect(typeof CheckSuiteRerequestedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CheckSuiteRerequestedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CheckSuiteRerequestedEventTest = CheckSuiteRerequestedEvent;
