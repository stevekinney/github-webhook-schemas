/**
 * Auto-generated Zod schema for PackageNPMMetadata
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PackageNPMMetadata as PackageNPMMetadataOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const PackageNPMMetadataSchema = z.object({
  name: z.string().optional(),
  version: z.string().optional(),
  npm_user: z.string().optional(),
  author: z.record(z.string(), z.string()).nullable().optional(),
  bugs: z.record(z.string(), z.string()).nullable().optional(),
  dependencies: z.record(z.string(), z.string()).optional(),
  dev_dependencies: z.record(z.string(), z.string()).optional(),
  peer_dependencies: z.record(z.string(), z.string()).optional(),
  optional_dependencies: z.record(z.string(), z.string()).optional(),
  description: z.string().optional(),
  dist: z.record(z.string(), z.string()).nullable().optional(),
  git_head: z.string().optional(),
  homepage: z.string().optional(),
  license: z.string().optional(),
  main: z.string().optional(),
  repository: z.record(z.string(), z.string()).nullable().optional(),
  scripts: z.record(z.string(), z.unknown()).optional(),
  id: z.string().optional(),
  node_version: z.string().optional(),
  npm_version: z.string().optional(),
  has_shrinkwrap: z.union([z.literal(false), z.literal(true)]).optional(),
  maintainers: z.array(z.record(z.string(), z.unknown())).optional(),
  contributors: z.array(z.record(z.string(), z.unknown())).optional(),
  engines: z.record(z.string(), z.string()).optional(),
  keywords: z.array(z.string()).optional(),
  files: z.array(z.string()).optional(),
  bin: z.record(z.string(), z.unknown()).optional(),
  man: z.record(z.string(), z.unknown()).optional(),
  directories: z.record(z.string(), z.string()).nullable().optional(),
  os: z.array(z.string()).optional(),
  cpu: z.array(z.string()).optional(),
  readme: z.string().optional(),
  installation_command: z.string().optional(),
  release_id: z.number().optional(),
  commit_oid: z.string().optional(),
  published_via_actions: z.union([z.literal(false), z.literal(true)]).optional(),
  deleted_by_id: z.number().optional(),
}) satisfies z.ZodType<PackageNPMMetadataOctokit>;

export type PackageNPMMetadata = PackageNPMMetadataOctokit;

export function isPackageNPMMetadata(value: unknown): value is PackageNPMMetadata {
  return PackageNPMMetadataSchema.safeParse(value).success;
}
