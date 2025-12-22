/**
 * Auto-generated Zod schema for CheckRunRequestedActionEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CheckRunRequestedActionEvent as CheckRunRequestedActionEventOctokit } from '@octokit/webhooks-types';
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

export const CheckRunRequestedActionEventSchema = z.object({
  action: z.literal('requested_action'),
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
    ]),
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
    started_at: z.string(),
    completed_at: z.string(),
    output: z.object({
      title: z.string().optional(),
      summary: z.string(),
      text: z.string(),
      annotations_count: z.number(),
      annotations_url: z.string(),
    }),
    name: z.string(),
    check_suite: z.object({
      id: z.number(),
      node_id: z.string().optional(),
      head_branch: z.string(),
      head_sha: z.string(),
      status: z.union([
        z.literal('completed'),
        z.literal('in_progress'),
        z.literal('queued'),
        z.literal('waiting'),
      ]),
      conclusion: z.union([
        z.literal('success'),
        z.literal('failure'),
        z.literal('neutral'),
        z.literal('cancelled'),
        z.literal('timed_out'),
        z.literal('action_required'),
        z.literal('stale'),
      ]),
      url: z.string(),
      before: z.string(),
      after: z.string(),
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
  requested_action: z.object({
    identifier: z.string().optional(),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CheckRunRequestedActionEventOctokit>;

export type CheckRunRequestedActionEvent = CheckRunRequestedActionEventOctokit;

export function isCheckRunRequestedActionEvent(
  value: unknown,
): value is CheckRunRequestedActionEvent {
  return CheckRunRequestedActionEventSchema.safeParse(value).success;
}
