/**
 * Auto-generated Zod schema for Team
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Team as TeamOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const TeamSchema = z.object({
  name: z.string(),
  id: z.number(),
  node_id: z.string(),
  slug: z.string(),
  description: z.string(),
  privacy: z.union([z.literal('open'), z.literal('closed'), z.literal('secret')]),
  url: z.string(),
  html_url: z.string(),
  members_url: z.string(),
  repositories_url: z.string(),
  permission: z.string(),
  parent: z.object({
    name: z.string(),
    id: z.number(),
    node_id: z.string(),
    slug: z.string(),
    description: z.string(),
    privacy: z.union([z.literal('open'), z.literal('closed'), z.literal('secret')]),
    url: z.string(),
    html_url: z.string(),
    members_url: z.string(),
    repositories_url: z.string(),
    permission: z.string(),
    notification_setting: z
      .union([z.literal('notifications_enabled'), z.literal('notifications_disabled')])
      .optional(),
  }),
  notification_setting: z
    .union([z.literal('notifications_enabled'), z.literal('notifications_disabled')])
    .optional(),
}) satisfies z.ZodType<TeamOctokit>;

export type Team = TeamOctokit;

export function isTeam(value: unknown): value is Team {
  return TeamSchema.safeParse(value).success;
}
