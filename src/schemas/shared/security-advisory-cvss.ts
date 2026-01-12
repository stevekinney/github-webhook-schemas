/**
 * Auto-generated Zod schema for SecurityAdvisoryCvss
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecurityAdvisoryCvss as SecurityAdvisoryCvssOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const SecurityAdvisoryCvssSchema = z.object({
  score: z.number(),
  vector_string: z.string().nullable(),
}) satisfies z.ZodType<SecurityAdvisoryCvssOctokit>;

export type SecurityAdvisoryCvss = SecurityAdvisoryCvssOctokit;

export function isSecurityAdvisoryCvss(value: unknown): value is SecurityAdvisoryCvss {
  return SecurityAdvisoryCvssSchema.safeParse(value).success;
}
