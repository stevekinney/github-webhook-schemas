/**
 * Auto-generated Zod schema for CreateEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CreateEvent as CreateEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const CreateEventSchema = z.object({
  ref: z.string(),
  ref_type: z.union([z.literal('tag'), z.literal('branch')]),
  master_branch: z.string(),
  description: z.string(),
  pusher_type: z.string(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<CreateEventOctokit>;

export type CreateEvent = CreateEventOctokit;

export function isCreateEvent(value: unknown): value is CreateEvent {
  return CreateEventSchema.safeParse(value).success;
}
