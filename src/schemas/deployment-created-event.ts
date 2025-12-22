/**
 * Auto-generated Zod schema for DeploymentCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeploymentCreatedEvent as DeploymentCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DeploymentSchema,
  DeploymentWorkflowRunSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowSchema,
} from './shared/index.js';

export const DeploymentCreatedEventSchema = z.object({
  action: z.literal('created'),
  deployment: DeploymentSchema,
  workflow: WorkflowSchema.nullable(),
  workflow_run: DeploymentWorkflowRunSchema.nullable(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DeploymentCreatedEventOctokit>;

export type DeploymentCreatedEvent = DeploymentCreatedEventOctokit;

export function isDeploymentCreatedEvent(
  value: unknown,
): value is DeploymentCreatedEvent {
  return DeploymentCreatedEventSchema.safeParse(value).success;
}
