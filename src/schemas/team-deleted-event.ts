/**
 * Auto-generated Zod schema for TeamDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { TeamDeletedEvent as TeamDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const TeamDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  team: TeamSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<TeamDeletedEventOctokit>;

export type TeamDeletedEvent = TeamDeletedEventOctokit;

export function isTeamDeletedEvent(value: unknown): value is TeamDeletedEvent {
  return TeamDeletedEventSchema.safeParse(value).success;
}
