/**
 * Auto-generated Zod schema for DiscussionTransferredEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionTransferredEvent as DiscussionTransferredEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionTransferredEventSchema = z.object({
  changes: z.object({
    new_discussion: DiscussionSchema,
    new_repository: RepositorySchema,
  }),
  action: z.literal('transferred'),
  discussion: DiscussionSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionTransferredEventOctokit>;

export type DiscussionTransferredEvent = DiscussionTransferredEventOctokit;

export function isDiscussionTransferredEvent(
  value: unknown,
): value is DiscussionTransferredEvent {
  return DiscussionTransferredEventSchema.safeParse(value).success;
}
