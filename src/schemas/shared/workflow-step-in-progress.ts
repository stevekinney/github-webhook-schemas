/**
 * Auto-generated Zod schema for WorkflowStepInProgress
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowStepInProgress as WorkflowStepInProgressOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const WorkflowStepInProgressSchema = z.object({
  name: z.string(),
  status: z.literal('in_progress'),
  conclusion: z.null(),
  number: z.number(),
  started_at: z.string(),
  completed_at: z.null(),
}) satisfies z.ZodType<WorkflowStepInProgressOctokit>;

export type WorkflowStepInProgress = WorkflowStepInProgressOctokit;

export function isWorkflowStepInProgress(
  value: unknown,
): value is WorkflowStepInProgress {
  return WorkflowStepInProgressSchema.safeParse(value).success;
}
