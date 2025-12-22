/**
 * Auto-generated Zod schema for ReferencedWorkflow
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReferencedWorkflow as ReferencedWorkflowOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const ReferencedWorkflowSchema = z.object({
  path: z.string(),
  sha: z.string(),
  ref: z.string().optional(),
}) satisfies z.ZodType<ReferencedWorkflowOctokit>;

export type ReferencedWorkflow = ReferencedWorkflowOctokit;

export function isReferencedWorkflow(value: unknown): value is ReferencedWorkflow {
  return ReferencedWorkflowSchema.safeParse(value).success;
}
