/**
 * Auto-generated Zod schema for ProjectDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectDeletedEvent as ProjectDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  project: ProjectSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectDeletedEventOctokit>;

export type ProjectDeletedEvent = ProjectDeletedEventOctokit;

export function isProjectDeletedEvent(value: unknown): value is ProjectDeletedEvent {
  return ProjectDeletedEventSchema.safeParse(value).success;
}
