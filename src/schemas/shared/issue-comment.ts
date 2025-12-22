/**
 * Auto-generated Zod schema for IssueComment
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssueComment as IssueCommentOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { AppSchema } from './app.js';
import { ReactionsSchema } from './reactions.js';
import { UserSchema } from './user.js';

export const IssueCommentSchema = z.object({
  url: z.string(),
  html_url: z.string(),
  issue_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  user: UserSchema,
  created_at: z.string(),
  updated_at: z.string(),
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
  body: z.string(),
  reactions: ReactionsSchema,
  performed_via_github_app: AppSchema.nullable(),
}) satisfies z.ZodType<IssueCommentOctokit>;

export type IssueComment = IssueCommentOctokit;

export function isIssueComment(value: unknown): value is IssueComment {
  return IssueCommentSchema.safeParse(value).success;
}
