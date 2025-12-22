/**
 * Auto-generated Zod schema for SecretScanningLocationCommit
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningLocationCommit as SecretScanningLocationCommitOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const SecretScanningLocationCommitSchema = z.object({
  path: z.string(),
  start_line: z.number(),
  end_line: z.number(),
  start_column: z.number(),
  end_column: z.number(),
  blob_sha: z.string(),
  blob_url: z.string(),
  commit_sha: z.string(),
  commit_url: z.string(),
}) satisfies z.ZodType<SecretScanningLocationCommitOctokit>;

export type SecretScanningLocationCommit = SecretScanningLocationCommitOctokit;

export function isSecretScanningLocationCommit(
  value: unknown,
): value is SecretScanningLocationCommit {
  return SecretScanningLocationCommitSchema.safeParse(value).success;
}
