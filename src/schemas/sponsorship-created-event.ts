/**
 * Auto-generated Zod schema for SponsorshipCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SponsorshipCreatedEvent as SponsorshipCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { SponsorshipTierSchema, UserSchema } from './shared/index.js';

export const SponsorshipCreatedEventSchema = z.object({
  action: z.literal('created'),
  sponsorship: z.object({
    node_id: z.string(),
    created_at: z.string(),
    sponsorable: UserSchema,
    sponsor: UserSchema,
    privacy_level: z.string(),
    tier: SponsorshipTierSchema,
  }),
  sender: UserSchema,
}) satisfies z.ZodType<SponsorshipCreatedEventOctokit>;

export type SponsorshipCreatedEvent = SponsorshipCreatedEventOctokit;

export function isSponsorshipCreatedEvent(
  value: unknown,
): value is SponsorshipCreatedEvent {
  return SponsorshipCreatedEventSchema.safeParse(value).success;
}
