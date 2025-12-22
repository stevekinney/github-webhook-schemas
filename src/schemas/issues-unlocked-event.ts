/**
 * Auto-generated Zod schema for IssuesUnlockedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesUnlockedEvent as IssuesUnlockedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesUnlockedEventSchema = z.object({
  action: z.literal('unlocked'),
  issue: IssueSchema.and(
    z.object({
      locked: z.literal(false),
      active_lock_reason: z.null(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesUnlockedEventOctokit>;

export type IssuesUnlockedEvent = IssuesUnlockedEventOctokit;

export function isIssuesUnlockedEvent(value: unknown): value is IssuesUnlockedEvent {
  return IssuesUnlockedEventSchema.safeParse(value).success;
}
