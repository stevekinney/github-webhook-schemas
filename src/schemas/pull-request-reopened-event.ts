/**
 * Auto-generated Zod schema for PullRequestReopenedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReopenedEvent as PullRequestReopenedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReopenedEventSchema = z.object({
  action: z.literal('reopened'),
  number: z.number(),
  pull_request: PullRequestSchema.and(
    z.object({
      state: z.literal('open'),
      closed_at: z.null(),
      merged_at: z.null(),
      merged: z.boolean(),
      merged_by: z.null(),
    }),
  ),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestReopenedEventOctokit>;

export type PullRequestReopenedEvent = PullRequestReopenedEventOctokit;

export function isPullRequestReopenedEvent(
  value: unknown,
): value is PullRequestReopenedEvent {
  return PullRequestReopenedEventSchema.safeParse(value).success;
}
