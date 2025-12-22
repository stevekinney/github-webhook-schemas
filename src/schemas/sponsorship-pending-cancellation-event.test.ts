/**
 * Auto-generated tests for SponsorshipPendingCancellationEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SponsorshipPendingCancellationEvent,
  SponsorshipPendingCancellationEventSchema,
} from './sponsorship-pending-cancellation-event.js';

describe('SponsorshipPendingCancellationEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SponsorshipPendingCancellationEventSchema).toBeDefined();
    expect(typeof SponsorshipPendingCancellationEventSchema.parse).toBe('function');
    expect(typeof SponsorshipPendingCancellationEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SponsorshipPendingCancellationEventSchema.safeParse({
      invalid: 'data',
    });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SponsorshipPendingCancellationEventTest =
  SponsorshipPendingCancellationEvent;
