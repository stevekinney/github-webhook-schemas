/**
 * Auto-generated Zod schema for SecretScanningLocationIssueBody
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningLocationIssueBody as SecretScanningLocationIssueBodyOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const SecretScanningLocationIssueBodySchema = z.object({
  issue_body_url: z.string(),
}) satisfies z.ZodType<SecretScanningLocationIssueBodyOctokit>;

export type SecretScanningLocationIssueBody = SecretScanningLocationIssueBodyOctokit;

export function isSecretScanningLocationIssueBody(
  value: unknown,
): value is SecretScanningLocationIssueBody {
  return SecretScanningLocationIssueBodySchema.safeParse(value).success;
}
