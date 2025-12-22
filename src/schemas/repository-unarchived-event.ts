/**
 * Auto-generated Zod schema for RepositoryUnarchivedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryUnarchivedEvent as RepositoryUnarchivedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryUnarchivedEventSchema = z.object({
  action: z.literal('unarchived'),
  repository: RepositorySchema.and(
    z.object({
      archived: z.literal(false),
    }),
  ),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryUnarchivedEventOctokit>;

export type RepositoryUnarchivedEvent = RepositoryUnarchivedEventOctokit;

export function isRepositoryUnarchivedEvent(
  value: unknown,
): value is RepositoryUnarchivedEvent {
  return RepositoryUnarchivedEventSchema.safeParse(value).success;
}
