/**
 * Auto-generated Zod schema for ProjectCard
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectCard as ProjectCardOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const ProjectCardSchema = z.object({
  url: z.string(),
  project_url: z.string(),
  column_url: z.string(),
  column_id: z.number(),
  id: z.number(),
  node_id: z.string(),
  note: z.string(),
  archived: z.boolean(),
  creator: UserSchema,
  created_at: z.string(),
  updated_at: z.string(),
  content_url: z.string().optional(),
  after_id: z.union([z.string(), z.number()]).optional(),
}) satisfies z.ZodType<ProjectCardOctokit>;

export type ProjectCard = ProjectCardOctokit;

export function isProjectCard(value: unknown): value is ProjectCard {
  return ProjectCardSchema.safeParse(value).success;
}
