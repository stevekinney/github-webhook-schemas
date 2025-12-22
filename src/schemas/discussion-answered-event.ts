/**
 * Auto-generated Zod schema for DiscussionAnsweredEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionAnsweredEvent as DiscussionAnsweredEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionAnsweredEventSchema = z.object({
  action: z.literal('answered'),
  discussion: DiscussionSchema.and(
    z.object({
      category: z.object({
        is_answerable: z.literal(true),
      }),
      answer_html_url: z.string(),
      answer_chosen_at: z.string(),
      answer_chosen_by: UserSchema,
    }),
  ),
  answer: z.object({
    id: z.number(),
    node_id: z.string(),
    html_url: z.string(),
    parent_id: z.null(),
    child_comment_count: z.number(),
    repository_url: z.string(),
    discussion_id: z.number(),
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
    user: UserSchema,
    created_at: z.string(),
    updated_at: z.string(),
    body: z.string(),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionAnsweredEventOctokit>;

export type DiscussionAnsweredEvent = DiscussionAnsweredEventOctokit;

export function isDiscussionAnsweredEvent(
  value: unknown,
): value is DiscussionAnsweredEvent {
  return DiscussionAnsweredEventSchema.safeParse(value).success;
}
