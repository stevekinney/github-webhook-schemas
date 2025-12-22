/**
 * Auto-generated tests for BranchProtectionConfigurationDisabledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type BranchProtectionConfigurationDisabledEvent,
  BranchProtectionConfigurationDisabledEventSchema,
} from './branch-protection-configuration-disabled-event.js';

describe('BranchProtectionConfigurationDisabledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(BranchProtectionConfigurationDisabledEventSchema).toBeDefined();
    expect(typeof BranchProtectionConfigurationDisabledEventSchema.parse).toBe(
      'function',
    );
    expect(typeof BranchProtectionConfigurationDisabledEventSchema.safeParse).toBe(
      'function',
    );
  });

  it('should reject invalid data', () => {
    const result = BranchProtectionConfigurationDisabledEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _BranchProtectionConfigurationDisabledEventTest =
  BranchProtectionConfigurationDisabledEvent;
