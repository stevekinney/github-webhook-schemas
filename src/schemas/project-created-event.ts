/**
 * Auto-generated Zod schema for ProjectCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectCreatedEvent as ProjectCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectCreatedEventSchema = z.object({
  action: z.literal('created'),
  project: ProjectSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectCreatedEventOctokit>;

export type ProjectCreatedEvent = ProjectCreatedEventOctokit;

export function isProjectCreatedEvent(value: unknown): value is ProjectCreatedEvent {
  return ProjectCreatedEventSchema.safeParse(value).success;
}
