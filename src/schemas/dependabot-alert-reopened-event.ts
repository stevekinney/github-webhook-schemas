/**
 * Auto-generated Zod schema for DependabotAlertReopenedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DependabotAlertReopenedEvent as DependabotAlertReopenedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DependabotAlertSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DependabotAlertReopenedEventSchema = z.object({
  action: z.literal('reopened'),
  alert: DependabotAlertSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DependabotAlertReopenedEventOctokit>;

export type DependabotAlertReopenedEvent = DependabotAlertReopenedEventOctokit;

export function isDependabotAlertReopenedEvent(
  value: unknown,
): value is DependabotAlertReopenedEvent {
  return DependabotAlertReopenedEventSchema.safeParse(value).success;
}
