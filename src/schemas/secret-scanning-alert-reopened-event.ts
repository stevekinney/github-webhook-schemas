/**
 * Auto-generated Zod schema for SecretScanningAlertReopenedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningAlertReopenedEvent as SecretScanningAlertReopenedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const SecretScanningAlertReopenedEventSchema = z.object({
  action: z.literal('reopened'),
  alert: z.object({
    number: z.number(),
    secret_type: z.string(),
    resolution: z.null(),
    resolved_by: z.null(),
    resolved_at: z.null(),
  }),
  repository: RepositorySchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<SecretScanningAlertReopenedEventOctokit>;

export type SecretScanningAlertReopenedEvent = SecretScanningAlertReopenedEventOctokit;

export function isSecretScanningAlertReopenedEvent(
  value: unknown,
): value is SecretScanningAlertReopenedEvent {
  return SecretScanningAlertReopenedEventSchema.safeParse(value).success;
}
