/**
 * Auto-generated Zod schema for MilestoneOpenedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MilestoneOpenedEvent as MilestoneOpenedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MilestoneSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MilestoneOpenedEventSchema = z.object({
  action: z.literal('opened'),
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
}) satisfies z.ZodType<MilestoneOpenedEventOctokit>;

export type MilestoneOpenedEvent = MilestoneOpenedEventOctokit;

export function isMilestoneOpenedEvent(value: unknown): value is MilestoneOpenedEvent {
  return MilestoneOpenedEventSchema.safeParse(value).success;
}
