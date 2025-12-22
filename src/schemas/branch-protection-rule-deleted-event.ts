/**
 * Auto-generated Zod schema for BranchProtectionRuleDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { BranchProtectionRuleDeletedEvent as BranchProtectionRuleDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  BranchProtectionRuleSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const BranchProtectionRuleDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  rule: BranchProtectionRuleSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<BranchProtectionRuleDeletedEventOctokit>;

export type BranchProtectionRuleDeletedEvent = BranchProtectionRuleDeletedEventOctokit;

export function isBranchProtectionRuleDeletedEvent(
  value: unknown,
): value is BranchProtectionRuleDeletedEvent {
  return BranchProtectionRuleDeletedEventSchema.safeParse(value).success;
}
