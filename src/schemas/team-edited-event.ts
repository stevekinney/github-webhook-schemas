/**
 * Auto-generated Zod schema for TeamEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { TeamEditedEvent as TeamEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const TeamEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    description: z
      .object({
        from: z.string(),
      })
      .optional(),
    name: z
      .object({
        from: z.string(),
      })
      .optional(),
    privacy: z
      .object({
        from: z.string(),
      })
      .optional(),
    repository: z.object({
      permissions: z.object({
        from: z.object({
          admin: z.boolean().optional(),
          pull: z.boolean().optional(),
          push: z.boolean().optional(),
        }),
      }),
    }),
  }),
  team: TeamSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<TeamEditedEventOctokit>;

export type TeamEditedEvent = TeamEditedEventOctokit;

export function isTeamEditedEvent(value: unknown): value is TeamEditedEvent {
  return TeamEditedEventSchema.safeParse(value).success;
}
