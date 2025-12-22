/**
 * Auto-generated tests for MemberRemovedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MemberRemovedEvent,
  MemberRemovedEventSchema,
} from './member-removed-event.js';

describe('MemberRemovedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MemberRemovedEventSchema).toBeDefined();
    expect(typeof MemberRemovedEventSchema.parse).toBe('function');
    expect(typeof MemberRemovedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MemberRemovedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MemberRemovedEventTest = MemberRemovedEvent;
