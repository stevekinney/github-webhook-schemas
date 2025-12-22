/**
 * Auto-generated Zod schema for ReleaseDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReleaseDeletedEvent as ReleaseDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ReleaseSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ReleaseDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  release: ReleaseSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ReleaseDeletedEventOctokit>;

export type ReleaseDeletedEvent = ReleaseDeletedEventOctokit;

export function isReleaseDeletedEvent(value: unknown): value is ReleaseDeletedEvent {
  return ReleaseDeletedEventSchema.safeParse(value).success;
}
