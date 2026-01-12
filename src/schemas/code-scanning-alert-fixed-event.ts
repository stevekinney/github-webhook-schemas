/**
 * Auto-generated Zod schema for CodeScanningAlertFixedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CodeScanningAlertFixedEvent as CodeScanningAlertFixedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  AlertInstanceSchema,
  GitHubOrgSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const CodeScanningAlertFixedEventSchema = z.object({
  action: z.literal('fixed'),
  alert: z.object({
    number: z.number(),
    created_at: z.string(),
    url: z.string(),
    html_url: z.string(),
    instances: z.array(
      AlertInstanceSchema.and(
        z.object({
          state: z.literal('fixed'),
        }),
      ),
    ),
    state: z.literal('fixed'),
    dismissed_by: UserSchema.nullable(),
    dismissed_at: z.string().nullable(),
    dismissed_reason: z
      .union([
        z.literal('false positive'),
        z.literal("won't fix"),
        z.literal('used in tests'),
      ])
      .nullable(),
    rule: z.object({
      id: z.string(),
      severity: z
        .union([
          z.literal('none'),
          z.literal('note'),
          z.literal('warning'),
          z.literal('error'),
        ])
        .nullable(),
      description: z.string(),
      name: z.string().optional(),
      full_description: z.string().optional(),
      tags: z.null().optional(),
      help: z.null().optional(),
    }),
    tool: z.object({
      name: z.string(),
      version: z.string().nullable(),
      guid: z.string().nullable().optional(),
    }),
    most_recent_instance: AlertInstanceSchema.optional(),
    instances_url: z.string().optional(),
  }),
  ref: z.string(),
  commit_oid: z.string(),
  repository: RepositorySchema,
  sender: GitHubOrgSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CodeScanningAlertFixedEventOctokit>;

export type CodeScanningAlertFixedEvent = CodeScanningAlertFixedEventOctokit;

export function isCodeScanningAlertFixedEvent(
  value: unknown,
): value is CodeScanningAlertFixedEvent {
  return CodeScanningAlertFixedEventSchema.safeParse(value).success;
}
