/**
 * Auto-generated Zod schema for RepositoryPublicizedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryPublicizedEvent as RepositoryPublicizedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryPublicizedEventSchema = z.object({
  action: z.literal('publicized'),
  repository: RepositorySchema.and(
    z.object({
      private: z.literal(false),
    }),
  ),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryPublicizedEventOctokit>;

export type RepositoryPublicizedEvent = RepositoryPublicizedEventOctokit;

export function isRepositoryPublicizedEvent(
  value: unknown,
): value is RepositoryPublicizedEvent {
  return RepositoryPublicizedEventSchema.safeParse(value).success;
}
