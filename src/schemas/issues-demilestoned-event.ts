/**
 * Auto-generated Zod schema for IssuesDemilestonedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesDemilestonedEvent as IssuesDemilestonedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  MilestoneSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesDemilestonedEventSchema = z.object({
  action: z.literal('demilestoned'),
  issue: IssueSchema.and(
    z.object({
      milestone: z.null(),
    }),
  ),
  milestone: MilestoneSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesDemilestonedEventOctokit>;

export type IssuesDemilestonedEvent = IssuesDemilestonedEventOctokit;

export function isIssuesDemilestonedEvent(
  value: unknown,
): value is IssuesDemilestonedEvent {
  return IssuesDemilestonedEventSchema.safeParse(value).success;
}
