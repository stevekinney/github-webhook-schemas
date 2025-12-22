/**
 * Auto-generated tests for BranchProtectionConfigurationEnabledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type BranchProtectionConfigurationEnabledEvent,
  BranchProtectionConfigurationEnabledEventSchema,
} from './branch-protection-configuration-enabled-event.js';

describe('BranchProtectionConfigurationEnabledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(BranchProtectionConfigurationEnabledEventSchema).toBeDefined();
    expect(typeof BranchProtectionConfigurationEnabledEventSchema.parse).toBe('function');
    expect(typeof BranchProtectionConfigurationEnabledEventSchema.safeParse).toBe(
      'function',
    );
  });

  it('should reject invalid data', () => {
    const result = BranchProtectionConfigurationEnabledEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _BranchProtectionConfigurationEnabledEventTest =
  BranchProtectionConfigurationEnabledEvent;
