/**
 * Auto-generated Zod schema for ForkEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ForkEvent as ForkEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ForkEventSchema = z.object({
  forkee: RepositorySchema.and(
    z.object({
      fork: z.literal(true).optional(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ForkEventOctokit>;

export type ForkEvent = ForkEventOctokit;

export function isForkEvent(value: unknown): value is ForkEvent {
  return ForkEventSchema.safeParse(value).success;
}
