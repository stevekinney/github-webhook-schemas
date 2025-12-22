/**
 * Auto-generated Zod schema for ProjectCardCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectCardCreatedEvent as ProjectCardCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectCardSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectCardCreatedEventSchema = z.object({
  action: z.literal('created'),
  project_card: ProjectCardSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectCardCreatedEventOctokit>;

export type ProjectCardCreatedEvent = ProjectCardCreatedEventOctokit;

export function isProjectCardCreatedEvent(
  value: unknown,
): value is ProjectCardCreatedEvent {
  return ProjectCardCreatedEventSchema.safeParse(value).success;
}
