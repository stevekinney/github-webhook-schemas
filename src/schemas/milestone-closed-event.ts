/**
 * Auto-generated Zod schema for MilestoneClosedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MilestoneClosedEvent as MilestoneClosedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MilestoneSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MilestoneClosedEventSchema = z.object({
  action: z.literal('closed'),
  milestone: MilestoneSchema.and(
    z.object({
      state: z.literal('closed'),
      closed_at: z.string(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<MilestoneClosedEventOctokit>;

export type MilestoneClosedEvent = MilestoneClosedEventOctokit;

export function isMilestoneClosedEvent(value: unknown): value is MilestoneClosedEvent {
  return MilestoneClosedEventSchema.safeParse(value).success;
}
