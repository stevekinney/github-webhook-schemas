/**
 * Auto-generated Zod schema for Commit
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Commit as CommitOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { CommitterSchema } from './committer.js';

export const CommitSchema = z.object({
  id: z.string(),
  tree_id: z.string(),
  distinct: z.boolean(),
  message: z.string(),
  timestamp: z.string(),
  url: z.string(),
  author: CommitterSchema,
  committer: CommitterSchema,
  added: z.array(z.string()),
  modified: z.array(z.string()),
  removed: z.array(z.string()),
}) satisfies z.ZodType<CommitOctokit>;

export type Commit = CommitOctokit;

export function isCommit(value: unknown): value is Commit {
  return CommitSchema.safeParse(value).success;
}
