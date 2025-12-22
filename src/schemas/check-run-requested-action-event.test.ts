/**
 * Auto-generated tests for CheckRunRequestedActionEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CheckRunRequestedActionEvent,
  CheckRunRequestedActionEventSchema,
} from './check-run-requested-action-event.js';

describe('CheckRunRequestedActionEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CheckRunRequestedActionEventSchema).toBeDefined();
    expect(typeof CheckRunRequestedActionEventSchema.parse).toBe('function');
    expect(typeof CheckRunRequestedActionEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CheckRunRequestedActionEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CheckRunRequestedActionEventTest = CheckRunRequestedActionEvent;
