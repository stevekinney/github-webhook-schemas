/**
 * Auto-generated Zod schema for SecretScanningLocationIssueComment
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecretScanningLocationIssueComment as SecretScanningLocationIssueCommentOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const SecretScanningLocationIssueCommentSchema = z.object({
  issue_comment_url: z.string(),
}) satisfies z.ZodType<SecretScanningLocationIssueCommentOctokit>;

export type SecretScanningLocationIssueComment =
  SecretScanningLocationIssueCommentOctokit;

export function isSecretScanningLocationIssueComment(
  value: unknown,
): value is SecretScanningLocationIssueComment {
  return SecretScanningLocationIssueCommentSchema.safeParse(value).success;
}
