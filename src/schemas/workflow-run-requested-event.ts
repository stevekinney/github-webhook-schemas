/**
 * Auto-generated Zod schema for WorkflowRunRequestedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowRunRequestedEvent as WorkflowRunRequestedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowRunSchema,
  WorkflowSchema,
} from './shared/index.js';

export const WorkflowRunRequestedEventSchema = z.object({
  action: z.literal('requested'),
  organization: OrganizationSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  workflow: WorkflowSchema,
  workflow_run: WorkflowRunSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<WorkflowRunRequestedEventOctokit>;

export type WorkflowRunRequestedEvent = WorkflowRunRequestedEventOctokit;

export function isWorkflowRunRequestedEvent(
  value: unknown,
): value is WorkflowRunRequestedEvent {
  return WorkflowRunRequestedEventSchema.safeParse(value).success;
}
