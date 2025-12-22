/**
 * Auto-generated Zod schema for RepoRef
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepoRef as RepoRefOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const RepoRefSchema = z.object({
  id: z.number(),
  url: z.string(),
  name: z.string(),
}) satisfies z.ZodType<RepoRefOctokit>;

export type RepoRef = RepoRefOctokit;

export function isRepoRef(value: unknown): value is RepoRef {
  return RepoRefSchema.safeParse(value).success;
}
