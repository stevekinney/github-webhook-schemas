/**
 * Auto-generated Zod schema for CodeScanningAlertCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CodeScanningAlertCreatedEvent as CodeScanningAlertCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  AlertInstanceSchema,
  GitHubOrgSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
} from './shared/index.js';

export const CodeScanningAlertCreatedEventSchema = z.object({
  action: z.literal('created'),
  alert: z.object({
    number: z.number(),
    created_at: z.string(),
    url: z.string(),
    html_url: z.string(),
    instances: z.array(
      AlertInstanceSchema.and(
        z.object({
          state: z.union([z.literal('open'), z.literal('dismissed')]),
        }),
      ),
    ),
    most_recent_instance: AlertInstanceSchema.optional(),
    state: z.union([z.literal('open'), z.literal('dismissed')]),
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
  sender: GitHubOrgSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CodeScanningAlertCreatedEventOctokit>;

export type CodeScanningAlertCreatedEvent = CodeScanningAlertCreatedEventOctokit;

export function isCodeScanningAlertCreatedEvent(
  value: unknown,
): value is CodeScanningAlertCreatedEvent {
  return CodeScanningAlertCreatedEventSchema.safeParse(value).success;
}
