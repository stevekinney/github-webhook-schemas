/**
 * Auto-generated Zod schema for SecretScanningAlertRevokedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningAlertRevokedEvent as SecretScanningAlertRevokedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  SecretScanningAlertSchema,
  UserSchema,
} from './shared/index.js';

export const SecretScanningAlertRevokedEventSchema = z.object({
  action: z.literal('revoked'),
  alert: SecretScanningAlertSchema.and(
    z.object({
      resolution: z.literal('revoked'),
      resolved_by: UserSchema,
      resolved_at: z.string(),
    }),
  ),
  repository: RepositorySchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<SecretScanningAlertRevokedEventOctokit>;

export type SecretScanningAlertRevokedEvent = SecretScanningAlertRevokedEventOctokit;

export function isSecretScanningAlertRevokedEvent(
  value: unknown,
): value is SecretScanningAlertRevokedEvent {
  return SecretScanningAlertRevokedEventSchema.safeParse(value).success;
}
