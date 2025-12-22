/**
 * Auto-generated Zod schema for ProjectColumnMovedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectColumnMovedEvent as ProjectColumnMovedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectColumnSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectColumnMovedEventSchema = z.object({
  action: z.literal('moved'),
  project_column: ProjectColumnSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectColumnMovedEventOctokit>;

export type ProjectColumnMovedEvent = ProjectColumnMovedEventOctokit;

export function isProjectColumnMovedEvent(
  value: unknown,
): value is ProjectColumnMovedEvent {
  return ProjectColumnMovedEventSchema.safeParse(value).success;
}
