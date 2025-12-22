/**
 * Auto-generated Zod schema for PullRequestUnlabeledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestUnlabeledEvent as PullRequestUnlabeledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  LabelSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestUnlabeledEventSchema = z.object({
  action: z.literal('unlabeled'),
  number: z.number(),
  pull_request: PullRequestSchema,
  label: LabelSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestUnlabeledEventOctokit>;

export type PullRequestUnlabeledEvent = PullRequestUnlabeledEventOctokit;

export function isPullRequestUnlabeledEvent(
  value: unknown,
): value is PullRequestUnlabeledEvent {
  return PullRequestUnlabeledEventSchema.safeParse(value).success;
}
