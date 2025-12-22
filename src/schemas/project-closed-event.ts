/**
 * Auto-generated Zod schema for ProjectClosedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectClosedEvent as ProjectClosedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectClosedEventSchema = z.object({
  action: z.literal('closed'),
  project: ProjectSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<ProjectClosedEventOctokit>;

export type ProjectClosedEvent = ProjectClosedEventOctokit;

export function isProjectClosedEvent(value: unknown): value is ProjectClosedEvent {
  return ProjectClosedEventSchema.safeParse(value).success;
}
