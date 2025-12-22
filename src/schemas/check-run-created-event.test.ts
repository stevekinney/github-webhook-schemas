/**
 * Auto-generated tests for CheckRunCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type CheckRunCreatedEvent,
  CheckRunCreatedEventSchema,
} from './check-run-created-event.js';

describe('CheckRunCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(CheckRunCreatedEventSchema).toBeDefined();
    expect(typeof CheckRunCreatedEventSchema.parse).toBe('function');
    expect(typeof CheckRunCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = CheckRunCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _CheckRunCreatedEventTest = CheckRunCreatedEvent;
