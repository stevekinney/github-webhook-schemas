/**
 * Auto-generated Zod schema for DeploymentReviewRejectedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeploymentReviewRejectedEvent as DeploymentReviewRejectedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
  WorkflowRunSchema,
} from './shared/index.js';

export const DeploymentReviewRejectedEventSchema = z.object({
  action: z.literal('rejected'),
  workflow_run: WorkflowRunSchema,
  since: z.string(),
  workflow_job_run: z
    .object({
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
    })
    .optional(),
  workflow_job_runs: z
    .array(
      z.object({
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
    )
    .optional(),
  reviewers: z
    .array(
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
    )
    .optional(),
  approver: UserSchema.optional(),
  comment: z.string().optional(),
  repository: RepositorySchema,
  organization: OrganizationSchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<DeploymentReviewRejectedEventOctokit>;

export type DeploymentReviewRejectedEvent = DeploymentReviewRejectedEventOctokit;

export function isDeploymentReviewRejectedEvent(
  value: unknown,
): value is DeploymentReviewRejectedEvent {
  return DeploymentReviewRejectedEventSchema.safeParse(value).success;
}
