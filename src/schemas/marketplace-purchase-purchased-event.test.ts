/**
 * Auto-generated tests for MarketplacePurchasePurchasedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MarketplacePurchasePurchasedEvent,
  MarketplacePurchasePurchasedEventSchema,
} from './marketplace-purchase-purchased-event.js';

describe('MarketplacePurchasePurchasedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MarketplacePurchasePurchasedEventSchema).toBeDefined();
    expect(typeof MarketplacePurchasePurchasedEventSchema.parse).toBe('function');
    expect(typeof MarketplacePurchasePurchasedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MarketplacePurchasePurchasedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MarketplacePurchasePurchasedEventTest = MarketplacePurchasePurchasedEvent;
