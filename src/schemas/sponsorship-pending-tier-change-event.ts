/**
 * Auto-generated Zod schema for SponsorshipPendingTierChangeEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SponsorshipPendingTierChangeEvent as SponsorshipPendingTierChangeEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { SponsorshipTierSchema, UserSchema } from './shared/index.js';

export const SponsorshipPendingTierChangeEventSchema = z.object({
  action: z.literal('pending_tier_change'),
  sponsorship: z.object({
    node_id: z.string(),
    created_at: z.string(),
    sponsorable: UserSchema,
    sponsor: UserSchema,
    privacy_level: z.string(),
    tier: SponsorshipTierSchema,
  }),
  effective_date: z.string().optional(),
  changes: z.object({
    tier: z.object({
      from: SponsorshipTierSchema,
    }),
  }),
  sender: UserSchema,
}) satisfies z.ZodType<SponsorshipPendingTierChangeEventOctokit>;

export type SponsorshipPendingTierChangeEvent = SponsorshipPendingTierChangeEventOctokit;

export function isSponsorshipPendingTierChangeEvent(
  value: unknown,
): value is SponsorshipPendingTierChangeEvent {
  return SponsorshipPendingTierChangeEventSchema.safeParse(value).success;
}
