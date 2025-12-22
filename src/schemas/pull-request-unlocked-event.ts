/**
 * Auto-generated Zod schema for PullRequestUnlockedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestUnlockedEvent as PullRequestUnlockedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestUnlockedEventSchema = z.object({
  action: z.literal('unlocked'),
  number: z.number(),
  pull_request: PullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestUnlockedEventOctokit>;

export type PullRequestUnlockedEvent = PullRequestUnlockedEventOctokit;

export function isPullRequestUnlockedEvent(
  value: unknown,
): value is PullRequestUnlockedEvent {
  return PullRequestUnlockedEventSchema.safeParse(value).success;
}
