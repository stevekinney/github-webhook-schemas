/**
 * Auto-generated Zod schema for IssuesDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesDeletedEvent as IssuesDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  issue: IssueSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesDeletedEventOctokit>;

export type IssuesDeletedEvent = IssuesDeletedEventOctokit;

export function isIssuesDeletedEvent(value: unknown): value is IssuesDeletedEvent {
  return IssuesDeletedEventSchema.safeParse(value).success;
}
