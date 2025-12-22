/**
 * Auto-generated Zod schema for CheckRunPullRequest
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CheckRunPullRequest as CheckRunPullRequestOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { RepoRefSchema } from './repo-ref.js';

export const CheckRunPullRequestSchema = z.object({
  url: z.string(),
  id: z.number(),
  number: z.number(),
  head: z.object({
    ref: z.string(),
    sha: z.string(),
    repo: RepoRefSchema,
  }),
  base: z.object({
    ref: z.string(),
    sha: z.string(),
    repo: RepoRefSchema,
  }),
}) satisfies z.ZodType<CheckRunPullRequestOctokit>;

export type CheckRunPullRequest = CheckRunPullRequestOctokit;

export function isCheckRunPullRequest(value: unknown): value is CheckRunPullRequest {
  return CheckRunPullRequestSchema.safeParse(value).success;
}
