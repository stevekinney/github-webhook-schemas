/**
 * Auto-generated Zod schema for IssuesLockedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesLockedEvent as IssuesLockedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesLockedEventSchema = z.object({
  action: z.literal('locked'),
  issue: IssueSchema.and(
    z.object({
      locked: z.literal(true),
      active_lock_reason: z
        .union([
          z.literal('resolved'),
          z.literal('off-topic'),
          z.literal('too heated'),
          z.literal('spam'),
        ])
        .nullable(),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesLockedEventOctokit>;

export type IssuesLockedEvent = IssuesLockedEventOctokit;

export function isIssuesLockedEvent(value: unknown): value is IssuesLockedEvent {
  return IssuesLockedEventSchema.safeParse(value).success;
}
