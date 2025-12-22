/**
 * Auto-generated Zod schema for PullRequestAutoMergeDisabledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestAutoMergeDisabledEvent as PullRequestAutoMergeDisabledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestAutoMergeDisabledEventSchema = z.object({
  action: z.literal('auto_merge_disabled'),
  number: z.number(),
  pull_request: PullRequestSchema,
  reason: z.string(),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestAutoMergeDisabledEventOctokit>;

export type PullRequestAutoMergeDisabledEvent = PullRequestAutoMergeDisabledEventOctokit;

export function isPullRequestAutoMergeDisabledEvent(
  value: unknown,
): value is PullRequestAutoMergeDisabledEvent {
  return PullRequestAutoMergeDisabledEventSchema.safeParse(value).success;
}
