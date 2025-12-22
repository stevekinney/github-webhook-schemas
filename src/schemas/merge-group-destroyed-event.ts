/**
 * Auto-generated Zod schema for MergeGroupDestroyedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MergeGroupDestroyedEvent as MergeGroupDestroyedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MergeGroupDestroyedEventSchema = z.object({
  action: z.literal('destroyed'),
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
  reason: z.union([z.literal('dequeued'), z.literal('invalidated'), z.literal('merged')]),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<MergeGroupDestroyedEventOctokit>;

export type MergeGroupDestroyedEvent = MergeGroupDestroyedEventOctokit;

export function isMergeGroupDestroyedEvent(
  value: unknown,
): value is MergeGroupDestroyedEvent {
  return MergeGroupDestroyedEventSchema.safeParse(value).success;
}
