/**
 * Auto-generated Zod schema for CheckSuiteRerequestedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CheckSuiteRerequestedEvent as CheckSuiteRerequestedEventOctokit } from '@octokit/webhooks-types';
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

export const CheckSuiteRerequestedEventSchema = z.object({
  action: z.literal('rerequested'),
  check_suite: z.object({
    id: z.number(),
    node_id: z.string(),
    head_branch: z.string().nullable(),
    head_sha: z.string(),
    status: z
      .union([
        z.literal('completed'),
        z.literal('in_progress'),
        z.literal('queued'),
        z.literal('requested'),
      ])
      .nullable(),
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
    app: AppSchema,
    created_at: z.string(),
    updated_at: z.string(),
    latest_check_runs_count: z.number(),
    check_runs_url: z.string(),
    head_commit: SimpleCommitSchema,
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CheckSuiteRerequestedEventOctokit>;

export type CheckSuiteRerequestedEvent = CheckSuiteRerequestedEventOctokit;

export function isCheckSuiteRerequestedEvent(
  value: unknown,
): value is CheckSuiteRerequestedEvent {
  return CheckSuiteRerequestedEventSchema.safeParse(value).success;
}
