/**
 * Auto-generated Zod schema for DiscussionUnlabeledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionUnlabeledEvent as DiscussionUnlabeledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionUnlabeledEventSchema = z.object({
  action: z.literal('unlabeled'),
  discussion: DiscussionSchema,
  label: LabelSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionUnlabeledEventOctokit>;

export type DiscussionUnlabeledEvent = DiscussionUnlabeledEventOctokit;

export function isDiscussionUnlabeledEvent(
  value: unknown,
): value is DiscussionUnlabeledEvent {
  return DiscussionUnlabeledEventSchema.safeParse(value).success;
}
