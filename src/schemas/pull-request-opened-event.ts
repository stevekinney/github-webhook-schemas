/**
 * Auto-generated Zod schema for PullRequestOpenedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestOpenedEvent as PullRequestOpenedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestOpenedEventSchema = z.object({
  action: z.literal('opened'),
  number: z.number(),
  pull_request: PullRequestSchema.and(
    z.object({
      state: z.literal('open'),
      closed_at: z.null(),
      merged_at: z.null(),
      active_lock_reason: z.null(),
      merged_by: z.null(),
    }),
  ),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestOpenedEventOctokit>;

export type PullRequestOpenedEvent = PullRequestOpenedEventOctokit;

export function isPullRequestOpenedEvent(
  value: unknown,
): value is PullRequestOpenedEvent {
  return PullRequestOpenedEventSchema.safeParse(value).success;
}
