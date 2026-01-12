/**
 * Auto-generated Zod schema for CheckRunDeployment
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CheckRunDeployment as CheckRunDeploymentOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const CheckRunDeploymentSchema = z.object({
  url: z.string(),
  id: z.number(),
  node_id: z.string(),
  task: z.string(),
  original_environment: z.string(),
  environment: z.string(),
  description: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
  statuses_url: z.string(),
  repository_url: z.string(),
}) satisfies z.ZodType<CheckRunDeploymentOctokit>;

export type CheckRunDeployment = CheckRunDeploymentOctokit;

export function isCheckRunDeployment(value: unknown): value is CheckRunDeployment {
  return CheckRunDeploymentSchema.safeParse(value).success;
}
