/**
 * Auto-generated Zod schema for ProjectsV2ItemCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectsV2ItemCreatedEvent as ProjectsV2ItemCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectsV2ItemSchema,
  UserSchema,
} from './shared/index.js';

export const ProjectsV2ItemCreatedEventSchema = z.object({
  action: z.literal('created'),
  projects_v2_item: ProjectsV2ItemSchema.and(
    z.object({
      archived_at: z.null(),
    }),
  ),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectsV2ItemCreatedEventOctokit>;

export type ProjectsV2ItemCreatedEvent = ProjectsV2ItemCreatedEventOctokit;

export function isProjectsV2ItemCreatedEvent(
  value: unknown,
): value is ProjectsV2ItemCreatedEvent {
  return ProjectsV2ItemCreatedEventSchema.safeParse(value).success;
}
