/**
 * Auto-generated Zod schema for DependabotAlertDismissedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DependabotAlertDismissedEvent as DependabotAlertDismissedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DependabotAlertSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DependabotAlertDismissedEventSchema = z.object({
  action: z.literal('dismissed'),
  alert: DependabotAlertSchema.and(
    z.object({
      state: z.literal('dismissed'),
      dismissed_at: z.string(),
      dismissed_by: UserSchema,
      dismissed_reason: z.union([
        z.literal('fix_started'),
        z.literal('inaccurate'),
        z.literal('no_bandwidth'),
        z.literal('not_used'),
        z.literal('tolerable_risk'),
      ]),
    }),
  ),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DependabotAlertDismissedEventOctokit>;

export type DependabotAlertDismissedEvent = DependabotAlertDismissedEventOctokit;

export function isDependabotAlertDismissedEvent(
  value: unknown,
): value is DependabotAlertDismissedEvent {
  return DependabotAlertDismissedEventSchema.safeParse(value).success;
}
