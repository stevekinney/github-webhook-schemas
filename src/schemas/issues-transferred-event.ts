/**
 * Auto-generated Zod schema for IssuesTransferredEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesTransferredEvent as IssuesTransferredEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesTransferredEventSchema = z.object({
  action: z.literal('transferred'),
  changes: z.object({
    new_issue: IssueSchema,
    new_repository: RepositorySchema,
  }),
  issue: IssueSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesTransferredEventOctokit>;

export type IssuesTransferredEvent = IssuesTransferredEventOctokit;

export function isIssuesTransferredEvent(
  value: unknown,
): value is IssuesTransferredEvent {
  return IssuesTransferredEventSchema.safeParse(value).success;
}
