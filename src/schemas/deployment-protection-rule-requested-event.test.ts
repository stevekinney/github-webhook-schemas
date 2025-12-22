/**
 * Auto-generated tests for DeploymentProtectionRuleRequestedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DeploymentProtectionRuleRequestedEvent,
  DeploymentProtectionRuleRequestedEventSchema,
} from './deployment-protection-rule-requested-event.js';

describe('DeploymentProtectionRuleRequestedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeploymentProtectionRuleRequestedEventSchema).toBeDefined();
    expect(typeof DeploymentProtectionRuleRequestedEventSchema.parse).toBe('function');
    expect(typeof DeploymentProtectionRuleRequestedEventSchema.safeParse).toBe(
      'function',
    );
  });

  it('should reject invalid data', () => {
    const result = DeploymentProtectionRuleRequestedEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeploymentProtectionRuleRequestedEventTest =
  DeploymentProtectionRuleRequestedEvent;
