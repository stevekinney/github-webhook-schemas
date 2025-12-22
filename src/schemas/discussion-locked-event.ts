/**
 * Auto-generated Zod schema for DiscussionLockedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionLockedEvent as DiscussionLockedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionLockedEventSchema = z.object({
  action: z.literal('locked'),
  discussion: DiscussionSchema.and(
    z.object({
      state: z.literal('locked'),
      locked: z.literal(true),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionLockedEventOctokit>;

export type DiscussionLockedEvent = DiscussionLockedEventOctokit;

export function isDiscussionLockedEvent(value: unknown): value is DiscussionLockedEvent {
  return DiscussionLockedEventSchema.safeParse(value).success;
}
