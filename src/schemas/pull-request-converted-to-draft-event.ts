/**
 * Auto-generated Zod schema for PullRequestConvertedToDraftEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestConvertedToDraftEvent as PullRequestConvertedToDraftEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestConvertedToDraftEventSchema = z.object({
  action: z.literal('converted_to_draft'),
  number: z.number(),
  pull_request: PullRequestSchema.and(
    z.object({
      closed_at: z.null(),
      merged_at: z.null(),
      draft: z.literal(true),
      merged: z.literal(false),
      merged_by: z.null(),
    }),
  ),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestConvertedToDraftEventOctokit>;

export type PullRequestConvertedToDraftEvent = PullRequestConvertedToDraftEventOctokit;

export function isPullRequestConvertedToDraftEvent(
  value: unknown,
): value is PullRequestConvertedToDraftEvent {
  return PullRequestConvertedToDraftEventSchema.safeParse(value).success;
}
