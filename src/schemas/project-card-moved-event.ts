/**
 * Auto-generated Zod schema for ProjectCardMovedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectCardMovedEvent as ProjectCardMovedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectCardSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const ProjectCardMovedEventSchema = z.object({
  action: z.literal('moved'),
  changes: z
    .object({
      column_id: z.object({
        from: z.number(),
      }),
    })
    .optional(),
  project_card: ProjectCardSchema.and(
    z.object({
      after_id: z.number().nullable(),
    }),
  ),
  repository: RepositorySchema.optional(),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectCardMovedEventOctokit>;

export type ProjectCardMovedEvent = ProjectCardMovedEventOctokit;

export function isProjectCardMovedEvent(value: unknown): value is ProjectCardMovedEvent {
  return ProjectCardMovedEventSchema.safeParse(value).success;
}
