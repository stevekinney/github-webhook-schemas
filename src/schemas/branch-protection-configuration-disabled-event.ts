/**
 * Auto-generated Zod schema for BranchProtectionConfigurationDisabledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { BranchProtectionConfigurationDisabledEvent as BranchProtectionConfigurationDisabledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const BranchProtectionConfigurationDisabledEventSchema = z.object({
  action: z.literal('disabled'),
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
}) satisfies z.ZodType<BranchProtectionConfigurationDisabledEventOctokit>;

export type BranchProtectionConfigurationDisabledEvent =
  BranchProtectionConfigurationDisabledEventOctokit;

export function isBranchProtectionConfigurationDisabledEvent(
  value: unknown,
): value is BranchProtectionConfigurationDisabledEvent {
  return BranchProtectionConfigurationDisabledEventSchema.safeParse(value).success;
}
