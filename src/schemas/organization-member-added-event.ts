/**
 * Auto-generated Zod schema for OrganizationMemberAddedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { OrganizationMemberAddedEvent as OrganizationMemberAddedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MembershipSchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const OrganizationMemberAddedEventSchema = z.object({
  action: z.literal('member_added'),
  membership: MembershipSchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
}) satisfies z.ZodType<OrganizationMemberAddedEventOctokit>;

export type OrganizationMemberAddedEvent = OrganizationMemberAddedEventOctokit;

export function isOrganizationMemberAddedEvent(
  value: unknown,
): value is OrganizationMemberAddedEvent {
  return OrganizationMemberAddedEventSchema.safeParse(value).success;
}
