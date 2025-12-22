/**
 * Auto-generated Zod schema for PullRequestAutoMergeEnabledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestAutoMergeEnabledEvent as PullRequestAutoMergeEnabledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestAutoMergeEnabledEventSchema = z.object({
  action: z.literal('auto_merge_enabled'),
  number: z.number(),
  pull_request: PullRequestSchema,
  reason: z.string(),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestAutoMergeEnabledEventOctokit>;

export type PullRequestAutoMergeEnabledEvent = PullRequestAutoMergeEnabledEventOctokit;

export function isPullRequestAutoMergeEnabledEvent(
  value: unknown,
): value is PullRequestAutoMergeEnabledEvent {
  return PullRequestAutoMergeEnabledEventSchema.safeParse(value).success;
}
