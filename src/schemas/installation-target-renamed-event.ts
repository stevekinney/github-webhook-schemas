/**
 * Auto-generated Zod schema for InstallationTargetRenamedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationTargetRenamedEvent as InstallationTargetRenamedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const InstallationTargetRenamedEventSchema = z.object({
  changes: z.object({
    login: z
      .object({
        from: z.string(),
      })
      .optional(),
    slug: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  action: z.literal('renamed'),
  account: z.object({
    avatar_url: z.string(),
    created_at: z.string().optional(),
    description: z.null().optional(),
    events_url: z.string().optional(),
    followers: z.number().optional(),
    followers_url: z.string().optional(),
    following: z.number().optional(),
    following_url: z.string().optional(),
    gists_url: z.string().optional(),
    gravatar_id: z.string().optional(),
    has_organization_projects: z.boolean().optional(),
    has_repository_projects: z.boolean().optional(),
    hooks_url: z.string().optional(),
    html_url: z.string(),
    id: z.number(),
    is_verified: z.boolean().optional(),
    issues_url: z.string().optional(),
    login: z.string().optional(),
    members_url: z.string().optional(),
    name: z.string().optional(),
    node_id: z.string(),
    organizations_url: z.string().optional(),
    public_gists: z.number().optional(),
    public_members_url: z.string().optional(),
    public_repos: z.number().optional(),
    received_events_url: z.string().optional(),
    repos_url: z.string().optional(),
    site_admin: z.boolean().optional(),
    slug: z.string().optional(),
    starred_url: z.string().optional(),
    subscriptions_url: z.string().optional(),
    type: z
      .union([z.literal('Bot'), z.literal('User'), z.literal('Organization')])
      .optional(),
    updated_at: z.string().optional(),
    url: z.string().optional(),
    website_url: z.null().optional(),
  }),
  repository: RepositorySchema.optional(),
  sender: UserSchema.optional(),
  installation: InstallationLiteSchema,
  organization: OrganizationSchema.optional(),
  target_type: z.string(),
}) satisfies z.ZodType<InstallationTargetRenamedEventOctokit>;

export type InstallationTargetRenamedEvent = InstallationTargetRenamedEventOctokit;

export function isInstallationTargetRenamedEvent(
  value: unknown,
): value is InstallationTargetRenamedEvent {
  return InstallationTargetRenamedEventSchema.safeParse(value).success;
}
