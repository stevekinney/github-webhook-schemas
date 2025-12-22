/**
 * Auto-generated Zod schema for TeamCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { TeamCreatedEvent as TeamCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const TeamCreatedEventSchema = z.object({
  action: z.literal('created'),
  team: TeamSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<TeamCreatedEventOctokit>;

export type TeamCreatedEvent = TeamCreatedEventOctokit;

export function isTeamCreatedEvent(value: unknown): value is TeamCreatedEvent {
  return TeamCreatedEventSchema.safeParse(value).success;
}
