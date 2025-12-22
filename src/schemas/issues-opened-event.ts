/**
 * Auto-generated Zod schema for IssuesOpenedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesOpenedEvent as IssuesOpenedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesOpenedEventSchema = z.object({
  action: z.literal('opened'),
  changes: z
    .object({
      old_issue: IssueSchema,
      old_repository: RepositorySchema,
    })
    .optional(),
  issue: IssueSchema.and(
    z.object({
      state: z.literal('open'),
      closed_at: z.null(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesOpenedEventOctokit>;

export type IssuesOpenedEvent = IssuesOpenedEventOctokit;

export function isIssuesOpenedEvent(value: unknown): value is IssuesOpenedEvent {
  return IssuesOpenedEventSchema.safeParse(value).success;
}
