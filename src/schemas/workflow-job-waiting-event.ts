/**
 * Auto-generated Zod schema for WorkflowJobWaitingEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowJobWaitingEvent as WorkflowJobWaitingEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DeploymentSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowJobSchema,
} from './shared/index.js';

export const WorkflowJobWaitingEventSchema = z.object({
  action: z.literal('waiting'),
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  deployment: DeploymentSchema.optional(),
  workflow_job: WorkflowJobSchema.and(
    z.object({
      status: z.literal('waiting'),
    }),
  ),
}) satisfies z.ZodType<WorkflowJobWaitingEventOctokit>;

export type WorkflowJobWaitingEvent = WorkflowJobWaitingEventOctokit;

export function isWorkflowJobWaitingEvent(
  value: unknown,
): value is WorkflowJobWaitingEvent {
  return WorkflowJobWaitingEventSchema.safeParse(value).success;
}
