/**
 * Auto-generated Zod schema for DependabotAlertPackage
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DependabotAlertPackage as DependabotAlertPackageOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const DependabotAlertPackageSchema = z.object({
  name: z.string(),
  ecosystem: z.string(),
}) satisfies z.ZodType<DependabotAlertPackageOctokit>;

export type DependabotAlertPackage = DependabotAlertPackageOctokit;

export function isDependabotAlertPackage(
  value: unknown,
): value is DependabotAlertPackage {
  return DependabotAlertPackageSchema.safeParse(value).success;
}
