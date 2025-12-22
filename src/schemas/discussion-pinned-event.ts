/**
 * Auto-generated Zod schema for DiscussionPinnedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionPinnedEvent as DiscussionPinnedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionPinnedEventSchema = z.object({
  action: z.literal('pinned'),
  discussion: DiscussionSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionPinnedEventOctokit>;

export type DiscussionPinnedEvent = DiscussionPinnedEventOctokit;

export function isDiscussionPinnedEvent(value: unknown): value is DiscussionPinnedEvent {
  return DiscussionPinnedEventSchema.safeParse(value).success;
}
