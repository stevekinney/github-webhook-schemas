/**
 * Auto-generated Zod schema for RepositoryDispatchEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryDispatchEvent as RepositoryDispatchEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryDispatchEventSchema = z.object({
  action: z.string(),
  branch: z.string(),
  client_payload: z.record(z.string(), z.unknown()),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema,
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryDispatchEventOctokit>;

export type RepositoryDispatchEvent = RepositoryDispatchEventOctokit;

export function isRepositoryDispatchEvent(
  value: unknown,
): value is RepositoryDispatchEvent {
  return RepositoryDispatchEventSchema.safeParse(value).success;
}
