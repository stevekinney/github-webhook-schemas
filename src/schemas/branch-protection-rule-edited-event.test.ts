/**
 * Auto-generated tests for BranchProtectionRuleEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type BranchProtectionRuleEditedEvent,
  BranchProtectionRuleEditedEventSchema,
} from './branch-protection-rule-edited-event.js';

describe('BranchProtectionRuleEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(BranchProtectionRuleEditedEventSchema).toBeDefined();
    expect(typeof BranchProtectionRuleEditedEventSchema.parse).toBe('function');
    expect(typeof BranchProtectionRuleEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = BranchProtectionRuleEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _BranchProtectionRuleEditedEventTest = BranchProtectionRuleEditedEvent;
