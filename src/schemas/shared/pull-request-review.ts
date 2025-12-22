/**
 * Auto-generated Zod schema for PullRequestReview
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReview as PullRequestReviewOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { LinkSchema } from './link.js';
import { UserSchema } from './user.js';

export const PullRequestReviewSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  user: UserSchema,
  body: z.string(),
  commit_id: z.string(),
  submitted_at: z.string(),
  state: z.union([
    z.literal('dismissed'),
    z.literal('approved'),
    z.literal('commented'),
    z.literal('changes_requested'),
  ]),
  html_url: z.string(),
  pull_request_url: z.string(),
  author_association: z.union([
    z.literal('COLLABORATOR'),
    z.literal('CONTRIBUTOR'),
    z.literal('FIRST_TIMER'),
    z.literal('FIRST_TIME_CONTRIBUTOR'),
    z.literal('MANNEQUIN'),
    z.literal('MEMBER'),
    z.literal('NONE'),
    z.literal('OWNER'),
  ]),
  _links: z.object({
    html: LinkSchema,
    pull_request: LinkSchema,
  }),
}) satisfies z.ZodType<PullRequestReviewOctokit>;

export type PullRequestReview = PullRequestReviewOctokit;

export function isPullRequestReview(value: unknown): value is PullRequestReview {
  return PullRequestReviewSchema.safeParse(value).success;
}
