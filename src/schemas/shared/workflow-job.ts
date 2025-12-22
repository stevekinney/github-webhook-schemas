/**
 * Auto-generated Zod schema for WorkflowJob
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowJob as WorkflowJobOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { WorkflowStepCompletedSchema } from './workflow-step-completed.js';
import { WorkflowStepInProgressSchema } from './workflow-step-in-progress.js';
import { WorkflowStepQueuedSchema } from './workflow-step-queued.js';

export const WorkflowJobSchema = z.object({
  id: z.number(),
  run_id: z.number(),
  run_attempt: z.number(),
  run_url: z.string(),
  head_sha: z.string(),
  node_id: z.string(),
  name: z.string(),
  check_run_url: z.string(),
  html_url: z.string(),
  url: z.string(),
  status: z.union([
    z.literal('completed'),
    z.literal('in_progress'),
    z.literal('queued'),
    z.literal('waiting'),
  ]),
  steps: z.array(
    z.union([
      WorkflowStepInProgressSchema,
      WorkflowStepQueuedSchema,
      WorkflowStepCompletedSchema,
    ]),
  ),
  conclusion: z.union([
    z.literal('success'),
    z.literal('failure'),
    z.literal('cancelled'),
    z.literal('skipped'),
  ]),
  labels: z.array(z.string()),
  runner_id: z.number(),
  runner_name: z.string(),
  runner_group_id: z.number(),
  runner_group_name: z.string(),
  started_at: z.string(),
  completed_at: z.string(),
  workflow_name: z.string(),
  head_branch: z.string(),
  created_at: z.string(),
}) satisfies z.ZodType<WorkflowJobOctokit>;

export type WorkflowJob = WorkflowJobOctokit;

export function isWorkflowJob(value: unknown): value is WorkflowJob {
  return WorkflowJobSchema.safeParse(value).success;
}
