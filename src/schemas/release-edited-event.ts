/**
 * Auto-generated Zod schema for ReleaseEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReleaseEditedEvent as ReleaseEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ReleaseSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ReleaseEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    body: z
      .object({
        from: z.string(),
      })
      .optional(),
    name: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  release: ReleaseSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ReleaseEditedEventOctokit>;

export type ReleaseEditedEvent = ReleaseEditedEventOctokit;

export function isReleaseEditedEvent(value: unknown): value is ReleaseEditedEvent {
  return ReleaseEditedEventSchema.safeParse(value).success;
}
