/**
 * Auto-generated Zod schema for ProjectEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectEditedEvent as ProjectEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    name: z
      .object({
        from: z.string(),
      })
      .optional(),
    body: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  project: ProjectSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectEditedEventOctokit>;

export type ProjectEditedEvent = ProjectEditedEventOctokit;

export function isProjectEditedEvent(value: unknown): value is ProjectEditedEvent {
  return ProjectEditedEventSchema.safeParse(value).success;
}
