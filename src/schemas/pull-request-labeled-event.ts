/**
 * Auto-generated Zod schema for PullRequestLabeledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestLabeledEvent as PullRequestLabeledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  LabelSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestLabeledEventSchema = z.object({
  action: z.literal('labeled'),
  number: z.number(),
  pull_request: PullRequestSchema,
  label: LabelSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestLabeledEventOctokit>;

export type PullRequestLabeledEvent = PullRequestLabeledEventOctokit;

export function isPullRequestLabeledEvent(
  value: unknown,
): value is PullRequestLabeledEvent {
  return PullRequestLabeledEventSchema.safeParse(value).success;
}
