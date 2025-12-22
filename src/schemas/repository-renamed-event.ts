/**
 * Auto-generated Zod schema for RepositoryRenamedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryRenamedEvent as RepositoryRenamedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryRenamedEventSchema = z.object({
  action: z.literal('renamed'),
  changes: z.object({
    repository: z.object({
      name: z.object({
        from: z.string(),
      }),
    }),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryRenamedEventOctokit>;

export type RepositoryRenamedEvent = RepositoryRenamedEventOctokit;

export function isRepositoryRenamedEvent(
  value: unknown,
): value is RepositoryRenamedEvent {
  return RepositoryRenamedEventSchema.safeParse(value).success;
}
