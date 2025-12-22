/**
 * Auto-generated Zod schema for Discussion
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Discussion as DiscussionOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { DiscussionCategorySchema } from './discussion-category.js';
import { ReactionsSchema } from './reactions.js';
import { UserSchema } from './user.js';

export const DiscussionSchema = z.object({
  repository_url: z.string(),
  category: DiscussionCategorySchema,
  answer_html_url: z.string(),
  answer_chosen_at: z.string(),
  answer_chosen_by: UserSchema.nullable(),
  html_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  number: z.number(),
  title: z.string(),
  user: UserSchema,
  state: z.union([z.literal('open'), z.literal('locked'), z.literal('converting')]),
  locked: z.boolean(),
  comments: z.number(),
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
  active_lock_reason: z.string(),
  body: z.string(),
  reactions: ReactionsSchema.optional(),
}) satisfies z.ZodType<DiscussionOctokit>;

export type Discussion = DiscussionOctokit;

export function isDiscussion(value: unknown): value is Discussion {
  return DiscussionSchema.safeParse(value).success;
}
