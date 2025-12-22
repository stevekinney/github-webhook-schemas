/**
 * Auto-generated Zod schema for StarDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { StarDeletedEvent as StarDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const StarDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  starred_at: z.null(),
  repository: RepositorySchema,
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<StarDeletedEventOctokit>;

export type StarDeletedEvent = StarDeletedEventOctokit;

export function isStarDeletedEvent(value: unknown): value is StarDeletedEvent {
  return StarDeletedEventSchema.safeParse(value).success;
}
