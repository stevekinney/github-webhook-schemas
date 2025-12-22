/**
 * Auto-generated Zod schema for ProjectColumn
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectColumn as ProjectColumnOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const ProjectColumnSchema = z.object({
  url: z.string(),
  project_url: z.string(),
  cards_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
}) satisfies z.ZodType<ProjectColumnOctokit>;

export type ProjectColumn = ProjectColumnOctokit;

export function isProjectColumn(value: unknown): value is ProjectColumn {
  return ProjectColumnSchema.safeParse(value).success;
}
