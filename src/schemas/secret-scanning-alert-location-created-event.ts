/**
 * Auto-generated Zod schema for SecretScanningAlertLocationCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningAlertLocationCreatedEvent as SecretScanningAlertLocationCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  SecretScanningAlertSchema,
  SecretScanningLocationCommitSchema,
  SecretScanningLocationIssueBodySchema,
  SecretScanningLocationIssueCommentSchema,
  SecretScanningLocationIssueTitleSchema,
  UserSchema,
} from './shared/index.js';

export const SecretScanningAlertLocationCreatedEventSchema = z.object({
  action: z.literal('created'),
  alert: SecretScanningAlertSchema,
  location: z.union([
    z.object({
      type: z.literal('commit'),
      details: SecretScanningLocationCommitSchema,
    }),
    z.object({
      type: z.literal('issue_title'),
      details: SecretScanningLocationIssueTitleSchema,
    }),
    z.object({
      type: z.literal('issue_body'),
      details: SecretScanningLocationIssueBodySchema,
    }),
    z.object({
      type: z.literal('issue_comment'),
      details: SecretScanningLocationIssueCommentSchema,
    }),
  ]),
  repository: RepositorySchema,
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<SecretScanningAlertLocationCreatedEventOctokit>;

export type SecretScanningAlertLocationCreatedEvent =
  SecretScanningAlertLocationCreatedEventOctokit;

export function isSecretScanningAlertLocationCreatedEvent(
  value: unknown,
): value is SecretScanningAlertLocationCreatedEvent {
  return SecretScanningAlertLocationCreatedEventSchema.safeParse(value).success;
}
