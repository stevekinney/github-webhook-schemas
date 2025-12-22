/**
 * Auto-generated Zod schema for WorkflowRun
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowRun as WorkflowRunOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { ReferencedWorkflowSchema } from './referenced-workflow.js';
import { RepoRefSchema } from './repo-ref.js';
import { RepositoryLiteSchema } from './repository-lite.js';
import { SimpleCommitSchema } from './simple-commit.js';
import { UserSchema } from './user.js';

export const WorkflowRunSchema = z.object({
  artifacts_url: z.string(),
  cancel_url: z.string(),
  check_suite_url: z.string(),
  check_suite_id: z.number(),
  check_suite_node_id: z.string(),
  conclusion: z.union([
    z.literal('success'),
    z.literal('failure'),
    z.literal('neutral'),
    z.literal('cancelled'),
    z.literal('timed_out'),
    z.literal('action_required'),
    z.literal('stale'),
    z.literal('skipped'),
  ]),
  created_at: z.string(),
  event: z.string(),
  head_branch: z.string(),
  head_commit: SimpleCommitSchema,
  head_repository: RepositoryLiteSchema,
  head_sha: z.string(),
  path: z.string(),
  display_title: z.string(),
  html_url: z.string(),
  id: z.number(),
  jobs_url: z.string(),
  logs_url: z.string(),
  node_id: z.string(),
  name: z.string(),
  pull_requests: z.array(
    z.object({
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
    }),
  ),
  repository: RepositoryLiteSchema,
  rerun_url: z.string(),
  run_number: z.number(),
  status: z.union([
    z.literal('completed'),
    z.literal('in_progress'),
    z.literal('queued'),
    z.literal('waiting'),
    z.literal('requested'),
  ]),
  updated_at: z.string(),
  url: z.string(),
  workflow_id: z.number(),
  workflow_url: z.string(),
  run_attempt: z.number(),
  referenced_workflows: z.array(ReferencedWorkflowSchema).optional(),
  run_started_at: z.string(),
  previous_attempt_url: z.string(),
  actor: UserSchema,
  triggering_actor: UserSchema,
}) satisfies z.ZodType<WorkflowRunOctokit>;

export type WorkflowRun = WorkflowRunOctokit;

export function isWorkflowRun(value: unknown): value is WorkflowRun {
  return WorkflowRunSchema.safeParse(value).success;
}
