/**
 * Auto-generated Zod schema for WorkflowDispatchEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WorkflowDispatchEvent as WorkflowDispatchEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const WorkflowDispatchEventSchema = z.object({
  inputs: z.record(z.string(), z.unknown()).nullable(),
  ref: z.string(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  workflow: z.string(),
}) satisfies z.ZodType<WorkflowDispatchEventOctokit>;

export type WorkflowDispatchEvent = WorkflowDispatchEventOctokit;

export function isWorkflowDispatchEvent(value: unknown): value is WorkflowDispatchEvent {
  return WorkflowDispatchEventSchema.safeParse(value).success;
}
