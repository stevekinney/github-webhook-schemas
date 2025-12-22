/**
 * Auto-generated Zod schema for Deployment
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Deployment as DeploymentOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { AppSchema } from './app.js';
import { UserSchema } from './user.js';

export const DeploymentSchema = z.object({
  url: z.string(),
  id: z.number(),
  node_id: z.string(),
  sha: z.string(),
  ref: z.string(),
  task: z.string(),
  payload: z.object({}),
  original_environment: z.string(),
  environment: z.string(),
  transient_environment: z.boolean().optional(),
  production_environment: z.boolean().optional(),
  description: z.string(),
  creator: UserSchema,
  created_at: z.string(),
  updated_at: z.string(),
  statuses_url: z.string(),
  repository_url: z.string(),
  performed_via_github_app: AppSchema.nullable().optional(),
}) satisfies z.ZodType<DeploymentOctokit>;

export type Deployment = DeploymentOctokit;

export function isDeployment(value: unknown): value is Deployment {
  return DeploymentSchema.safeParse(value).success;
}
