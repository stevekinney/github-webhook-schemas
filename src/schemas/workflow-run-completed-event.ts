/**
 * Auto-generated Zod schema for WorkflowRunCompletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowRunCompletedEvent as WorkflowRunCompletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowRunSchema,
  WorkflowSchema,
} from './shared/index.js';

export const WorkflowRunCompletedEventSchema = z.object({
  action: z.literal('completed'),
  organization: OrganizationSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  workflow: WorkflowSchema,
  workflow_run: WorkflowRunSchema.and(
    z.object({
      conclusion: z.union([
        z.literal('success'),
        z.literal('failure'),
        z.literal('neutral'),
        z.literal('cancelled'),
        z.literal('timed_out'),
        z.literal('action_required'),
        z.literal('stale'),
        z.literal('skipped'),
      ]),
    }),
  ),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<WorkflowRunCompletedEventOctokit>;

export type WorkflowRunCompletedEvent = WorkflowRunCompletedEventOctokit;

export function isWorkflowRunCompletedEvent(
  value: unknown,
): value is WorkflowRunCompletedEvent {
  return WorkflowRunCompletedEventSchema.safeParse(value).success;
}
