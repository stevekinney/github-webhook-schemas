/**
 * Auto-generated Zod schema for GollumEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { GollumEvent as GollumEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const GollumEventSchema = z.object({
  pages: z.array(
    z.object({
      page_name: z.string(),
      title: z.string(),
      summary: z.null(),
      action: z.union([z.literal('created'), z.literal('edited')]),
      sha: z.string(),
      html_url: z.string(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<GollumEventOctokit>;

export type GollumEvent = GollumEventOctokit;

export function isGollumEvent(value: unknown): value is GollumEvent {
  return GollumEventSchema.safeParse(value).success;
}
