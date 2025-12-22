/**
 * Auto-generated Zod schema for DiscussionCategoryChangedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionCategoryChangedEvent as DiscussionCategoryChangedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionCategorySchema,
  DiscussionSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionCategoryChangedEventSchema = z.object({
  changes: z.object({
    category: z.object({
      from: DiscussionCategorySchema,
    }),
  }),
  action: z.literal('category_changed'),
  discussion: DiscussionSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionCategoryChangedEventOctokit>;

export type DiscussionCategoryChangedEvent = DiscussionCategoryChangedEventOctokit;

export function isDiscussionCategoryChangedEvent(
  value: unknown,
): value is DiscussionCategoryChangedEvent {
  return DiscussionCategoryChangedEventSchema.safeParse(value).success;
}
