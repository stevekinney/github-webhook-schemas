/**
 * Auto-generated Zod schema for BranchProtectionRuleCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { BranchProtectionRuleCreatedEvent as BranchProtectionRuleCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  BranchProtectionRuleSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const BranchProtectionRuleCreatedEventSchema = z.object({
  action: z.literal('created'),
  rule: BranchProtectionRuleSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<BranchProtectionRuleCreatedEventOctokit>;

export type BranchProtectionRuleCreatedEvent = BranchProtectionRuleCreatedEventOctokit;

export function isBranchProtectionRuleCreatedEvent(
  value: unknown,
): value is BranchProtectionRuleCreatedEvent {
  return BranchProtectionRuleCreatedEventSchema.safeParse(value).success;
}
