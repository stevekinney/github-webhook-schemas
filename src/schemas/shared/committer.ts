/**
 * Auto-generated Zod schema for Committer
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Committer as CommitterOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const CommitterSchema = z.object({
  name: z.string(),
  email: z.string().nullable(),
  date: z.string().optional(),
  username: z.string().optional(),
}) satisfies z.ZodType<CommitterOctokit>;

export type Committer = CommitterOctokit;

export function isCommitter(value: unknown): value is Committer {
  return CommitterSchema.safeParse(value).success;
}
