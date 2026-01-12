/**
 * Auto-generated Zod schema for IssueCommentDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssueCommentDeletedEvent as IssueCommentDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueCommentSchema,
  IssueSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssueCommentDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  issue: IssueSchema.and(
    z.object({
      assignee: UserSchema.nullable(),
      state: z.union([z.literal('open'), z.literal('closed')]),
      locked: z.boolean(),
      labels: z.array(LabelSchema),
    }),
  ),
  comment: IssueCommentSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssueCommentDeletedEventOctokit>;

export type IssueCommentDeletedEvent = IssueCommentDeletedEventOctokit;

export function isIssueCommentDeletedEvent(
  value: unknown,
): value is IssueCommentDeletedEvent {
  return IssueCommentDeletedEventSchema.safeParse(value).success;
}
