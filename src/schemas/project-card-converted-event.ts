/**
 * Auto-generated Zod schema for ProjectCardConvertedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectCardConvertedEvent as ProjectCardConvertedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectCardSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectCardConvertedEventSchema = z.object({
  action: z.literal('converted'),
  changes: z.object({
    note: z.object({
      from: z.string(),
    }),
  }),
  project_card: ProjectCardSchema,
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectCardConvertedEventOctokit>;

export type ProjectCardConvertedEvent = ProjectCardConvertedEventOctokit;

export function isProjectCardConvertedEvent(
  value: unknown,
): value is ProjectCardConvertedEvent {
  return ProjectCardConvertedEventSchema.safeParse(value).success;
}
