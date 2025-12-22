/**
 * Auto-generated tests for CheckRunRerequestedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CheckRunRerequestedEvent,
  CheckRunRerequestedEventSchema,
} from './check-run-rerequested-event.js';

describe('CheckRunRerequestedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CheckRunRerequestedEventSchema).toBeDefined();
    expect(typeof CheckRunRerequestedEventSchema.parse).toBe('function');
    expect(typeof CheckRunRerequestedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CheckRunRerequestedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CheckRunRerequestedEventTest = CheckRunRerequestedEvent;
