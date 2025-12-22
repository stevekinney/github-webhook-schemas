/**
 * Auto-generated tests for OrgBlockBlockedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type OrgBlockBlockedEvent,
  OrgBlockBlockedEventSchema,
} from './org-block-blocked-event.js';

describe('OrgBlockBlockedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(OrgBlockBlockedEventSchema).toBeDefined();
    expect(typeof OrgBlockBlockedEventSchema.parse).toBe('function');
    expect(typeof OrgBlockBlockedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = OrgBlockBlockedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _OrgBlockBlockedEventTest = OrgBlockBlockedEvent;
