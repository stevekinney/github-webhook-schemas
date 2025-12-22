/**
 * Auto-generated Zod schema for PullRequestReviewEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewEditedEvent as PullRequestReviewEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestReviewSchema,
  RepositorySchema,
  SimplePullRequestSchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReviewEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    body: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  review: PullRequestReviewSchema,
  pull_request: SimplePullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestReviewEditedEventOctokit>;

export type PullRequestReviewEditedEvent = PullRequestReviewEditedEventOctokit;

export function isPullRequestReviewEditedEvent(
  value: unknown,
): value is PullRequestReviewEditedEvent {
  return PullRequestReviewEditedEventSchema.safeParse(value).success;
}
