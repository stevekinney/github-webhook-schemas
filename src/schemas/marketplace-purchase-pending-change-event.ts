/**
 * Auto-generated Zod schema for MarketplacePurchasePendingChangeEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MarketplacePurchasePendingChangeEvent as MarketplacePurchasePendingChangeEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { MarketplacePurchaseSchema } from './shared/index.js';

export const MarketplacePurchasePendingChangeEventSchema = z.object({
  action: z.literal('pending_change'),
  effective_date: z.string(),
  sender: z.object({
    login: z.string(),
    id: z.number(),
    avatar_url: z.string(),
    gravatar_id: z.string(),
    url: z.string(),
    html_url: z.string(),
    followers_url: z.string(),
    following_url: z.string(),
    gists_url: z.string(),
    starred_url: z.string(),
    subscriptions_url: z.string(),
    organizations_url: z.string(),
    repos_url: z.string(),
    events_url: z.string(),
    received_events_url: z.string(),
    type: z.string(),
    site_admin: z.boolean(),
    email: z.string(),
  }),
  marketplace_purchase: MarketplacePurchaseSchema.and(
    z.object({
      next_billing_date: z.string(),
    }),
  ),
  previous_marketplace_purchase: MarketplacePurchaseSchema.optional(),
}) satisfies z.ZodType<MarketplacePurchasePendingChangeEventOctokit>;

export type MarketplacePurchasePendingChangeEvent =
  MarketplacePurchasePendingChangeEventOctokit;

export function isMarketplacePurchasePendingChangeEvent(
  value: unknown,
): value is MarketplacePurchasePendingChangeEvent {
  return MarketplacePurchasePendingChangeEventSchema.safeParse(value).success;
}
