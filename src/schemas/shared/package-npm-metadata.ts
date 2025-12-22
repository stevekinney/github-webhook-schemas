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
  author: z.object({}).optional(),
  bugs: z.object({}).optional(),
  dependencies: z.object({}).optional(),
  dev_dependencies: z.object({}).optional(),
  peer_dependencies: z.object({}).optional(),
  optional_dependencies: z.object({}).optional(),
  description: z.string().optional(),
  dist: z.object({}).optional(),
  git_head: z.string().optional(),
  homepage: z.string().optional(),
  license: z.string().optional(),
  main: z.string().optional(),
  repository: z.object({}).optional(),
  scripts: z.object({}).optional(),
  id: z.string().optional(),
  node_version: z.string().optional(),
  npm_version: z.string().optional(),
  has_shrinkwrap: z.boolean().optional(),
  maintainers: z.array(z.object({})).optional(),
  contributors: z.array(z.object({})).optional(),
  engines: z.object({}).optional(),
  keywords: z.array(z.string()).optional(),
  files: z.array(z.string()).optional(),
  bin: z.object({}).optional(),
  man: z.object({}).optional(),
  directories: z.object({}).optional(),
  os: z.array(z.string()).optional(),
  cpu: z.array(z.string()).optional(),
  readme: z.string().optional(),
  installation_command: z.string().optional(),
  release_id: z.number().optional(),
  commit_oid: z.string().optional(),
  published_via_actions: z.boolean().optional(),
  deleted_by_id: z.number().optional(),
}) satisfies z.ZodType<PackageNPMMetadataOctokit>;

export type PackageNPMMetadata = PackageNPMMetadataOctokit;

export function isPackageNPMMetadata(value: unknown): value is PackageNPMMetadata {
  return PackageNPMMetadataSchema.safeParse(value).success;
}
