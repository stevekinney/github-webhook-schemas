/**
 * Auto-generated tests for BranchProtectionRuleCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type BranchProtectionRuleCreatedEvent,
  BranchProtectionRuleCreatedEventSchema,
} from './branch-protection-rule-created-event.js';

describe('BranchProtectionRuleCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(BranchProtectionRuleCreatedEventSchema).toBeDefined();
    expect(typeof BranchProtectionRuleCreatedEventSchema.parse).toBe('function');
    expect(typeof BranchProtectionRuleCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = BranchProtectionRuleCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _BranchProtectionRuleCreatedEventTest = BranchProtectionRuleCreatedEvent;
