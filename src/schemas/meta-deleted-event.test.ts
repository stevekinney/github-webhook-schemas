/**
 * Auto-generated tests for MetaDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type MetaDeletedEvent, MetaDeletedEventSchema } from './meta-deleted-event.js';

describe('MetaDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MetaDeletedEventSchema).toBeDefined();
    expect(typeof MetaDeletedEventSchema.parse).toBe('function');
    expect(typeof MetaDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MetaDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MetaDeletedEventTest = MetaDeletedEvent;
