/**
 * Auto-generated Zod schema for ProjectsV2ItemConvertedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectsV2ItemConvertedEvent as ProjectsV2ItemConvertedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectsV2ItemSchema,
  UserSchema,
} from './shared/index.js';

export const ProjectsV2ItemConvertedEventSchema = z.object({
  changes: z.object({
    content_type: z.object({
      from: z.literal('DraftIssue'),
      to: z.literal('Issue'),
    }),
  }),
  action: z.literal('converted'),
  projects_v2_item: ProjectsV2ItemSchema.and(
    z.object({
      content_type: z.literal('Issue'),
    }),
  ),
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectsV2ItemConvertedEventOctokit>;

export type ProjectsV2ItemConvertedEvent = ProjectsV2ItemConvertedEventOctokit;

export function isProjectsV2ItemConvertedEvent(
  value: unknown,
): value is ProjectsV2ItemConvertedEvent {
  return ProjectsV2ItemConvertedEventSchema.safeParse(value).success;
}
