/**
 * Auto-generated Zod schema for Project
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Project as ProjectOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const ProjectSchema = z.object({
  owner_url: z.string(),
  url: z.string(),
  html_url: z.string(),
  columns_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  body: z.string().nullable(),
  number: z.number(),
  state: z.union([z.literal('open'), z.literal('closed')]),
  creator: UserSchema,
  created_at: z.string(),
  updated_at: z.string(),
}) satisfies z.ZodType<ProjectOctokit>;

export type Project = ProjectOctokit;

export function isProject(value: unknown): value is Project {
  return ProjectSchema.safeParse(value).success;
}
