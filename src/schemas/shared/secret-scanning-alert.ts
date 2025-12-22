/**
 * Auto-generated Zod schema for SecretScanningAlert
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningAlert as SecretScanningAlertOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const SecretScanningAlertSchema = z.object({
  number: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  url: z.string(),
  html_url: z.string(),
  locations_url: z.string().optional(),
  state: z.union([z.literal('open'), z.literal('resolved')]),
  resolution: z.union([
    z.literal('revoked'),
    z.literal('false_positive'),
    z.literal('wont_fix'),
    z.literal('used_in_tests'),
  ]),
  resolved_at: z.string(),
  resolved_by: UserSchema.nullable(),
  resolution_comment: z.string().optional(),
  secret_type: z.string(),
  secret_type_display_name: z.string().optional(),
  secret: z.string().optional(),
  push_protection_bypassed: z.boolean().optional(),
  push_protection_bypassed_by: UserSchema.nullable().optional(),
  push_protection_bypassed_at: z.string().optional(),
}) satisfies z.ZodType<SecretScanningAlertOctokit>;

export type SecretScanningAlert = SecretScanningAlertOctokit;

export function isSecretScanningAlert(value: unknown): value is SecretScanningAlert {
  return SecretScanningAlertSchema.safeParse(value).success;
}
