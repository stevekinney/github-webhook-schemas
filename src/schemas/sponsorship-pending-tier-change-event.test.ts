/**
 * Auto-generated tests for SponsorshipPendingTierChangeEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SponsorshipPendingTierChangeEvent,
  SponsorshipPendingTierChangeEventSchema,
} from './sponsorship-pending-tier-change-event.js';

describe('SponsorshipPendingTierChangeEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SponsorshipPendingTierChangeEventSchema).toBeDefined();
    expect(typeof SponsorshipPendingTierChangeEventSchema.parse).toBe('function');
    expect(typeof SponsorshipPendingTierChangeEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SponsorshipPendingTierChangeEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SponsorshipPendingTierChangeEventTest = SponsorshipPendingTierChangeEvent;
