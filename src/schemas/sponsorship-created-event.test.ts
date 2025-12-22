/**
 * Auto-generated tests for SponsorshipCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SponsorshipCreatedEvent,
  SponsorshipCreatedEventSchema,
} from './sponsorship-created-event.js';

describe('SponsorshipCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SponsorshipCreatedEventSchema).toBeDefined();
    expect(typeof SponsorshipCreatedEventSchema.parse).toBe('function');
    expect(typeof SponsorshipCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SponsorshipCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SponsorshipCreatedEventTest = SponsorshipCreatedEvent;
