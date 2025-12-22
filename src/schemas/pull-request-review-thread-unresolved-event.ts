/**
 * Auto-generated Zod schema for PullRequestReviewThreadUnresolvedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewThreadUnresolvedEvent as PullRequestReviewThreadUnresolvedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestReviewCommentSchema,
  RepositorySchema,
  SimplePullRequestSchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReviewThreadUnresolvedEventSchema = z.object({
  action: z.literal('unresolved'),
  thread: z.object({
    node_id: z.string(),
    comments: z.array(PullRequestReviewCommentSchema),
  }),
  pull_request: SimplePullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestReviewThreadUnresolvedEventOctokit>;

export type PullRequestReviewThreadUnresolvedEvent =
  PullRequestReviewThreadUnresolvedEventOctokit;

export function isPullRequestReviewThreadUnresolvedEvent(
  value: unknown,
): value is PullRequestReviewThreadUnresolvedEvent {
  return PullRequestReviewThreadUnresolvedEventSchema.safeParse(value).success;
}
