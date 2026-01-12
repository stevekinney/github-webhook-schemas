/**
 * Auto-generated Zod schema for DeploymentWorkflowRun
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeploymentWorkflowRun as DeploymentWorkflowRunOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { CheckRunPullRequestSchema } from './check-run-pull-request.js';
import { ReferencedWorkflowSchema } from './referenced-workflow.js';
import { UserSchema } from './user.js';

export const DeploymentWorkflowRunSchema = z.object({
  id: z.number(),
  name: z.string(),
  path: z.string().optional(),
  display_title: z.string().optional(),
  node_id: z.string(),
  head_branch: z.string(),
  head_sha: z.string(),
  run_number: z.number(),
  event: z.string(),
  status: z.union([
    z.literal('completed'),
    z.literal('in_progress'),
    z.literal('queued'),
    z.literal('requested'),
  ]),
  conclusion: z
    .union([
      z.literal('success'),
      z.literal('failure'),
      z.literal('neutral'),
      z.literal('cancelled'),
      z.literal('timed_out'),
      z.literal('action_required'),
      z.literal('stale'),
    ])
    .nullable(),
  workflow_id: z.number(),
  check_suite_id: z.number(),
  check_suite_node_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  pull_requests: z.array(CheckRunPullRequestSchema),
  created_at: z.string(),
  updated_at: z.string(),
  actor: UserSchema,
  triggering_actor: UserSchema,
  run_attempt: z.number(),
  run_started_at: z.string(),
  referenced_workflows: z.array(ReferencedWorkflowSchema).optional(),
}) satisfies z.ZodType<DeploymentWorkflowRunOctokit>;

export type DeploymentWorkflowRun = DeploymentWorkflowRunOctokit;

export function isDeploymentWorkflowRun(value: unknown): value is DeploymentWorkflowRun {
  return DeploymentWorkflowRunSchema.safeParse(value).success;
}
