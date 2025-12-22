/**
 * Auto-generated Zod schema for DiscussionDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionDeletedEvent as DiscussionDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  discussion: DiscussionSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionDeletedEventOctokit>;

export type DiscussionDeletedEvent = DiscussionDeletedEventOctokit;

export function isDiscussionDeletedEvent(
  value: unknown,
): value is DiscussionDeletedEvent {
  return DiscussionDeletedEventSchema.safeParse(value).success;
}
