/**
 * Auto-generated Zod schema for PackageNugetMetadata
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PackageNugetMetadata as PackageNugetMetadataOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const PackageNugetMetadataSchema = z.object({
  id: z.union([z.string(), z.number()]).optional(),
  name: z.string().optional(),
  value: z.union([
    z.string(),
    z.number(),
    z.literal(false),
    z.literal(true),
    z.object({
      url: z.string().optional(),
      branch: z.string().optional(),
      commit: z.string().optional(),
      type: z.string().optional(),
    }),
  ]),
}) satisfies z.ZodType<PackageNugetMetadataOctokit>;

export type PackageNugetMetadata = PackageNugetMetadataOctokit;

export function isPackageNugetMetadata(value: unknown): value is PackageNugetMetadata {
  return PackageNugetMetadataSchema.safeParse(value).success;
}
