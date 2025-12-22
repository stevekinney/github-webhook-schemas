/**
 * Auto-generated tests for SponsorshipCancelledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SponsorshipCancelledEvent,
  SponsorshipCancelledEventSchema,
} from './sponsorship-cancelled-event.js';

describe('SponsorshipCancelledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SponsorshipCancelledEventSchema).toBeDefined();
    expect(typeof SponsorshipCancelledEventSchema.parse).toBe('function');
    expect(typeof SponsorshipCancelledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SponsorshipCancelledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SponsorshipCancelledEventTest = SponsorshipCancelledEvent;
