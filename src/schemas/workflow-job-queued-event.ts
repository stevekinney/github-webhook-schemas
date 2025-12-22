/**
 * Auto-generated Zod schema for WorkflowJobQueuedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowJobQueuedEvent as WorkflowJobQueuedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DeploymentSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowJobSchema,
} from './shared/index.js';

export const WorkflowJobQueuedEventSchema = z.object({
  action: z.literal('queued'),
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  deployment: DeploymentSchema.optional(),
  workflow_job: WorkflowJobSchema.and(
    z.object({
      status: z.union([z.literal('queued'), z.literal('waiting')]),
    }),
  ),
}) satisfies z.ZodType<WorkflowJobQueuedEventOctokit>;

export type WorkflowJobQueuedEvent = WorkflowJobQueuedEventOctokit;

export function isWorkflowJobQueuedEvent(
  value: unknown,
): value is WorkflowJobQueuedEvent {
  return WorkflowJobQueuedEventSchema.safeParse(value).success;
}
