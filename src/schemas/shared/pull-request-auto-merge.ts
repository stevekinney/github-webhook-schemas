/**
 * Auto-generated Zod schema for PullRequestAutoMerge
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestAutoMerge as PullRequestAutoMergeOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const PullRequestAutoMergeSchema = z.object({
  enabled_by: UserSchema.nullable(),
  merge_method: z.union([z.literal('merge'), z.literal('squash'), z.literal('rebase')]),
  commit_title: z.string().nullable(),
  commit_message: z.string().nullable(),
}) satisfies z.ZodType<PullRequestAutoMergeOctokit>;

export type PullRequestAutoMerge = PullRequestAutoMergeOctokit;

export function isPullRequestAutoMerge(value: unknown): value is PullRequestAutoMerge {
  return PullRequestAutoMergeSchema.safeParse(value).success;
}
