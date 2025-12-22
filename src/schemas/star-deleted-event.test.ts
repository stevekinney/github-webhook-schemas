/**
 * Auto-generated tests for StarDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type StarDeletedEvent, StarDeletedEventSchema } from './star-deleted-event.js';

describe('StarDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(StarDeletedEventSchema).toBeDefined();
    expect(typeof StarDeletedEventSchema.parse).toBe('function');
    expect(typeof StarDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = StarDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _StarDeletedEventTest = StarDeletedEvent;
