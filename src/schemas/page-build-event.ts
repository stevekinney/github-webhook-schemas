/**
 * Auto-generated Zod schema for PageBuildEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PageBuildEvent as PageBuildEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PageBuildEventSchema = z.object({
  id: z.number(),
  build: z.object({
    url: z.string(),
    status: z.string(),
    error: z.object({
      message: z.string(),
    }),
    pusher: UserSchema,
    commit: z.string(),
    duration: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<PageBuildEventOctokit>;

export type PageBuildEvent = PageBuildEventOctokit;

export function isPageBuildEvent(value: unknown): value is PageBuildEvent {
  return PageBuildEventSchema.safeParse(value).success;
}
