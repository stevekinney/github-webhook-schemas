/**
 * Auto-generated Zod schema for IssueCommentCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssueCommentCreatedEvent as IssueCommentCreatedEventOctokit } from '@octokit/webhooks-types';
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

export const IssueCommentCreatedEventSchema = z.object({
  action: z.literal('created'),
  issue: IssueSchema.and(
    z.object({
      assignee: UserSchema,
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
}) satisfies z.ZodType<IssueCommentCreatedEventOctokit>;

export type IssueCommentCreatedEvent = IssueCommentCreatedEventOctokit;

export function isIssueCommentCreatedEvent(
  value: unknown,
): value is IssueCommentCreatedEvent {
  return IssueCommentCreatedEventSchema.safeParse(value).success;
}
