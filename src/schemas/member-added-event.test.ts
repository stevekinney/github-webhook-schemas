/**
 * Auto-generated tests for MemberAddedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type MemberAddedEvent, MemberAddedEventSchema } from './member-added-event.js';

describe('MemberAddedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MemberAddedEventSchema).toBeDefined();
    expect(typeof MemberAddedEventSchema.parse).toBe('function');
    expect(typeof MemberAddedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MemberAddedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MemberAddedEventTest = MemberAddedEvent;
