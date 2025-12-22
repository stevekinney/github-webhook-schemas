/**
 * Auto-generated Zod schema for IssuesAssignedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesAssignedEvent as IssuesAssignedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesAssignedEventSchema = z.object({
  action: z.literal('assigned'),
  issue: IssueSchema,
  assignee: UserSchema.nullable().optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesAssignedEventOctokit>;

export type IssuesAssignedEvent = IssuesAssignedEventOctokit;

export function isIssuesAssignedEvent(value: unknown): value is IssuesAssignedEvent {
  return IssuesAssignedEventSchema.safeParse(value).success;
}
