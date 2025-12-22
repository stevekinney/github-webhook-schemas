/**
 * Auto-generated Zod schema for TeamRemovedFromRepositoryEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { TeamRemovedFromRepositoryEvent as TeamRemovedFromRepositoryEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const TeamRemovedFromRepositoryEventSchema = z.object({
  action: z.literal('removed_from_repository'),
  team: TeamSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<TeamRemovedFromRepositoryEventOctokit>;

export type TeamRemovedFromRepositoryEvent = TeamRemovedFromRepositoryEventOctokit;

export function isTeamRemovedFromRepositoryEvent(
  value: unknown,
): value is TeamRemovedFromRepositoryEvent {
  return TeamRemovedFromRepositoryEventSchema.safeParse(value).success;
}
