/**
 * Auto-generated Zod schema for BranchProtectionRuleEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { BranchProtectionRuleEditedEvent as BranchProtectionRuleEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  BranchProtectionRuleSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const BranchProtectionRuleEditedEventSchema = z.object({
  action: z.literal('edited'),
  rule: BranchProtectionRuleSchema,
  changes: z
    .object({
      admin_enforced: z
        .object({
          from: z.boolean(),
        })
        .optional(),
      allow_deletions_enforcement_level: z
        .object({
          from: z
            .union([z.literal('off'), z.literal('non_admins'), z.literal('everyone')])
            .nullable(),
        })
        .optional(),
      allow_force_pushes_enforcement_level: z
        .object({
          from: z.union([
            z.literal('off'),
            z.literal('non_admins'),
            z.literal('everyone'),
          ]),
        })
        .optional(),
      authorized_actors_only: z
        .object({
          from: z.boolean(),
        })
        .optional(),
      authorized_actor_names: z
        .object({
          from: z.array(z.string()),
        })
        .optional(),
      authorized_dismissal_actors_only: z
        .object({
          from: z.union([z.literal(false), z.literal(true)]).nullable(),
        })
        .optional(),
      dismiss_stale_reviews_on_push: z
        .object({
          from: z.boolean(),
        })
        .optional(),
      pull_request_reviews_enforcement_level: z
        .object({
          from: z.union([
            z.literal('off'),
            z.literal('non_admins'),
            z.literal('everyone'),
          ]),
        })
        .optional(),
      require_code_owner_review: z
        .object({
          from: z.boolean(),
        })
        .optional(),
      required_approving_review_count: z
        .object({
          from: z.number(),
        })
        .optional(),
      required_conversation_resolution_level: z
        .object({
          from: z.union([
            z.literal('off'),
            z.literal('non_admins'),
            z.literal('everyone'),
          ]),
        })
        .optional(),
      required_deployments_enforcement_level: z
        .object({
          from: z.union([
            z.literal('off'),
            z.literal('non_admins'),
            z.literal('everyone'),
          ]),
        })
        .optional(),
      required_status_checks: z
        .object({
          from: z.array(z.string()),
        })
        .optional(),
      required_status_checks_enforcement_level: z
        .object({
          from: z.union([
            z.literal('off'),
            z.literal('non_admins'),
            z.literal('everyone'),
          ]),
        })
        .optional(),
      signature_requirement_enforcement_level: z
        .object({
          from: z.union([
            z.literal('off'),
            z.literal('non_admins'),
            z.literal('everyone'),
          ]),
        })
        .optional(),
      linear_history_requirement_enforcement_level: z
        .object({
          from: z.union([
            z.literal('off'),
            z.literal('non_admins'),
            z.literal('everyone'),
          ]),
        })
        .optional(),
    })
    .optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<BranchProtectionRuleEditedEventOctokit>;

export type BranchProtectionRuleEditedEvent = BranchProtectionRuleEditedEventOctokit;

export function isBranchProtectionRuleEditedEvent(
  value: unknown,
): value is BranchProtectionRuleEditedEvent {
  return BranchProtectionRuleEditedEventSchema.safeParse(value).success;
}
