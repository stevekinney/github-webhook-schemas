/**
 * Auto-generated Zod schema for ProjectCardDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectCardDeletedEvent as ProjectCardDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectCardSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectCardDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  project_card: ProjectCardSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectCardDeletedEventOctokit>;

export type ProjectCardDeletedEvent = ProjectCardDeletedEventOctokit;

export function isProjectCardDeletedEvent(
  value: unknown,
): value is ProjectCardDeletedEvent {
  return ProjectCardDeletedEventSchema.safeParse(value).success;
}
