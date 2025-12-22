/**
 * Auto-generated Zod schema for RepositoryArchivedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryArchivedEvent as RepositoryArchivedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryArchivedEventSchema = z.object({
  action: z.literal('archived'),
  repository: RepositorySchema.and(
    z.object({
      archived: z.literal(true),
    }),
  ),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryArchivedEventOctokit>;

export type RepositoryArchivedEvent = RepositoryArchivedEventOctokit;

export function isRepositoryArchivedEvent(
  value: unknown,
): value is RepositoryArchivedEvent {
  return RepositoryArchivedEventSchema.safeParse(value).success;
}
