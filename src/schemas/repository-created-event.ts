/**
 * Auto-generated Zod schema for RepositoryCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryCreatedEvent as RepositoryCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryCreatedEventSchema = z.object({
  action: z.literal('created'),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryCreatedEventOctokit>;

export type RepositoryCreatedEvent = RepositoryCreatedEventOctokit;

export function isRepositoryCreatedEvent(
  value: unknown,
): value is RepositoryCreatedEvent {
  return RepositoryCreatedEventSchema.safeParse(value).success;
}
