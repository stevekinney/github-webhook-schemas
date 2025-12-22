/**
 * Auto-generated Zod schema for DiscussionCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionCreatedEvent as DiscussionCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionCreatedEventSchema = z.object({
  action: z.literal('created'),
  discussion: DiscussionSchema.and(
    z.object({
      state: z.union([z.literal('open'), z.literal('converting')]),
      locked: z.literal(false),
      answer_html_url: z.null(),
      answer_chosen_at: z.null(),
      answer_chosen_by: z.null(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionCreatedEventOctokit>;

export type DiscussionCreatedEvent = DiscussionCreatedEventOctokit;

export function isDiscussionCreatedEvent(
  value: unknown,
): value is DiscussionCreatedEvent {
  return DiscussionCreatedEventSchema.safeParse(value).success;
}
