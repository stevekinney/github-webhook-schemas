/**
 * Auto-generated Zod schema for ProjectColumnEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectColumnEditedEvent as ProjectColumnEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectColumnSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectColumnEditedEventSchema = z.object({
  action: z.literal('edited'),
  changes: z.object({
    name: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  project_column: ProjectColumnSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectColumnEditedEventOctokit>;

export type ProjectColumnEditedEvent = ProjectColumnEditedEventOctokit;

export function isProjectColumnEditedEvent(
  value: unknown,
): value is ProjectColumnEditedEvent {
  return ProjectColumnEditedEventSchema.safeParse(value).success;
}
