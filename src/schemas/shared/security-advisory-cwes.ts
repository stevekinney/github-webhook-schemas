/**
 * Auto-generated Zod schema for SecurityAdvisoryCwes
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecurityAdvisoryCwes as SecurityAdvisoryCwesOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const SecurityAdvisoryCwesSchema = z.object({
  cwe_id: z.string(),
  name: z.string(),
}) satisfies z.ZodType<SecurityAdvisoryCwesOctokit>;

export type SecurityAdvisoryCwes = SecurityAdvisoryCwesOctokit;

export function isSecurityAdvisoryCwes(value: unknown): value is SecurityAdvisoryCwes {
  return SecurityAdvisoryCwesSchema.safeParse(value).success;
}
