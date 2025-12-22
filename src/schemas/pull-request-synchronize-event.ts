/**
 * Auto-generated Zod schema for PullRequestSynchronizeEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestSynchronizeEvent as PullRequestSynchronizeEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestSynchronizeEventSchema = z.object({
  action: z.literal('synchronize'),
  number: z.number(),
  before: z.string(),
  after: z.string(),
  pull_request: PullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestSynchronizeEventOctokit>;

export type PullRequestSynchronizeEvent = PullRequestSynchronizeEventOctokit;

export function isPullRequestSynchronizeEvent(
  value: unknown,
): value is PullRequestSynchronizeEvent {
  return PullRequestSynchronizeEventSchema.safeParse(value).success;
}
