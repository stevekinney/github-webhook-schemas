/**
 * Auto-generated tests for MarketplacePurchaseCancelledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MarketplacePurchaseCancelledEvent,
  MarketplacePurchaseCancelledEventSchema,
} from './marketplace-purchase-cancelled-event.js';

describe('MarketplacePurchaseCancelledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MarketplacePurchaseCancelledEventSchema).toBeDefined();
    expect(typeof MarketplacePurchaseCancelledEventSchema.parse).toBe('function');
    expect(typeof MarketplacePurchaseCancelledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MarketplacePurchaseCancelledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MarketplacePurchaseCancelledEventTest = MarketplacePurchaseCancelledEvent;
