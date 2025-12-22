/**
 * Auto-generated Zod schema for DependabotAlertReintroducedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DependabotAlertReintroducedEvent as DependabotAlertReintroducedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DependabotAlertSchema,
  GitHubOrgSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
} from './shared/index.js';

export const DependabotAlertReintroducedEventSchema = z.object({
  action: z.literal('reintroduced'),
  alert: DependabotAlertSchema,
  repository: RepositorySchema,
  sender: GitHubOrgSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DependabotAlertReintroducedEventOctokit>;

export type DependabotAlertReintroducedEvent = DependabotAlertReintroducedEventOctokit;

export function isDependabotAlertReintroducedEvent(
  value: unknown,
): value is DependabotAlertReintroducedEvent {
  return DependabotAlertReintroducedEventSchema.safeParse(value).success;
}
