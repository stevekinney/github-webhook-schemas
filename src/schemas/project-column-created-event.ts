/**
 * Auto-generated Zod schema for ProjectColumnCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectColumnCreatedEvent as ProjectColumnCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectColumnSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectColumnCreatedEventSchema = z.object({
  action: z.literal('created'),
  project_column: ProjectColumnSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectColumnCreatedEventOctokit>;

export type ProjectColumnCreatedEvent = ProjectColumnCreatedEventOctokit;

export function isProjectColumnCreatedEvent(
  value: unknown,
): value is ProjectColumnCreatedEvent {
  return ProjectColumnCreatedEventSchema.safeParse(value).success;
}
