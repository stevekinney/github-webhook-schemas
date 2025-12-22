/**
 * Auto-generated Zod schema for IssuesReopenedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesReopenedEvent as IssuesReopenedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesReopenedEventSchema = z.object({
  action: z.literal('reopened'),
  issue: IssueSchema.and(
    z.object({
      state: z.literal('open'),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesReopenedEventOctokit>;

export type IssuesReopenedEvent = IssuesReopenedEventOctokit;

export function isIssuesReopenedEvent(value: unknown): value is IssuesReopenedEvent {
  return IssuesReopenedEventSchema.safeParse(value).success;
}
