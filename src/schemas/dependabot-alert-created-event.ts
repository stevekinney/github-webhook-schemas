/**
 * Auto-generated Zod schema for DependabotAlertCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DependabotAlertCreatedEvent as DependabotAlertCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DependabotAlertSchema,
  GitHubOrgSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
} from './shared/index.js';

export const DependabotAlertCreatedEventSchema = z.object({
  action: z.literal('created'),
  alert: DependabotAlertSchema.and(
    z.object({
      state: z.literal('open'),
      fixed_at: z.null(),
      dismissed_at: z.null(),
      dismissed_by: z.null(),
      dismissed_reason: z.null(),
      dismissed_comment: z.null(),
    }),
  ),
  repository: RepositorySchema,
  sender: GitHubOrgSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DependabotAlertCreatedEventOctokit>;

export type DependabotAlertCreatedEvent = DependabotAlertCreatedEventOctokit;

export function isDependabotAlertCreatedEvent(
  value: unknown,
): value is DependabotAlertCreatedEvent {
  return DependabotAlertCreatedEventSchema.safeParse(value).success;
}
