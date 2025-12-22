/**
 * Auto-generated Zod schema for MembershipAddedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MembershipAddedEvent as MembershipAddedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const MembershipAddedEventSchema = z.object({
  action: z.literal('added'),
  scope: z.literal('team'),
  member: UserSchema,
  sender: UserSchema,
  team: TeamSchema,
  organization: OrganizationSchema,
  installation: InstallationLiteSchema.optional(),
}) satisfies z.ZodType<MembershipAddedEventOctokit>;

export type MembershipAddedEvent = MembershipAddedEventOctokit;

export function isMembershipAddedEvent(value: unknown): value is MembershipAddedEvent {
  return MembershipAddedEventSchema.safeParse(value).success;
}
