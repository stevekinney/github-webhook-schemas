/**
 * Auto-generated Zod schema for SponsorshipEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SponsorshipEditedEvent as SponsorshipEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { SponsorshipTierSchema, UserSchema } from './shared/index.js';

export const SponsorshipEditedEventSchema = z.object({
  action: z.literal('edited'),
  sponsorship: z.object({
    node_id: z.string(),
    created_at: z.string(),
    sponsorable: UserSchema,
    sponsor: UserSchema,
    privacy_level: z.string(),
    tier: SponsorshipTierSchema,
  }),
  changes: z.object({
    privacy_level: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  sender: UserSchema,
}) satisfies z.ZodType<SponsorshipEditedEventOctokit>;

export type SponsorshipEditedEvent = SponsorshipEditedEventOctokit;

export function isSponsorshipEditedEvent(
  value: unknown,
): value is SponsorshipEditedEvent {
  return SponsorshipEditedEventSchema.safeParse(value).success;
}
