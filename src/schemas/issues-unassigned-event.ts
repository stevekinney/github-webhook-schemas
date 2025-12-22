/**
 * Auto-generated Zod schema for IssuesUnassignedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesUnassignedEvent as IssuesUnassignedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesUnassignedEventSchema = z.object({
  action: z.literal('unassigned'),
  issue: IssueSchema,
  assignee: UserSchema.nullable().optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesUnassignedEventOctokit>;

export type IssuesUnassignedEvent = IssuesUnassignedEventOctokit;

export function isIssuesUnassignedEvent(value: unknown): value is IssuesUnassignedEvent {
  return IssuesUnassignedEventSchema.safeParse(value).success;
}
