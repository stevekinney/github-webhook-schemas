/**
 * Auto-generated tests for MarketplacePurchasePendingChangeEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MarketplacePurchasePendingChangeEvent,
  MarketplacePurchasePendingChangeEventSchema,
} from './marketplace-purchase-pending-change-event.js';

describe('MarketplacePurchasePendingChangeEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MarketplacePurchasePendingChangeEventSchema).toBeDefined();
    expect(typeof MarketplacePurchasePendingChangeEventSchema.parse).toBe('function');
    expect(typeof MarketplacePurchasePendingChangeEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MarketplacePurchasePendingChangeEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MarketplacePurchasePendingChangeEventTest =
  MarketplacePurchasePendingChangeEvent;
