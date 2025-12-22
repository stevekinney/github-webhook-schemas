/**
 * Auto-generated Zod schema for ProjectsV2ItemArchivedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectsV2ItemArchivedEvent as ProjectsV2ItemArchivedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectsV2ItemSchema,
  UserSchema,
} from './shared/index.js';

export const ProjectsV2ItemArchivedEventSchema = z.object({
  changes: z.object({
    archived_at: z.object({
      from: z.null(),
      to: z.string(),
    }),
  }),
  action: z.literal('archived'),
  projects_v2_item: ProjectsV2ItemSchema.and(
    z.object({
      archived_at: z.string(),
    }),
  ),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectsV2ItemArchivedEventOctokit>;

export type ProjectsV2ItemArchivedEvent = ProjectsV2ItemArchivedEventOctokit;

export function isProjectsV2ItemArchivedEvent(
  value: unknown,
): value is ProjectsV2ItemArchivedEvent {
  return ProjectsV2ItemArchivedEventSchema.safeParse(value).success;
}
