/**
 * Auto-generated Zod schema for License
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { License as LicenseOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const LicenseSchema = z.object({
  key: z.string(),
  name: z.string(),
  spdx_id: z.string(),
  url: z.string().nullable(),
  node_id: z.string(),
}) satisfies z.ZodType<LicenseOctokit>;

export type License = LicenseOctokit;

export function isLicense(value: unknown): value is License {
  return LicenseSchema.safeParse(value).success;
}
