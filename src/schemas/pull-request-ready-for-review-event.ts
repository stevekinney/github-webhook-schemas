/**
 * Auto-generated Zod schema for PullRequestReadyForReviewEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReadyForReviewEvent as PullRequestReadyForReviewEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReadyForReviewEventSchema = z.object({
  action: z.literal('ready_for_review'),
  number: z.number(),
  pull_request: PullRequestSchema.and(
    z.object({
      state: z.literal('open'),
      closed_at: z.null(),
      merged_at: z.null(),
      draft: z.literal(false),
      merged: z.boolean(),
      merged_by: z.null(),
    }),
  ),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestReadyForReviewEventOctokit>;

export type PullRequestReadyForReviewEvent = PullRequestReadyForReviewEventOctokit;

export function isPullRequestReadyForReviewEvent(
  value: unknown,
): value is PullRequestReadyForReviewEvent {
  return PullRequestReadyForReviewEventSchema.safeParse(value).success;
}
