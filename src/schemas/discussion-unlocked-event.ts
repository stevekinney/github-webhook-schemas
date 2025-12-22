/**
 * Auto-generated Zod schema for DiscussionUnlockedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionUnlockedEvent as DiscussionUnlockedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionUnlockedEventSchema = z.object({
  action: z.literal('unlocked'),
  discussion: DiscussionSchema.and(
    z.object({
      state: z.literal('open'),
      locked: z.literal(false),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionUnlockedEventOctokit>;

export type DiscussionUnlockedEvent = DiscussionUnlockedEventOctokit;

export function isDiscussionUnlockedEvent(
  value: unknown,
): value is DiscussionUnlockedEvent {
  return DiscussionUnlockedEventSchema.safeParse(value).success;
}
