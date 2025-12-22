/**
 * Auto-generated Zod schema for PullRequestClosedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestClosedEvent as PullRequestClosedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestClosedEventSchema = z.object({
  action: z.literal('closed'),
  number: z.number(),
  pull_request: PullRequestSchema.and(
    z.object({
      state: z.literal('closed'),
      closed_at: z.string(),
      merged: z.boolean(),
    }),
  ),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestClosedEventOctokit>;

export type PullRequestClosedEvent = PullRequestClosedEventOctokit;

export function isPullRequestClosedEvent(
  value: unknown,
): value is PullRequestClosedEvent {
  return PullRequestClosedEventSchema.safeParse(value).success;
}
