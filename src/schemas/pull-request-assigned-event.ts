/**
 * Auto-generated Zod schema for PullRequestAssignedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestAssignedEvent as PullRequestAssignedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestAssignedEventSchema = z.object({
  action: z.literal('assigned'),
  number: z.number(),
  pull_request: PullRequestSchema,
  assignee: UserSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestAssignedEventOctokit>;

export type PullRequestAssignedEvent = PullRequestAssignedEventOctokit;

export function isPullRequestAssignedEvent(
  value: unknown,
): value is PullRequestAssignedEvent {
  return PullRequestAssignedEventSchema.safeParse(value).success;
}
