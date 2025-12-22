/**
 * Auto-generated tests for MarketplacePurchaseChangedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MarketplacePurchaseChangedEvent,
  MarketplacePurchaseChangedEventSchema,
} from './marketplace-purchase-changed-event.js';

describe('MarketplacePurchaseChangedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MarketplacePurchaseChangedEventSchema).toBeDefined();
    expect(typeof MarketplacePurchaseChangedEventSchema.parse).toBe('function');
    expect(typeof MarketplacePurchaseChangedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MarketplacePurchaseChangedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MarketplacePurchaseChangedEventTest = MarketplacePurchaseChangedEvent;
