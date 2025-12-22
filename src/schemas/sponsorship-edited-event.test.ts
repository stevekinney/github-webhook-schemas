/**
 * Auto-generated tests for SponsorshipEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SponsorshipEditedEvent,
  SponsorshipEditedEventSchema,
} from './sponsorship-edited-event.js';

describe('SponsorshipEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SponsorshipEditedEventSchema).toBeDefined();
    expect(typeof SponsorshipEditedEventSchema.parse).toBe('function');
    expect(typeof SponsorshipEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SponsorshipEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SponsorshipEditedEventTest = SponsorshipEditedEvent;
