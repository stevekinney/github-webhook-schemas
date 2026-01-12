/**
 * Auto-generated Zod schema for Organization
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Organization as OrganizationOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const OrganizationSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  url: z.string(),
  html_url: z.string().optional(),
  repos_url: z.string(),
  events_url: z.string(),
  hooks_url: z.string(),
  issues_url: z.string(),
  members_url: z.string(),
  public_members_url: z.string(),
  avatar_url: z.string(),
  description: z.string().nullable(),
}) satisfies z.ZodType<OrganizationOctokit>;

export type Organization = OrganizationOctokit;

export function isOrganization(value: unknown): value is Organization {
  return OrganizationSchema.safeParse(value).success;
}
