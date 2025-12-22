/**
 * Auto-generated Zod schema for OrganizationDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { OrganizationDeletedEvent as OrganizationDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MembershipSchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const OrganizationDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  membership: MembershipSchema.optional(),
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
}) satisfies z.ZodType<OrganizationDeletedEventOctokit>;

export type OrganizationDeletedEvent = OrganizationDeletedEventOctokit;

export function isOrganizationDeletedEvent(
  value: unknown,
): value is OrganizationDeletedEvent {
  return OrganizationDeletedEventSchema.safeParse(value).success;
}
