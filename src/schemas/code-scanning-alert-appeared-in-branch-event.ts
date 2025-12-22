/**
 * Auto-generated Zod schema for CodeScanningAlertAppearedInBranchEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CodeScanningAlertAppearedInBranchEvent as CodeScanningAlertAppearedInBranchEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  AlertInstanceSchema,
  GitHubOrgSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const CodeScanningAlertAppearedInBranchEventSchema = z.object({
  action: z.literal('appeared_in_branch'),
  alert: z.object({
    number: z.number(),
    created_at: z.string(),
    url: z.string(),
    html_url: z.string(),
    instances: z.array(AlertInstanceSchema),
    most_recent_instance: AlertInstanceSchema.optional(),
    state: z.union([z.literal('open'), z.literal('dismissed'), z.literal('fixed')]),
    dismissed_by: UserSchema,
    dismissed_at: z.string(),
    dismissed_reason: z.union([
      z.literal('false positive'),
      z.literal("won't fix"),
      z.literal('used in tests'),
    ]),
    rule: z.object({
      id: z.string(),
      severity: z.union([
        z.literal('none'),
        z.literal('note'),
        z.literal('warning'),
        z.literal('error'),
      ]),
      description: z.string(),
    }),
    tool: z.object({
      name: z.string(),
      version: z.string(),
    }),
  }),
  ref: z.string(),
  commit_oid: z.string(),
  repository: RepositorySchema,
  sender: GitHubOrgSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CodeScanningAlertAppearedInBranchEventOctokit>;

export type CodeScanningAlertAppearedInBranchEvent =
  CodeScanningAlertAppearedInBranchEventOctokit;

export function isCodeScanningAlertAppearedInBranchEvent(
  value: unknown,
): value is CodeScanningAlertAppearedInBranchEvent {
  return CodeScanningAlertAppearedInBranchEventSchema.safeParse(value).success;
}
