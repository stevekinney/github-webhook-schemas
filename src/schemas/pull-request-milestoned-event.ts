/**
 * Auto-generated Zod schema for PullRequestMilestonedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestMilestonedEvent as PullRequestMilestonedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MilestoneSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestMilestonedEventSchema = z.object({
  action: z.literal('milestoned'),
  number: z.number(),
  pull_request: PullRequestSchema.and(
    z.object({
      milestone: MilestoneSchema,
    }),
  ),
  milestone: MilestoneSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<PullRequestMilestonedEventOctokit>;

export type PullRequestMilestonedEvent = PullRequestMilestonedEventOctokit;

export function isPullRequestMilestonedEvent(
  value: unknown,
): value is PullRequestMilestonedEvent {
  return PullRequestMilestonedEventSchema.safeParse(value).success;
}
