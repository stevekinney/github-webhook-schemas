/**
 * Auto-generated Zod schema for ReleasePublishedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReleasePublishedEvent as ReleasePublishedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ReleaseSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ReleasePublishedEventSchema = z.object({
  action: z.literal('published'),
  release: ReleaseSchema.and(
    z.object({
      published_at: z.string(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ReleasePublishedEventOctokit>;

export type ReleasePublishedEvent = ReleasePublishedEventOctokit;

export function isReleasePublishedEvent(value: unknown): value is ReleasePublishedEvent {
  return ReleasePublishedEventSchema.safeParse(value).success;
}
