/**
 * Auto-generated Zod schema for DiscussionLabeledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionLabeledEvent as DiscussionLabeledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DiscussionSchema,
  InstallationLiteSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DiscussionLabeledEventSchema = z.object({
  action: z.literal('labeled'),
  discussion: DiscussionSchema,
  label: LabelSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DiscussionLabeledEventOctokit>;

export type DiscussionLabeledEvent = DiscussionLabeledEventOctokit;

export function isDiscussionLabeledEvent(
  value: unknown,
): value is DiscussionLabeledEvent {
  return DiscussionLabeledEventSchema.safeParse(value).success;
}
