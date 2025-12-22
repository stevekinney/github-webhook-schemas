/**
 * Auto-generated Zod schema for ProjectsV2ItemEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ProjectsV2ItemEditedEvent as ProjectsV2ItemEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  ProjectsV2ItemSchema,
  UserSchema,
} from './shared/index.js';

export const ProjectsV2ItemEditedEventSchema = z.object({
  changes: z.object({
    field_value: z.object({
      field_type: z.union([
        z.literal('number'),
        z.literal('single_select'),
        z.literal('date'),
        z.literal('text'),
        z.literal('iteration'),
      ]),
      field_node_id: z.string(),
    }),
  }),
  action: z.literal('edited'),
  projects_v2_item: ProjectsV2ItemSchema,
  sender: UserSchema,
  organization: OrganizationSchema.optional(),
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<ProjectsV2ItemEditedEventOctokit>;

export type ProjectsV2ItemEditedEvent = ProjectsV2ItemEditedEventOctokit;

export function isProjectsV2ItemEditedEvent(
  value: unknown,
): value is ProjectsV2ItemEditedEvent {
  return ProjectsV2ItemEditedEventSchema.safeParse(value).success;
}
