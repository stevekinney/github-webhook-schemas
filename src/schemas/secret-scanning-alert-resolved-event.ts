/**
 * Auto-generated Zod schema for SecretScanningAlertResolvedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningAlertResolvedEvent as SecretScanningAlertResolvedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  SecretScanningAlertSchema,
  UserSchema,
} from './shared/index.js';

export const SecretScanningAlertResolvedEventSchema = z.object({
  action: z.literal('resolved'),
  alert: SecretScanningAlertSchema.and(
    z.object({
      resolution: z.union([
        z.literal('revoked'),
        z.literal('false_positive'),
        z.literal('wont_fix'),
        z.literal('used_in_tests'),
      ]),
      resolved_by: UserSchema,
      resolved_at: z.string(),
    }),
  ),
  repository: RepositorySchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<SecretScanningAlertResolvedEventOctokit>;

export type SecretScanningAlertResolvedEvent = SecretScanningAlertResolvedEventOctokit;

export function isSecretScanningAlertResolvedEvent(
  value: unknown,
): value is SecretScanningAlertResolvedEvent {
  return SecretScanningAlertResolvedEventSchema.safeParse(value).success;
}
