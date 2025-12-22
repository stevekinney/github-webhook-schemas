/**
 * Auto-generated Zod schema for SimpleCommit
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SimpleCommit as SimpleCommitOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { CommitterSchema } from './committer.js';

export const SimpleCommitSchema = z.object({
  id: z.string(),
  tree_id: z.string(),
  message: z.string(),
  timestamp: z.string(),
  author: CommitterSchema,
  committer: CommitterSchema,
}) satisfies z.ZodType<SimpleCommitOctokit>;

export type SimpleCommit = SimpleCommitOctokit;

export function isSimpleCommit(value: unknown): value is SimpleCommit {
  return SimpleCommitSchema.safeParse(value).success;
}
