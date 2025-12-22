/**
 * Auto-generated Zod schema for DiscussionUnpinnedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionUnpinnedEvent as DiscussionUnpinnedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionUnpinnedEventSchema = z.object({
  action: z.literal('unpinned'),
  discussion: DiscussionSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionUnpinnedEventOctokit>;

export type DiscussionUnpinnedEvent = DiscussionUnpinnedEventOctokit;

export function isDiscussionUnpinnedEvent(
  value: unknown,
): value is DiscussionUnpinnedEvent {
  return DiscussionUnpinnedEventSchema.safeParse(value).success;
}
