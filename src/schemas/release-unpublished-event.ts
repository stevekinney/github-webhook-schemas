/**
 * Auto-generated Zod schema for ReleaseUnpublishedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReleaseUnpublishedEvent as ReleaseUnpublishedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ReleaseSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ReleaseUnpublishedEventSchema = z.object({
  action: z.literal('unpublished'),
  release: ReleaseSchema.and(
    z.object({
      published_at: z.null(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ReleaseUnpublishedEventOctokit>;

export type ReleaseUnpublishedEvent = ReleaseUnpublishedEventOctokit;

export function isReleaseUnpublishedEvent(
  value: unknown,
): value is ReleaseUnpublishedEvent {
  return ReleaseUnpublishedEventSchema.safeParse(value).success;
}
