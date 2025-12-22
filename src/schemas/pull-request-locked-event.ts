/**
 * Auto-generated Zod schema for PullRequestLockedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestLockedEvent as PullRequestLockedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestLockedEventSchema = z.object({
  action: z.literal('locked'),
  number: z.number(),
  pull_request: PullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestLockedEventOctokit>;

export type PullRequestLockedEvent = PullRequestLockedEventOctokit;

export function isPullRequestLockedEvent(
  value: unknown,
): value is PullRequestLockedEvent {
  return PullRequestLockedEventSchema.safeParse(value).success;
}
