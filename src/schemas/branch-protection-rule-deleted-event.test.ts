/**
 * Auto-generated tests for BranchProtectionRuleDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type BranchProtectionRuleDeletedEvent,
  BranchProtectionRuleDeletedEventSchema,
} from './branch-protection-rule-deleted-event.js';

describe('BranchProtectionRuleDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(BranchProtectionRuleDeletedEventSchema).toBeDefined();
    expect(typeof BranchProtectionRuleDeletedEventSchema.parse).toBe('function');
    expect(typeof BranchProtectionRuleDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = BranchProtectionRuleDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _BranchProtectionRuleDeletedEventTest = BranchProtectionRuleDeletedEvent;
