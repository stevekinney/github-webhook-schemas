/**
 * Auto-generated Zod schema for Issue
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Issue as IssueOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { AppSchema } from './app.js';
import { LabelSchema } from './label.js';
import { MilestoneSchema } from './milestone.js';
import { ReactionsSchema } from './reactions.js';
import { UserSchema } from './user.js';

export const IssueSchema = z.object({
  url: z.string(),
  repository_url: z.string(),
  labels_url: z.string(),
  comments_url: z.string(),
  events_url: z.string(),
  html_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  number: z.number(),
  title: z.string(),
  user: UserSchema,
  labels: z.array(LabelSchema).optional(),
  state: z.union([z.literal('open'), z.literal('closed')]).optional(),
  locked: z.boolean().optional(),
  assignee: UserSchema.nullable().optional(),
  assignees: z.array(UserSchema),
  milestone: MilestoneSchema.nullable(),
  comments: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  closed_at: z.string(),
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
  active_lock_reason: z.union([
    z.literal('resolved'),
    z.literal('off-topic'),
    z.literal('too heated'),
    z.literal('spam'),
  ]),
  draft: z.boolean().optional(),
  performed_via_github_app: AppSchema.nullable().optional(),
  pull_request: z.object({
    url: z.string().optional(),
    html_url: z.string().optional(),
    diff_url: z.string().optional(),
    patch_url: z.string().optional(),
    merged_at: z.string().optional(),
  }),
  body: z.string(),
  reactions: ReactionsSchema,
  timeline_url: z.string().optional(),
  state_reason: z.string().optional(),
}) satisfies z.ZodType<IssueOctokit>;

export type Issue = IssueOctokit;

export function isIssue(value: unknown): value is Issue {
  return IssueSchema.safeParse(value).success;
}
