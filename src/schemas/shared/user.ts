/**
 * Auto-generated Zod schema for User
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { User as UserOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const UserSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
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
  type: z.union([z.literal('Bot'), z.literal('User'), z.literal('Organization')]),
  site_admin: z.boolean(),
}) satisfies z.ZodType<UserOctokit>;

export type User = UserOctokit;

export function isUser(value: unknown): value is User {
  return UserSchema.safeParse(value).success;
}
