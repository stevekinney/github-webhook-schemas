/**
 * Auto-generated Zod schema for CommitCommentCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CommitCommentCreatedEvent as CommitCommentCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const CommitCommentCreatedEventSchema = z.object({
  action: z.literal('created'),
  comment: z.object({
    url: z.string(),
    html_url: z.string(),
    id: z.number(),
    node_id: z.string(),
    user: UserSchema,
    position: z.number(),
    line: z.number(),
    path: z.string(),
    commit_id: z.string(),
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
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CommitCommentCreatedEventOctokit>;

export type CommitCommentCreatedEvent = CommitCommentCreatedEventOctokit;

export function isCommitCommentCreatedEvent(
  value: unknown,
): value is CommitCommentCreatedEvent {
  return CommitCommentCreatedEventSchema.safeParse(value).success;
}
