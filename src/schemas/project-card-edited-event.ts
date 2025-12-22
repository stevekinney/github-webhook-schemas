/**
 * Auto-generated Zod schema for ProjectCardEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectCardEditedEvent as ProjectCardEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectCardSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectCardEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    note: z.object({
      from: z.string(),
    }),
  }),
  project_card: ProjectCardSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectCardEditedEventOctokit>;

export type ProjectCardEditedEvent = ProjectCardEditedEventOctokit;

export function isProjectCardEditedEvent(
  value: unknown,
): value is ProjectCardEditedEvent {
  return ProjectCardEditedEventSchema.safeParse(value).success;
}
