/**
 * Auto-generated Zod schema for RepositoryImportEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryImportEvent as RepositoryImportEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const RepositoryImportEventSchema = z.object({
  status: z.union([z.literal('success'), z.literal('failure'), z.literal('cancelled')]),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<RepositoryImportEventOctokit>;

export type RepositoryImportEvent = RepositoryImportEventOctokit;

export function isRepositoryImportEvent(value: unknown): value is RepositoryImportEvent {
  return RepositoryImportEventSchema.safeParse(value).success;
}
