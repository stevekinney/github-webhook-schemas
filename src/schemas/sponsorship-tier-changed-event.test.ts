/**
 * Auto-generated tests for SponsorshipTierChangedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SponsorshipTierChangedEvent,
  SponsorshipTierChangedEventSchema,
} from './sponsorship-tier-changed-event.js';

describe('SponsorshipTierChangedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SponsorshipTierChangedEventSchema).toBeDefined();
    expect(typeof SponsorshipTierChangedEventSchema.parse).toBe('function');
    expect(typeof SponsorshipTierChangedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SponsorshipTierChangedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SponsorshipTierChangedEventTest = SponsorshipTierChangedEvent;
