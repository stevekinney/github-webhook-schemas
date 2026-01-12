/**
 * Auto-generated Zod schema for ProjectsV2Item
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectsV2Item as ProjectsV2ItemOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const ProjectsV2ItemSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  project_node_id: z.string(),
  content_node_id: z.string(),
  content_type: z.union([
    z.literal('DraftIssue'),
    z.literal('Issue'),
    z.literal('PullRequest'),
  ]),
  creator: UserSchema,
  created_at: z.string(),
  updated_at: z.string(),
  archived_at: z.string().nullable(),
}) satisfies z.ZodType<ProjectsV2ItemOctokit>;

export type ProjectsV2Item = ProjectsV2ItemOctokit;

export function isProjectsV2Item(value: unknown): value is ProjectsV2Item {
  return ProjectsV2ItemSchema.safeParse(value).success;
}
