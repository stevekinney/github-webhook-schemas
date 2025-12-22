/**
 * Auto-generated Zod schema for TeamAddEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { TeamAddEvent as TeamAddEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const TeamAddEventSchema = z.object({
  team: TeamSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
}) satisfies z.ZodType<TeamAddEventOctokit>;

export type TeamAddEvent = TeamAddEventOctokit;

export function isTeamAddEvent(value: unknown): value is TeamAddEvent {
  return TeamAddEventSchema.safeParse(value).success;
}
