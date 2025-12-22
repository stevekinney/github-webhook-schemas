/**
 * Auto-generated Zod schema for WorkflowStepQueued
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowStepQueued as WorkflowStepQueuedOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const WorkflowStepQueuedSchema = z.object({
  name: z.string(),
  status: z.literal('queued'),
  conclusion: z.null(),
  number: z.number(),
  started_at: z.null(),
  completed_at: z.null(),
}) satisfies z.ZodType<WorkflowStepQueuedOctokit>;

export type WorkflowStepQueued = WorkflowStepQueuedOctokit;

export function isWorkflowStepQueued(value: unknown): value is WorkflowStepQueued {
  return WorkflowStepQueuedSchema.safeParse(value).success;
}
