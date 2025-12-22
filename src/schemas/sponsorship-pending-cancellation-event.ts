/**
 * Auto-generated Zod schema for SponsorshipPendingCancellationEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SponsorshipPendingCancellationEvent as SponsorshipPendingCancellationEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { SponsorshipTierSchema, UserSchema } from './shared/index.js';

export const SponsorshipPendingCancellationEventSchema = z.object({
  action: z.literal('pending_cancellation'),
  sponsorship: z.object({
    node_id: z.string(),
    created_at: z.string(),
    sponsorable: UserSchema,
    sponsor: UserSchema,
    privacy_level: z.string(),
    tier: SponsorshipTierSchema,
  }),
  effective_date: z.string().optional(),
  sender: UserSchema,
}) satisfies z.ZodType<SponsorshipPendingCancellationEventOctokit>;

export type SponsorshipPendingCancellationEvent =
  SponsorshipPendingCancellationEventOctokit;

export function isSponsorshipPendingCancellationEvent(
  value: unknown,
): value is SponsorshipPendingCancellationEvent {
  return SponsorshipPendingCancellationEventSchema.safeParse(value).success;
}
