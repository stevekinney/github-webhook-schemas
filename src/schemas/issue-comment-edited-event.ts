/**
 * Auto-generated Zod schema for IssueCommentEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssueCommentEditedEvent as IssueCommentEditedEventOctokit } from '@octokit/webhooks-types';
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

export const IssueCommentEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    body: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
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
}) satisfies z.ZodType<IssueCommentEditedEventOctokit>;

export type IssueCommentEditedEvent = IssueCommentEditedEventOctokit;

export function isIssueCommentEditedEvent(
  value: unknown,
): value is IssueCommentEditedEvent {
  return IssueCommentEditedEventSchema.safeParse(value).success;
}
