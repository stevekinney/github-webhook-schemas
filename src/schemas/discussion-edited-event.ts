/**
 * Auto-generated Zod schema for DiscussionEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionEditedEvent as DiscussionEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionEditedEventSchema = z.object({
  changes: z.object({
    title: z
      .object({
        from: z.string(),
      })
      .optional(),
    body: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  action: z.literal('edited'),
  discussion: DiscussionSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionEditedEventOctokit>;

export type DiscussionEditedEvent = DiscussionEditedEventOctokit;

export function isDiscussionEditedEvent(value: unknown): value is DiscussionEditedEvent {
  return DiscussionEditedEventSchema.safeParse(value).success;
}
