/**
 * Auto-generated Zod schema for ProjectsV2ItemRestoredEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectsV2ItemRestoredEvent as ProjectsV2ItemRestoredEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectsV2ItemSchema,
  UserSchema,
} from './shared/index.js';

export const ProjectsV2ItemRestoredEventSchema = z.object({
  changes: z.object({
    archived_at: z.object({
      from: z.string(),
      to: z.null(),
    }),
  }),
  action: z.literal('restored'),
  projects_v2_item: ProjectsV2ItemSchema.and(
    z.object({
      archived_at: z.null(),
    }),
  ),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectsV2ItemRestoredEventOctokit>;

export type ProjectsV2ItemRestoredEvent = ProjectsV2ItemRestoredEventOctokit;

export function isProjectsV2ItemRestoredEvent(
  value: unknown,
): value is ProjectsV2ItemRestoredEvent {
  return ProjectsV2ItemRestoredEventSchema.safeParse(value).success;
}
