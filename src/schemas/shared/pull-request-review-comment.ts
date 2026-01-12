/**
 * Auto-generated Zod schema for PullRequestReviewComment
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewComment as PullRequestReviewCommentOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { LinkSchema } from './link.js';
import { ReactionsSchema } from './reactions.js';
import { UserSchema } from './user.js';

export const PullRequestReviewCommentSchema = z.object({
  url: z.string(),
  pull_request_review_id: z.number(),
  id: z.number(),
  node_id: z.string(),
  diff_hunk: z.string(),
  path: z.string(),
  position: z.number().nullable(),
  original_position: z.number(),
  commit_id: z.string(),
  original_commit_id: z.string(),
  user: UserSchema,
  body: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
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
    self: LinkSchema,
    html: LinkSchema,
    pull_request: LinkSchema,
  }),
  reactions: ReactionsSchema,
  start_line: z.number().nullable(),
  original_start_line: z.number().nullable(),
  start_side: z.union([z.literal('LEFT'), z.literal('RIGHT')]).nullable(),
  line: z.number().nullable(),
  original_line: z.number(),
  side: z.union([z.literal('LEFT'), z.literal('RIGHT')]),
  in_reply_to_id: z.number().optional(),
  subject_type: z.union([z.literal('line'), z.literal('file')]).optional(),
}) satisfies z.ZodType<PullRequestReviewCommentOctokit>;

export type PullRequestReviewComment = PullRequestReviewCommentOctokit;

export function isPullRequestReviewComment(
  value: unknown,
): value is PullRequestReviewComment {
  return PullRequestReviewCommentSchema.safeParse(value).success;
}
