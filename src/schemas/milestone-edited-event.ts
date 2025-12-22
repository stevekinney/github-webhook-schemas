/**
 * Auto-generated Zod schema for MilestoneEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MilestoneEditedEvent as MilestoneEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MilestoneSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MilestoneEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    description: z
      .object({
        from: z.string(),
      })
      .optional(),
    due_on: z
      .object({
        from: z.string(),
      })
      .optional(),
    title: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  milestone: MilestoneSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<MilestoneEditedEventOctokit>;

export type MilestoneEditedEvent = MilestoneEditedEventOctokit;

export function isMilestoneEditedEvent(value: unknown): value is MilestoneEditedEvent {
  return MilestoneEditedEventSchema.safeParse(value).success;
}
