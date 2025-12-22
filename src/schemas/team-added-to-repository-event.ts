/**
 * Auto-generated Zod schema for TeamAddedToRepositoryEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { TeamAddedToRepositoryEvent as TeamAddedToRepositoryEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const TeamAddedToRepositoryEventSchema = z.object({
  action: z.literal('added_to_repository'),
  team: TeamSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<TeamAddedToRepositoryEventOctokit>;

export type TeamAddedToRepositoryEvent = TeamAddedToRepositoryEventOctokit;

export function isTeamAddedToRepositoryEvent(
  value: unknown,
): value is TeamAddedToRepositoryEvent {
  return TeamAddedToRepositoryEventSchema.safeParse(value).success;
}
