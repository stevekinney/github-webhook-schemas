/**
 * Auto-generated Zod schema for OrganizationMemberRemovedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { OrganizationMemberRemovedEvent as OrganizationMemberRemovedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  MembershipSchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const OrganizationMemberRemovedEventSchema = z.object({
  action: z.literal('member_removed'),
  membership: MembershipSchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
}) satisfies z.ZodType<OrganizationMemberRemovedEventOctokit>;

export type OrganizationMemberRemovedEvent = OrganizationMemberRemovedEventOctokit;

export function isOrganizationMemberRemovedEvent(
  value: unknown,
): value is OrganizationMemberRemovedEvent {
  return OrganizationMemberRemovedEventSchema.safeParse(value).success;
}
