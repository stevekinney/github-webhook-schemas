/**
 * Auto-generated Zod schema for RepositoryDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryDeletedEvent as RepositoryDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryDeletedEventOctokit>;

export type RepositoryDeletedEvent = RepositoryDeletedEventOctokit;

export function isRepositoryDeletedEvent(
  value: unknown,
): value is RepositoryDeletedEvent {
  return RepositoryDeletedEventSchema.safeParse(value).success;
}
