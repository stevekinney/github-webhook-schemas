/**
 * Auto-generated Zod schema for DeployKeyDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeployKeyDeletedEvent as DeployKeyDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DeployKeyDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  key: z.object({
    id: z.number(),
    key: z.string(),
    url: z.string(),
    title: z.string(),
    verified: z.boolean(),
    created_at: z.string(),
    read_only: z.boolean(),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DeployKeyDeletedEventOctokit>;

export type DeployKeyDeletedEvent = DeployKeyDeletedEventOctokit;

export function isDeployKeyDeletedEvent(value: unknown): value is DeployKeyDeletedEvent {
  return DeployKeyDeletedEventSchema.safeParse(value).success;
}
