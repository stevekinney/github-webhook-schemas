/**
 * Auto-generated Zod schema for PullRequestUnassignedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestUnassignedEvent as PullRequestUnassignedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestUnassignedEventSchema = z.object({
  action: z.literal('unassigned'),
  number: z.number(),
  pull_request: PullRequestSchema,
  assignee: UserSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestUnassignedEventOctokit>;

export type PullRequestUnassignedEvent = PullRequestUnassignedEventOctokit;

export function isPullRequestUnassignedEvent(
  value: unknown,
): value is PullRequestUnassignedEvent {
  return PullRequestUnassignedEventSchema.safeParse(value).success;
}
