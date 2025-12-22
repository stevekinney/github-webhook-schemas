/**
 * Auto-generated Zod schema for PullRequestDemilestonedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestDemilestonedEvent as PullRequestDemilestonedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MilestoneSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestDemilestonedEventSchema = z.object({
  action: z.literal('demilestoned'),
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
}) satisfies z.ZodType<PullRequestDemilestonedEventOctokit>;

export type PullRequestDemilestonedEvent = PullRequestDemilestonedEventOctokit;

export function isPullRequestDemilestonedEvent(
  value: unknown,
): value is PullRequestDemilestonedEvent {
  return PullRequestDemilestonedEventSchema.safeParse(value).success;
}
