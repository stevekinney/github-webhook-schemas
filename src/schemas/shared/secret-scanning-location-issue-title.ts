/**
 * Auto-generated Zod schema for SecretScanningLocationIssueTitle
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningLocationIssueTitle as SecretScanningLocationIssueTitleOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const SecretScanningLocationIssueTitleSchema = z.object({
  issue_title_url: z.string(),
}) satisfies z.ZodType<SecretScanningLocationIssueTitleOctokit>;

export type SecretScanningLocationIssueTitle = SecretScanningLocationIssueTitleOctokit;

export function isSecretScanningLocationIssueTitle(
  value: unknown,
): value is SecretScanningLocationIssueTitle {
  return SecretScanningLocationIssueTitleSchema.safeParse(value).success;
}
