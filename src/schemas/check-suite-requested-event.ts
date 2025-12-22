/**
 * Auto-generated Zod schema for CheckSuiteRequestedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CheckSuiteRequestedEvent as CheckSuiteRequestedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  AppSchema,
  CheckRunPullRequestSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  SimpleCommitSchema,
  UserSchema,
} from './shared/index.js';

export const CheckSuiteRequestedEventSchema = z.object({
  action: z.literal('requested'),
  check_suite: z.object({
    id: z.number(),
    node_id: z.string(),
    head_branch: z.string(),
    head_sha: z.string(),
    status: z.union([
      z.literal('completed'),
      z.literal('in_progress'),
      z.literal('queued'),
      z.literal('requested'),
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
    app: AppSchema,
    created_at: z.string(),
    updated_at: z.string(),
    runs_rerequestable: z.boolean().optional(),
    rerequestable: z.boolean().optional(),
    latest_check_runs_count: z.number(),
    check_runs_url: z.string(),
    head_commit: SimpleCommitSchema,
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CheckSuiteRequestedEventOctokit>;

export type CheckSuiteRequestedEvent = CheckSuiteRequestedEventOctokit;

export function isCheckSuiteRequestedEvent(
  value: unknown,
): value is CheckSuiteRequestedEvent {
  return CheckSuiteRequestedEventSchema.safeParse(value).success;
}
