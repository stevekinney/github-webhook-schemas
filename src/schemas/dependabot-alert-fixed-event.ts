/**
 * Auto-generated Zod schema for DependabotAlertFixedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DependabotAlertFixedEvent as DependabotAlertFixedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DependabotAlertSchema,
  GitHubOrgSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
} from './shared/index.js';

export const DependabotAlertFixedEventSchema = z.object({
  action: z.literal('fixed'),
  alert: DependabotAlertSchema.and(
    z.object({
      state: z.literal('fixed'),
      fixed_at: z.string(),
    }),
  ),
  repository: RepositorySchema,
  sender: GitHubOrgSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DependabotAlertFixedEventOctokit>;

export type DependabotAlertFixedEvent = DependabotAlertFixedEventOctokit;

export function isDependabotAlertFixedEvent(
  value: unknown,
): value is DependabotAlertFixedEvent {
  return DependabotAlertFixedEventSchema.safeParse(value).success;
}
