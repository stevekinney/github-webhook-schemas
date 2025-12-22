/**
 * Auto-generated Zod schema for Workflow
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Workflow as WorkflowOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const WorkflowSchema = z.object({
  badge_url: z.string(),
  created_at: z.string(),
  html_url: z.string(),
  id: z.number(),
  name: z.string(),
  node_id: z.string(),
  path: z.string(),
  state: z.string(),
  updated_at: z.string(),
  url: z.string(),
}) satisfies z.ZodType<WorkflowOctokit>;

export type Workflow = WorkflowOctokit;

export function isWorkflow(value: unknown): value is Workflow {
  return WorkflowSchema.safeParse(value).success;
}
