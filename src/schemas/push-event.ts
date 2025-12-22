/**
 * Auto-generated Zod schema for PushEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PushEvent as PushEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  CommitSchema,
  CommitterSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const PushEventSchema = z.object({
  ref: z.string(),
  before: z.string(),
  after: z.string(),
  created: z.boolean(),
  deleted: z.boolean(),
  forced: z.boolean(),
  base_ref: z.string(),
  compare: z.string(),
  commits: z.array(CommitSchema),
  head_commit: CommitSchema.nullable(),
  repository: RepositorySchema,
  pusher: CommitterSchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<PushEventOctokit>;

export type PushEvent = PushEventOctokit;

export function isPushEvent(value: unknown): value is PushEvent {
  return PushEventSchema.safeParse(value).success;
}
