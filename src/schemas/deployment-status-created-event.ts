/**
 * Auto-generated Zod schema for DeploymentStatusCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeploymentStatusCreatedEvent as DeploymentStatusCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  AppSchema,
  DeploymentSchema,
  DeploymentWorkflowRunSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
  WorkflowSchema,
} from './shared/index.js';

export const DeploymentStatusCreatedEventSchema = z.object({
  action: z.literal('created'),
  deployment_status: z.object({
    url: z.string(),
    id: z.number(),
    node_id: z.string(),
    state: z.union([
      z.literal('success'),
      z.literal('failure'),
      z.literal('in_progress'),
      z.literal('queued'),
      z.literal('waiting'),
      z.literal('error'),
      z.literal('pending'),
    ]),
    creator: UserSchema,
    description: z.string(),
    environment: z.string(),
    environment_url: z.string().optional(),
    log_url: z.string().optional(),
    target_url: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    deployment_url: z.string(),
    repository_url: z.string(),
    performed_via_github_app: AppSchema.nullable().optional(),
  }),
  deployment: DeploymentSchema,
  check_run: z
    .object({
      id: z.number(),
      name: z.string(),
      node_id: z.string(),
      head_sha: z.string(),
      external_id: z.string(),
      url: z.string(),
      html_url: z.string(),
      details_url: z.string(),
      status: z.union([
        z.literal('completed'),
        z.literal('in_progress'),
        z.literal('queued'),
        z.literal('waiting'),
      ]),
      conclusion: z
        .union([
          z.literal('success'),
          z.literal('failure'),
          z.literal('neutral'),
          z.literal('cancelled'),
          z.literal('timed_out'),
          z.literal('action_required'),
          z.literal('stale'),
          z.literal('skipped'),
        ])
        .nullable(),
      started_at: z.string(),
      completed_at: z.string().nullable(),
    })
    .optional(),
  workflow_run: DeploymentWorkflowRunSchema.optional(),
  workflow: WorkflowSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DeploymentStatusCreatedEventOctokit>;

export type DeploymentStatusCreatedEvent = DeploymentStatusCreatedEventOctokit;

export function isDeploymentStatusCreatedEvent(
  value: unknown,
): value is DeploymentStatusCreatedEvent {
  return DeploymentStatusCreatedEventSchema.safeParse(value).success;
}
