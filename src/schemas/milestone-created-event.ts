/**
 * Auto-generated Zod schema for MilestoneCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MilestoneCreatedEvent as MilestoneCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MilestoneSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MilestoneCreatedEventSchema = z.object({
  action: z.literal('created'),
  milestone: MilestoneSchema.and(
    z.object({
      state: z.literal('open'),
      closed_at: z.null(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<MilestoneCreatedEventOctokit>;

export type MilestoneCreatedEvent = MilestoneCreatedEventOctokit;

export function isMilestoneCreatedEvent(value: unknown): value is MilestoneCreatedEvent {
  return MilestoneCreatedEventSchema.safeParse(value).success;
}
