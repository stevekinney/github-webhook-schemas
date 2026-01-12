/**
 * Auto-generated Zod schema for OrganizationMemberInvitedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { OrganizationMemberInvitedEvent as OrganizationMemberInvitedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const OrganizationMemberInvitedEventSchema = z.object({
  action: z.literal('member_invited'),
  invitation: z.object({
    id: z.number(),
    node_id: z.string(),
    login: z.string(),
    email: z.string().nullable(),
    role: z.string(),
    created_at: z.string(),
    failed_at: z.string().nullable(),
    failed_reason: z.string().nullable(),
    inviter: UserSchema,
    team_count: z.number(),
    invitation_teams_url: z.string(),
  }),
  user: UserSchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
}) satisfies z.ZodType<OrganizationMemberInvitedEventOctokit>;

export type OrganizationMemberInvitedEvent = OrganizationMemberInvitedEventOctokit;

export function isOrganizationMemberInvitedEvent(
  value: unknown,
): value is OrganizationMemberInvitedEvent {
  return OrganizationMemberInvitedEventSchema.safeParse(value).success;
}
