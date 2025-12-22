/**
 * Auto-generated Zod schema for BranchProtectionConfigurationEnabledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { BranchProtectionConfigurationEnabledEvent as BranchProtectionConfigurationEnabledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const BranchProtectionConfigurationEnabledEventSchema = z.object({
  action: z.literal('enabled'),
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
}) satisfies z.ZodType<BranchProtectionConfigurationEnabledEventOctokit>;

export type BranchProtectionConfigurationEnabledEvent =
  BranchProtectionConfigurationEnabledEventOctokit;

export function isBranchProtectionConfigurationEnabledEvent(
  value: unknown,
): value is BranchProtectionConfigurationEnabledEvent {
  return BranchProtectionConfigurationEnabledEventSchema.safeParse(value).success;
}
