/**
 * Auto-generated Zod schema for IssuesMilestonedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesMilestonedEvent as IssuesMilestonedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  MilestoneSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesMilestonedEventSchema = z.object({
  action: z.literal('milestoned'),
  issue: IssueSchema.and(
    z.object({
      milestone: MilestoneSchema,
    }),
  ),
  milestone: MilestoneSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesMilestonedEventOctokit>;

export type IssuesMilestonedEvent = IssuesMilestonedEventOctokit;

export function isIssuesMilestonedEvent(value: unknown): value is IssuesMilestonedEvent {
  return IssuesMilestonedEventSchema.safeParse(value).success;
}
