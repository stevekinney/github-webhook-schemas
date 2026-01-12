/**
 * Auto-generated Zod schema for MembershipRemovedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MembershipRemovedEvent as MembershipRemovedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const MembershipRemovedEventSchema = z.object({
  action: z.literal('removed'),
  scope: z.union([z.literal('organization'), z.literal('team')]),
  member: UserSchema,
  sender: UserSchema,
  team: z.union([
    TeamSchema,
    z.object({
      id: z.number(),
      name: z.string(),
      deleted: z.union([z.literal(false), z.literal(true)]).optional(),
    }),
  ]),
  organization: OrganizationSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<MembershipRemovedEventOctokit>;

export type MembershipRemovedEvent = MembershipRemovedEventOctokit;

export function isMembershipRemovedEvent(
  value: unknown,
): value is MembershipRemovedEvent {
  return MembershipRemovedEventSchema.safeParse(value).success;
}
