/**
 * Auto-generated Zod schema for ReleasePrereleasedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReleasePrereleasedEvent as ReleasePrereleasedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ReleaseSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ReleasePrereleasedEventSchema = z.object({
  action: z.literal('prereleased'),
  release: ReleaseSchema.and(
    z.object({
      prerelease: z.literal(true),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ReleasePrereleasedEventOctokit>;

export type ReleasePrereleasedEvent = ReleasePrereleasedEventOctokit;

export function isReleasePrereleasedEvent(
  value: unknown,
): value is ReleasePrereleasedEvent {
  return ReleasePrereleasedEventSchema.safeParse(value).success;
}
