/**
 * Auto-generated tests for OrgBlockUnblockedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type OrgBlockUnblockedEvent,
  OrgBlockUnblockedEventSchema,
} from './org-block-unblocked-event.js';

describe('OrgBlockUnblockedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(OrgBlockUnblockedEventSchema).toBeDefined();
    expect(typeof OrgBlockUnblockedEventSchema.parse).toBe('function');
    expect(typeof OrgBlockUnblockedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = OrgBlockUnblockedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _OrgBlockUnblockedEventTest = OrgBlockUnblockedEvent;
