/**
 * Auto-generated Zod schema for CodeScanningAlertClosedByUserEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CodeScanningAlertClosedByUserEvent as CodeScanningAlertClosedByUserEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  AlertInstanceSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const CodeScanningAlertClosedByUserEventSchema = z.object({
  action: z.literal('closed_by_user'),
  alert: z.object({
    number: z.number(),
    created_at: z.string(),
    url: z.string(),
    html_url: z.string(),
    instances: z.array(
      AlertInstanceSchema.and(
        z.object({
          state: z.literal('dismissed'),
        }),
      ),
    ),
    most_recent_instance: AlertInstanceSchema.optional(),
    state: z.literal('dismissed'),
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
      name: z.string().optional(),
      full_description: z.string().optional(),
      tags: z.null().optional(),
      help: z.null().optional(),
    }),
    tool: z.object({
      name: z.string(),
      version: z.string(),
      guid: z.string().optional(),
    }),
  }),
  ref: z.string(),
  commit_oid: z.string(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CodeScanningAlertClosedByUserEventOctokit>;

export type CodeScanningAlertClosedByUserEvent =
  CodeScanningAlertClosedByUserEventOctokit;

export function isCodeScanningAlertClosedByUserEvent(
  value: unknown,
): value is CodeScanningAlertClosedByUserEvent {
  return CodeScanningAlertClosedByUserEventSchema.safeParse(value).success;
}
