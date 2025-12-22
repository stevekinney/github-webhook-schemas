/**
 * Auto-generated Zod schema for IssuesClosedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesClosedEvent as IssuesClosedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesClosedEventSchema = z.object({
  action: z.literal('closed'),
  issue: IssueSchema.and(
    z.object({
      state: z.literal('closed'),
      closed_at: z.string(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesClosedEventOctokit>;

export type IssuesClosedEvent = IssuesClosedEventOctokit;

export function isIssuesClosedEvent(value: unknown): value is IssuesClosedEvent {
  return IssuesClosedEventSchema.safeParse(value).success;
}
