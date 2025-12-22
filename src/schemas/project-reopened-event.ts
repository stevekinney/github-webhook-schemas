/**
 * Auto-generated Zod schema for ProjectReopenedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectReopenedEvent as ProjectReopenedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectReopenedEventSchema = z.object({
  action: z.literal('reopened'),
  project: ProjectSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectReopenedEventOctokit>;

export type ProjectReopenedEvent = ProjectReopenedEventOctokit;

export function isProjectReopenedEvent(value: unknown): value is ProjectReopenedEvent {
  return ProjectReopenedEventSchema.safeParse(value).success;
}
