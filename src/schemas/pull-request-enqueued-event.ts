/**
 * Auto-generated Zod schema for PullRequestEnqueuedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestEnqueuedEvent as PullRequestEnqueuedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestEnqueuedEventSchema = z.object({
  action: z.literal('enqueued'),
  number: z.number(),
  pull_request: PullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestEnqueuedEventOctokit>;

export type PullRequestEnqueuedEvent = PullRequestEnqueuedEventOctokit;

export function isPullRequestEnqueuedEvent(
  value: unknown,
): value is PullRequestEnqueuedEvent {
  return PullRequestEnqueuedEventSchema.safeParse(value).success;
}
