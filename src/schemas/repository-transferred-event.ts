/**
 * Auto-generated Zod schema for RepositoryTransferredEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryTransferredEvent as RepositoryTransferredEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryTransferredEventSchema = z.object({
  action: z.literal('transferred'),
  changes: z.object({
    owner: z.object({
      from: z.object({
        user: UserSchema.optional(),
      }),
    }),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryTransferredEventOctokit>;

export type RepositoryTransferredEvent = RepositoryTransferredEventOctokit;

export function isRepositoryTransferredEvent(
  value: unknown,
): value is RepositoryTransferredEvent {
  return RepositoryTransferredEventSchema.safeParse(value).success;
}
