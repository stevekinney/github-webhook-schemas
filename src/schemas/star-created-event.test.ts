/**
 * Auto-generated tests for StarCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type StarCreatedEvent, StarCreatedEventSchema } from './star-created-event.js';

describe('StarCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(StarCreatedEventSchema).toBeDefined();
    expect(typeof StarCreatedEventSchema.parse).toBe('function');
    expect(typeof StarCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = StarCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _StarCreatedEventTest = StarCreatedEvent;
