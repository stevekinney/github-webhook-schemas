/**
 * Auto-generated Zod schema for PullRequestEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestEditedEvent as PullRequestEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestEditedEventSchema = z.object({
  action: z.literal('edited'),
  number: z.number(),
  changes: z.object({
    body: z
      .object({
        from: z.string(),
      })
      .optional(),
    title: z
      .object({
        from: z.string(),
      })
      .optional(),
    base: z
      .object({
        ref: z.object({
          from: z.string(),
        }),
        sha: z.object({
          from: z.string(),
        }),
      })
      .optional(),
  }),
  pull_request: PullRequestSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestEditedEventOctokit>;

export type PullRequestEditedEvent = PullRequestEditedEventOctokit;

export function isPullRequestEditedEvent(
  value: unknown,
): value is PullRequestEditedEvent {
  return PullRequestEditedEventSchema.safeParse(value).success;
}
