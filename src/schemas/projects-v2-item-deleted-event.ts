/**
 * Auto-generated Zod schema for ProjectsV2ItemDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectsV2ItemDeletedEvent as ProjectsV2ItemDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectsV2ItemSchema,
  UserSchema,
} from './shared/index.js';

export const ProjectsV2ItemDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  projects_v2_item: ProjectsV2ItemSchema,
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectsV2ItemDeletedEventOctokit>;

export type ProjectsV2ItemDeletedEvent = ProjectsV2ItemDeletedEventOctokit;

export function isProjectsV2ItemDeletedEvent(
  value: unknown,
): value is ProjectsV2ItemDeletedEvent {
  return ProjectsV2ItemDeletedEventSchema.safeParse(value).success;
}
