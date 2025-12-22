/**
 * Auto-generated tests for MemberEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MemberEditedEvent,
  MemberEditedEventSchema,
} from './member-edited-event.js';

describe('MemberEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MemberEditedEventSchema).toBeDefined();
    expect(typeof MemberEditedEventSchema.parse).toBe('function');
    expect(typeof MemberEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MemberEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MemberEditedEventTest = MemberEditedEvent;
