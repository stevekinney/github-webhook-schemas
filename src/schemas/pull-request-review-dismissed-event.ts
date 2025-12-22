/**
 * Auto-generated Zod schema for PullRequestReviewDismissedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewDismissedEvent as PullRequestReviewDismissedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestReviewSchema,
  RepositorySchema,
  SimplePullRequestSchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReviewDismissedEventSchema = z.object({
  action: z.literal('dismissed'),
  review: PullRequestReviewSchema.and(
    z.object({
      state: z.literal('dismissed'),
    }),
  ),
  pull_request: SimplePullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestReviewDismissedEventOctokit>;

export type PullRequestReviewDismissedEvent = PullRequestReviewDismissedEventOctokit;

export function isPullRequestReviewDismissedEvent(
  value: unknown,
): value is PullRequestReviewDismissedEvent {
  return PullRequestReviewDismissedEventSchema.safeParse(value).success;
}
