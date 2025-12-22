/**
 * Auto-generated tests for MembershipRemovedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MembershipRemovedEvent,
  MembershipRemovedEventSchema,
} from './membership-removed-event.js';

describe('MembershipRemovedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MembershipRemovedEventSchema).toBeDefined();
    expect(typeof MembershipRemovedEventSchema.parse).toBe('function');
    expect(typeof MembershipRemovedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MembershipRemovedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MembershipRemovedEventTest = MembershipRemovedEvent;
