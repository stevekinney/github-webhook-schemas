/**
 * Auto-generated Zod schema for ReleaseCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReleaseCreatedEvent as ReleaseCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ReleaseSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ReleaseCreatedEventSchema = z.object({
  action: z.literal('created'),
  release: ReleaseSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ReleaseCreatedEventOctokit>;

export type ReleaseCreatedEvent = ReleaseCreatedEventOctokit;

export function isReleaseCreatedEvent(value: unknown): value is ReleaseCreatedEvent {
  return ReleaseCreatedEventSchema.safeParse(value).success;
}
