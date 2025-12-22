/**
 * Auto-generated Zod schema for IssuesPinnedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesPinnedEvent as IssuesPinnedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesPinnedEventSchema = z.object({
  action: z.literal('pinned'),
  issue: IssueSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesPinnedEventOctokit>;

export type IssuesPinnedEvent = IssuesPinnedEventOctokit;

export function isIssuesPinnedEvent(value: unknown): value is IssuesPinnedEvent {
  return IssuesPinnedEventSchema.safeParse(value).success;
}
