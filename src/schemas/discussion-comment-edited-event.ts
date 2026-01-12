/**
 * Auto-generated Zod schema for DiscussionCommentEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionCommentEditedEvent as DiscussionCommentEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  ReactionsSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionCommentEditedEventSchema = z.object({
  changes: z.object({
    body: z.object({
      from: z.string(),
    }),
  }),
  action: z.literal('edited'),
  comment: z.object({
    id: z.number(),
    node_id: z.string(),
    html_url: z.string(),
    parent_id: z.number().nullable(),
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
}) satisfies z.ZodType<DiscussionCommentEditedEventOctokit>;

export type DiscussionCommentEditedEvent = DiscussionCommentEditedEventOctokit;

export function isDiscussionCommentEditedEvent(
  value: unknown,
): value is DiscussionCommentEditedEvent {
  return DiscussionCommentEditedEventSchema.safeParse(value).success;
}
