/**
 * Auto-generated Zod schema for RepositoryEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryEditedEvent as RepositoryEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    description: z
      .object({
        from: z.string(),
      })
      .optional(),
    default_branch: z
      .object({
        from: z.string(),
      })
      .optional(),
    homepage: z
      .object({
        from: z.string(),
      })
      .optional(),
    topics: z
      .object({
        from: z.array(z.string()),
      })
      .optional(),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryEditedEventOctokit>;

export type RepositoryEditedEvent = RepositoryEditedEventOctokit;

export function isRepositoryEditedEvent(value: unknown): value is RepositoryEditedEvent {
  return RepositoryEditedEventSchema.safeParse(value).success;
}
