/**
 * Auto-generated Zod schema for MarketplacePurchase
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MarketplacePurchase as MarketplacePurchaseOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const MarketplacePurchaseSchema = z.object({
  account: z.object({
    type: z.string(),
    id: z.number(),
    node_id: z.string(),
    login: z.string(),
    organization_billing_email: z.string(),
  }),
  billing_cycle: z.string(),
  unit_count: z.number(),
  on_free_trial: z.boolean(),
  free_trial_ends_on: z.string(),
  next_billing_date: z.string().optional(),
  plan: z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    monthly_price_in_cents: z.number(),
    yearly_price_in_cents: z.number(),
    price_model: z.string(),
    has_free_trial: z.boolean(),
    unit_name: z.string(),
    bullets: z.array(z.string()),
  }),
}) satisfies z.ZodType<MarketplacePurchaseOctokit>;

export type MarketplacePurchase = MarketplacePurchaseOctokit;

export function isMarketplacePurchase(value: unknown): value is MarketplacePurchase {
  return MarketplacePurchaseSchema.safeParse(value).success;
}
