/**
 * Auto-generated Zod schema for WorkflowRunInProgressEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowRunInProgressEvent as WorkflowRunInProgressEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowRunSchema,
  WorkflowSchema,
} from './shared/index.js';

export const WorkflowRunInProgressEventSchema = z.object({
  action: z.literal('in_progress'),
  organization: OrganizationSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  workflow: WorkflowSchema,
  workflow_run: WorkflowRunSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<WorkflowRunInProgressEventOctokit>;

export type WorkflowRunInProgressEvent = WorkflowRunInProgressEventOctokit;

export function isWorkflowRunInProgressEvent(
  value: unknown,
): value is WorkflowRunInProgressEvent {
  return WorkflowRunInProgressEventSchema.safeParse(value).success;
}
