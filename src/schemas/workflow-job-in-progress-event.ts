/**
 * Auto-generated Zod schema for WorkflowJobInProgressEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowJobInProgressEvent as WorkflowJobInProgressEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DeploymentSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowJobSchema,
} from './shared/index.js';

export const WorkflowJobInProgressEventSchema = z.object({
  action: z.literal('in_progress'),
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  deployment: DeploymentSchema.optional(),
  workflow_job: WorkflowJobSchema.and(
    z.object({
      status: z.union([z.literal('in_progress'), z.literal('queued')]),
    }),
  ),
}) satisfies z.ZodType<WorkflowJobInProgressEventOctokit>;

export type WorkflowJobInProgressEvent = WorkflowJobInProgressEventOctokit;

export function isWorkflowJobInProgressEvent(
  value: unknown,
): value is WorkflowJobInProgressEvent {
  return WorkflowJobInProgressEventSchema.safeParse(value).success;
}
