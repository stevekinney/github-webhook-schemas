/**
 * Auto-generated Zod schema for DeploymentReviewRequestedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeploymentReviewRequestedEvent as DeploymentReviewRequestedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
  WorkflowRunSchema,
} from './shared/index.js';

export const DeploymentReviewRequestedEventSchema = z.object({
  action: z.literal('requested'),
  workflow_run: WorkflowRunSchema.nullable(),
  since: z.string(),
  workflow_job_run: z.object({
    id: z.number(),
    name: z.string(),
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
        z.literal('cancelled'),
        z.literal('skipped'),
      ])
      .nullable(),
    html_url: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    environment: z.string(),
  }),
  environment: z.string(),
  reviewers: z.array(
    z.union([
      z.object({
        type: z.literal('User'),
        reviewer: UserSchema,
      }),
      z.object({
        type: z.literal('Team'),
        reviewer: TeamSchema,
      }),
    ]),
  ),
  requestor: UserSchema,
  repository: RepositorySchema,
  organization: OrganizationSchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<DeploymentReviewRequestedEventOctokit>;

export type DeploymentReviewRequestedEvent = DeploymentReviewRequestedEventOctokit;

export function isDeploymentReviewRequestedEvent(
  value: unknown,
): value is DeploymentReviewRequestedEvent {
  return DeploymentReviewRequestedEventSchema.safeParse(value).success;
}
