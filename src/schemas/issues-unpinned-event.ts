/**
 * Auto-generated Zod schema for IssuesUnpinnedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesUnpinnedEvent as IssuesUnpinnedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesUnpinnedEventSchema = z.object({
  action: z.literal('unpinned'),
  issue: IssueSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesUnpinnedEventOctokit>;

export type IssuesUnpinnedEvent = IssuesUnpinnedEventOctokit;

export function isIssuesUnpinnedEvent(value: unknown): value is IssuesUnpinnedEvent {
  return IssuesUnpinnedEventSchema.safeParse(value).success;
}
