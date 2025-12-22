/**
 * Auto-generated Zod schema for PublicEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PublicEvent as PublicEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PublicEventSchema = z.object({
  repository: RepositorySchema.and(
    z.object({
      private: z.literal(false),
    }),
  ),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<PublicEventOctokit>;

export type PublicEvent = PublicEventOctokit;

export function isPublicEvent(value: unknown): value is PublicEvent {
  return PublicEventSchema.safeParse(value).success;
}
