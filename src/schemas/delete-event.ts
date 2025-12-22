/**
 * Auto-generated Zod schema for DeleteEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeleteEvent as DeleteEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DeleteEventSchema = z.object({
  ref: z.string(),
  ref_type: z.union([z.literal('tag'), z.literal('branch')]),
  pusher_type: z.string(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DeleteEventOctokit>;

export type DeleteEvent = DeleteEventOctokit;

export function isDeleteEvent(value: unknown): value is DeleteEvent {
  return DeleteEventSchema.safeParse(value).success;
}
