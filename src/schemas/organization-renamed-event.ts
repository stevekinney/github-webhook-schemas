/**
 * Auto-generated Zod schema for OrganizationRenamedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { OrganizationRenamedEvent as OrganizationRenamedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const OrganizationRenamedEventSchema = z.object({
  changes: z.object({
    login: z.object({
      from: z.string(),
    }),
  }),
  action: z.literal('renamed'),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
}) satisfies z.ZodType<OrganizationRenamedEventOctokit>;

export type OrganizationRenamedEvent = OrganizationRenamedEventOctokit;

export function isOrganizationRenamedEvent(
  value: unknown,
): value is OrganizationRenamedEvent {
  return OrganizationRenamedEventSchema.safeParse(value).success;
}
