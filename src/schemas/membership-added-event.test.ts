/**
 * Auto-generated tests for MembershipAddedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MembershipAddedEvent,
  MembershipAddedEventSchema,
} from './membership-added-event.js';

describe('MembershipAddedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MembershipAddedEventSchema).toBeDefined();
    expect(typeof MembershipAddedEventSchema.parse).toBe('function');
    expect(typeof MembershipAddedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MembershipAddedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MembershipAddedEventTest = MembershipAddedEvent;
