/**
 * Auto-generated Zod schema for CodeScanningAlertReopenedByUserEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CodeScanningAlertReopenedByUserEvent as CodeScanningAlertReopenedByUserEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  AlertInstanceSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const CodeScanningAlertReopenedByUserEventSchema = z.object({
  action: z.literal('reopened_by_user'),
  alert: z.object({
    number: z.number(),
    created_at: z.string(),
    url: z.string(),
    html_url: z.string(),
    instances: z.array(
      AlertInstanceSchema.and(
        z.object({
          state: z.literal('open'),
        }),
      ),
    ),
    most_recent_instance: AlertInstanceSchema.optional(),
    state: z.literal('open'),
    dismissed_by: z.null(),
    dismissed_at: z.null(),
    dismissed_reason: z.null(),
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
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CodeScanningAlertReopenedByUserEventOctokit>;

export type CodeScanningAlertReopenedByUserEvent =
  CodeScanningAlertReopenedByUserEventOctokit;

export function isCodeScanningAlertReopenedByUserEvent(
  value: unknown,
): value is CodeScanningAlertReopenedByUserEvent {
  return CodeScanningAlertReopenedByUserEventSchema.safeParse(value).success;
}
