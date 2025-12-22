/**
 * Auto-generated Zod schema for WorkflowJobCompletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowJobCompletedEvent as WorkflowJobCompletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DeploymentSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowJobSchema,
} from './shared/index.js';

export const WorkflowJobCompletedEventSchema = z.object({
  action: z.literal('completed'),
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  deployment: DeploymentSchema.optional(),
  workflow_job: WorkflowJobSchema.and(
    z.object({
      conclusion: z.union([
        z.literal('success'),
        z.literal('failure'),
        z.literal('cancelled'),
        z.literal('skipped'),
      ]),
    }),
  ),
}) satisfies z.ZodType<WorkflowJobCompletedEventOctokit>;

export type WorkflowJobCompletedEvent = WorkflowJobCompletedEventOctokit;

export function isWorkflowJobCompletedEvent(
  value: unknown,
): value is WorkflowJobCompletedEvent {
  return WorkflowJobCompletedEventSchema.safeParse(value).success;
}
