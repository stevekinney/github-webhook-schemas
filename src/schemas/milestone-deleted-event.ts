/**
 * Auto-generated Zod schema for MilestoneDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MilestoneDeletedEvent as MilestoneDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MilestoneSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MilestoneDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  milestone: MilestoneSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<MilestoneDeletedEventOctokit>;

export type MilestoneDeletedEvent = MilestoneDeletedEventOctokit;

export function isMilestoneDeletedEvent(value: unknown): value is MilestoneDeletedEvent {
  return MilestoneDeletedEventSchema.safeParse(value).success;
}
