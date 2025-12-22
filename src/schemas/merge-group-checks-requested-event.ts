/**
 * Auto-generated Zod schema for MergeGroupChecksRequestedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MergeGroupChecksRequestedEvent as MergeGroupChecksRequestedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MergeGroupChecksRequestedEventSchema = z.object({
  action: z.literal('checks_requested'),
  merge_group: z.object({
    head_sha: z.string(),
    head_ref: z.string(),
    base_ref: z.string(),
    base_sha: z.string(),
    head_commit: z.object({
      id: z.string(),
      tree_id: z.string(),
      message: z.string(),
      timestamp: z.string(),
      author: z.object({
        name: z.string(),
        email: z.string(),
      }),
      committer: z.object({
        name: z.string(),
        email: z.string(),
      }),
    }),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<MergeGroupChecksRequestedEventOctokit>;

export type MergeGroupChecksRequestedEvent = MergeGroupChecksRequestedEventOctokit;

export function isMergeGroupChecksRequestedEvent(
  value: unknown,
): value is MergeGroupChecksRequestedEvent {
  return MergeGroupChecksRequestedEventSchema.safeParse(value).success;
}
