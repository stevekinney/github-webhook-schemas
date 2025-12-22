/**
 * Auto-generated Zod schema for StarCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { StarCreatedEvent as StarCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const StarCreatedEventSchema = z.object({
  action: z.literal('created'),
  starred_at: z.string(),
  repository: RepositorySchema,
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<StarCreatedEventOctokit>;

export type StarCreatedEvent = StarCreatedEventOctokit;

export function isStarCreatedEvent(value: unknown): value is StarCreatedEvent {
  return StarCreatedEventSchema.safeParse(value).success;
}
