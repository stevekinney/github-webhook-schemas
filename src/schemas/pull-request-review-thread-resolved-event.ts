/**
 * Auto-generated Zod schema for PullRequestReviewThreadResolvedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewThreadResolvedEvent as PullRequestReviewThreadResolvedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestReviewCommentSchema,
  RepositorySchema,
  SimplePullRequestSchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReviewThreadResolvedEventSchema = z.object({
  action: z.literal('resolved'),
  thread: z.object({
    node_id: z.string(),
    comments: z.array(PullRequestReviewCommentSchema),
  }),
  pull_request: SimplePullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestReviewThreadResolvedEventOctokit>;

export type PullRequestReviewThreadResolvedEvent =
  PullRequestReviewThreadResolvedEventOctokit;

export function isPullRequestReviewThreadResolvedEvent(
  value: unknown,
): value is PullRequestReviewThreadResolvedEvent {
  return PullRequestReviewThreadResolvedEventSchema.safeParse(value).success;
}
