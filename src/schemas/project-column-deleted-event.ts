/**
 * Auto-generated Zod schema for ProjectColumnDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectColumnDeletedEvent as ProjectColumnDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectColumnSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectColumnDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  project_column: ProjectColumnSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectColumnDeletedEventOctokit>;

export type ProjectColumnDeletedEvent = ProjectColumnDeletedEventOctokit;

export function isProjectColumnDeletedEvent(
  value: unknown,
): value is ProjectColumnDeletedEvent {
  return ProjectColumnDeletedEventSchema.safeParse(value).success;
}
