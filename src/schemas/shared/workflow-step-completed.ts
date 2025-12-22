/**
 * Auto-generated Zod schema for WorkflowStepCompleted
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowStepCompleted as WorkflowStepCompletedOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const WorkflowStepCompletedSchema = z.object({
  name: z.string(),
  status: z.literal('completed'),
  conclusion: z.union([
    z.literal('success'),
    z.literal('failure'),
    z.literal('cancelled'),
    z.literal('skipped'),
  ]),
  number: z.number(),
  started_at: z.string(),
  completed_at: z.string(),
}) satisfies z.ZodType<WorkflowStepCompletedOctokit>;

export type WorkflowStepCompleted = WorkflowStepCompletedOctokit;

export function isWorkflowStepCompleted(value: unknown): value is WorkflowStepCompleted {
  return WorkflowStepCompletedSchema.safeParse(value).success;
}
