/**
 * Auto-generated Zod schema for RepositoryPrivatizedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryPrivatizedEvent as RepositoryPrivatizedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryPrivatizedEventSchema = z.object({
  action: z.literal('privatized'),
  repository: RepositorySchema.and(
    z.object({
      private: z.literal(true),
    }),
  ),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryPrivatizedEventOctokit>;

export type RepositoryPrivatizedEvent = RepositoryPrivatizedEventOctokit;

export function isRepositoryPrivatizedEvent(
  value: unknown,
): value is RepositoryPrivatizedEvent {
  return RepositoryPrivatizedEventSchema.safeParse(value).success;
}
