/**
 * Auto-generated Zod schema for PullRequestDequeuedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestDequeuedEvent as PullRequestDequeuedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestDequeuedEventSchema = z.object({
  action: z.literal('dequeued'),
  number: z.number(),
  reason: z.string(),
  pull_request: PullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestDequeuedEventOctokit>;

export type PullRequestDequeuedEvent = PullRequestDequeuedEventOctokit;

export function isPullRequestDequeuedEvent(
  value: unknown,
): value is PullRequestDequeuedEvent {
  return PullRequestDequeuedEventSchema.safeParse(value).success;
}
