/**
 * Auto-generated Zod schema for DiscussionCommentDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionCommentDeletedEvent as DiscussionCommentDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  ReactionsSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionCommentDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  comment: z.object({
    id: z.number(),
    node_id: z.string(),
    html_url: z.string(),
    parent_id: z.number(),
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
    reactions: ReactionsSchema,
  }),
  discussion: DiscussionSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema,
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionCommentDeletedEventOctokit>;

export type DiscussionCommentDeletedEvent = DiscussionCommentDeletedEventOctokit;

export function isDiscussionCommentDeletedEvent(
  value: unknown,
): value is DiscussionCommentDeletedEvent {
  return DiscussionCommentDeletedEventSchema.safeParse(value).success;
}
