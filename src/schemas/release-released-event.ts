/**
 * Auto-generated Zod schema for ReleaseReleasedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReleaseReleasedEvent as ReleaseReleasedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ReleaseSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ReleaseReleasedEventSchema = z.object({
  action: z.literal('released'),
  release: ReleaseSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ReleaseReleasedEventOctokit>;

export type ReleaseReleasedEvent = ReleaseReleasedEventOctokit;

export function isReleaseReleasedEvent(value: unknown): value is ReleaseReleasedEvent {
  return ReleaseReleasedEventSchema.safeParse(value).success;
}
