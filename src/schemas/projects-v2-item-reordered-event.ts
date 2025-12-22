/**
 * Auto-generated Zod schema for ProjectsV2ItemReorderedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectsV2ItemReorderedEvent as ProjectsV2ItemReorderedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectsV2ItemSchema,
  UserSchema,
} from './shared/index.js';

export const ProjectsV2ItemReorderedEventSchema = z.object({
  changes: z.object({
    previous_projects_v2_item_node_id: z.object({
      from: z.string(),
      to: z.string(),
    }),
  }),
  action: z.literal('reordered'),
  projects_v2_item: ProjectsV2ItemSchema,
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectsV2ItemReorderedEventOctokit>;

export type ProjectsV2ItemReorderedEvent = ProjectsV2ItemReorderedEventOctokit;

export function isProjectsV2ItemReorderedEvent(
  value: unknown,
): value is ProjectsV2ItemReorderedEvent {
  return ProjectsV2ItemReorderedEventSchema.safeParse(value).success;
}
