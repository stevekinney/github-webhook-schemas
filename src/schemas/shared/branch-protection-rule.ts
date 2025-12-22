/**
 * Auto-generated Zod schema for BranchProtectionRule
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { BranchProtectionRule as BranchProtectionRuleOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const BranchProtectionRuleSchema = z.object({
  id: z.number(),
  repository_id: z.number(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  pull_request_reviews_enforcement_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  required_approving_review_count: z.number(),
  dismiss_stale_reviews_on_push: z.boolean(),
  require_code_owner_review: z.boolean(),
  authorized_dismissal_actors_only: z.boolean(),
  ignore_approvals_from_contributors: z.boolean(),
  require_last_push_approval: z.boolean().optional(),
  required_status_checks: z.array(z.string()),
  required_status_checks_enforcement_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  strict_required_status_checks_policy: z.boolean(),
  signature_requirement_enforcement_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  linear_history_requirement_enforcement_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  admin_enforced: z.boolean(),
  create_protected: z.boolean().optional(),
  allow_force_pushes_enforcement_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  allow_deletions_enforcement_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  merge_queue_enforcement_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  required_deployments_enforcement_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  required_conversation_resolution_level: z.union([
    z.literal('off'),
    z.literal('non_admins'),
    z.literal('everyone'),
  ]),
  authorized_actors_only: z.boolean(),
  authorized_actor_names: z.array(z.string()),
}) satisfies z.ZodType<BranchProtectionRuleOctokit>;

export type BranchProtectionRule = BranchProtectionRuleOctokit;

export function isBranchProtectionRule(value: unknown): value is BranchProtectionRule {
  return BranchProtectionRuleSchema.safeParse(value).success;
}
