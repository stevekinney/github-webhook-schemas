/**
 * Auto-generated tests for CheckRunCompletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CheckRunCompletedEvent,
  CheckRunCompletedEventSchema,
} from './check-run-completed-event.js';

describe('CheckRunCompletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CheckRunCompletedEventSchema).toBeDefined();
    expect(typeof CheckRunCompletedEventSchema.parse).toBe('function');
    expect(typeof CheckRunCompletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CheckRunCompletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CheckRunCompletedEventTest = CheckRunCompletedEvent;
