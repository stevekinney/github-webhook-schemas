/**
 * Auto-generated tests for MarketplacePurchasePendingChangeCancelledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MarketplacePurchasePendingChangeCancelledEvent,
  MarketplacePurchasePendingChangeCancelledEventSchema,
} from './marketplace-purchase-pending-change-cancelled-event.js';

describe('MarketplacePurchasePendingChangeCancelledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MarketplacePurchasePendingChangeCancelledEventSchema).toBeDefined();
    expect(typeof MarketplacePurchasePendingChangeCancelledEventSchema.parse).toBe(
      'function',
    );
    expect(typeof MarketplacePurchasePendingChangeCancelledEventSchema.safeParse).toBe(
      'function',
    );
  });

  it('should reject invalid data', () => {
    const result = MarketplacePurchasePendingChangeCancelledEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MarketplacePurchasePendingChangeCancelledEventTest =
  MarketplacePurchasePendingChangeCancelledEvent;
