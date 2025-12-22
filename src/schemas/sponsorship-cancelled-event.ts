/**
 * Auto-generated Zod schema for SponsorshipCancelledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SponsorshipCancelledEvent as SponsorshipCancelledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { SponsorshipTierSchema, UserSchema } from './shared/index.js';

export const SponsorshipCancelledEventSchema = z.object({
  action: z.literal('cancelled'),
  sponsorship: z.object({
    node_id: z.string(),
    created_at: z.string(),
    sponsorable: UserSchema,
    sponsor: UserSchema,
    privacy_level: z.string(),
    tier: SponsorshipTierSchema,
  }),
  sender: UserSchema,
}) satisfies z.ZodType<SponsorshipCancelledEventOctokit>;

export type SponsorshipCancelledEvent = SponsorshipCancelledEventOctokit;

export function isSponsorshipCancelledEvent(
  value: unknown,
): value is SponsorshipCancelledEvent {
  return SponsorshipCancelledEventSchema.safeParse(value).success;
}
