/**
 * Auto-generated Zod schema for SponsorshipTierChangedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SponsorshipTierChangedEvent as SponsorshipTierChangedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { SponsorshipTierSchema, UserSchema } from './shared/index.js';

export const SponsorshipTierChangedEventSchema = z.object({
  action: z.literal('tier_changed'),
  sponsorship: z.object({
    node_id: z.string(),
    created_at: z.string(),
    sponsorable: UserSchema,
    sponsor: UserSchema,
    privacy_level: z.string(),
    tier: SponsorshipTierSchema,
  }),
  changes: z.object({
    tier: z.object({
      from: SponsorshipTierSchema,
    }),
  }),
  sender: UserSchema,
}) satisfies z.ZodType<SponsorshipTierChangedEventOctokit>;

export type SponsorshipTierChangedEvent = SponsorshipTierChangedEventOctokit;

export function isSponsorshipTierChangedEvent(
  value: unknown,
): value is SponsorshipTierChangedEvent {
  return SponsorshipTierChangedEventSchema.safeParse(value).success;
}
