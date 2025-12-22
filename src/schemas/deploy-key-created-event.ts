/**
 * Auto-generated Zod schema for DeployKeyCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeployKeyCreatedEvent as DeployKeyCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DeployKeyCreatedEventSchema = z.object({
  action: z.literal('created'),
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
}) satisfies z.ZodType<DeployKeyCreatedEventOctokit>;

export type DeployKeyCreatedEvent = DeployKeyCreatedEventOctokit;

export function isDeployKeyCreatedEvent(value: unknown): value is DeployKeyCreatedEvent {
  return DeployKeyCreatedEventSchema.safeParse(value).success;
}
