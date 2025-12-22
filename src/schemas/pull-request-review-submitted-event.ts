/**
 * Auto-generated Zod schema for PullRequestReviewSubmittedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewSubmittedEvent as PullRequestReviewSubmittedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestReviewSchema,
  RepositorySchema,
  SimplePullRequestSchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReviewSubmittedEventSchema = z.object({
  action: z.literal('submitted'),
  review: PullRequestReviewSchema,
  pull_request: SimplePullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestReviewSubmittedEventOctokit>;

export type PullRequestReviewSubmittedEvent = PullRequestReviewSubmittedEventOctokit;

export function isPullRequestReviewSubmittedEvent(
  value: unknown,
): value is PullRequestReviewSubmittedEvent {
  return PullRequestReviewSubmittedEventSchema.safeParse(value).success;
}
