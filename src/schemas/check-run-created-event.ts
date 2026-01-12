/**
 * Auto-generated Zod schema for CheckRunCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CheckRunCreatedEvent as CheckRunCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  AppSchema,
  CheckRunDeploymentSchema,
  CheckRunPullRequestSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const CheckRunCreatedEventSchema = z.object({
  action: z.literal('created'),
  check_run: z.object({
    id: z.number(),
    node_id: z.string().optional(),
    head_sha: z.string(),
    external_id: z.string(),
    url: z.string(),
    html_url: z.string(),
    details_url: z.string().optional(),
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
    output: z.object({
      title: z.string().nullable().optional(),
      summary: z.string().nullable(),
      text: z.string().nullable(),
      annotations_count: z.number(),
      annotations_url: z.string(),
    }),
    name: z.string(),
    check_suite: z.object({
      id: z.number(),
      node_id: z.string().optional(),
      head_branch: z.string().nullable(),
      head_sha: z.string(),
      status: z.union([
        z.literal('completed'),
        z.literal('in_progress'),
        z.literal('queued'),
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
        ])
        .nullable(),
      url: z.string(),
      before: z.string().nullable(),
      after: z.string().nullable(),
      pull_requests: z.array(CheckRunPullRequestSchema),
      deployment: CheckRunDeploymentSchema.optional(),
      app: AppSchema,
      created_at: z.string(),
      updated_at: z.string(),
    }),
    app: AppSchema,
    pull_requests: z.array(CheckRunPullRequestSchema),
    deployment: CheckRunDeploymentSchema.optional(),
  }),
  requested_action: z
    .object({
      identifier: z.string().optional(),
    })
    .nullable()
    .optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CheckRunCreatedEventOctokit>;

export type CheckRunCreatedEvent = CheckRunCreatedEventOctokit;

export function isCheckRunCreatedEvent(value: unknown): value is CheckRunCreatedEvent {
  return CheckRunCreatedEventSchema.safeParse(value).success;
}
