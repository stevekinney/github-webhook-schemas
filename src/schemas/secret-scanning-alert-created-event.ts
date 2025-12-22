/**
 * Auto-generated Zod schema for SecretScanningAlertCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningAlertCreatedEvent as SecretScanningAlertCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  SecretScanningAlertSchema,
} from './shared/index.js';

export const SecretScanningAlertCreatedEventSchema = z.object({
  action: z.literal('created'),
  alert: SecretScanningAlertSchema.and(
    z.object({
      resolution: z.null(),
      resolved_by: z.null(),
      resolved_at: z.null(),
    }),
  ),
  repository: RepositorySchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<SecretScanningAlertCreatedEventOctokit>;

export type SecretScanningAlertCreatedEvent = SecretScanningAlertCreatedEventOctokit;

export function isSecretScanningAlertCreatedEvent(
  value: unknown,
): value is SecretScanningAlertCreatedEvent {
  return SecretScanningAlertCreatedEventSchema.safeParse(value).success;
}
