/**
 * Auto-generated Zod schema for InstallationLite
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationLite as InstallationLiteOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const InstallationLiteSchema = z.object({
  id: z.number(),
  node_id: z.string(),
}) satisfies z.ZodType<InstallationLiteOctokit>;

export type InstallationLite = InstallationLiteOctokit;

export function isInstallationLite(value: unknown): value is InstallationLite {
  return InstallationLiteSchema.safeParse(value).success;
}
