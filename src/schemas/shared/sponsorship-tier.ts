/**
 * Auto-generated Zod schema for SponsorshipTier
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SponsorshipTier as SponsorshipTierOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const SponsorshipTierSchema = z.object({
  node_id: z.string(),
  created_at: z.string(),
  description: z.string(),
  monthly_price_in_cents: z.number(),
  monthly_price_in_dollars: z.number(),
  name: z.string(),
  is_one_time: z.boolean(),
  is_custom_amount: z.boolean(),
}) satisfies z.ZodType<SponsorshipTierOctokit>;

export type SponsorshipTier = SponsorshipTierOctokit;

export function isSponsorshipTier(value: unknown): value is SponsorshipTier {
  return SponsorshipTierSchema.safeParse(value).success;
}
