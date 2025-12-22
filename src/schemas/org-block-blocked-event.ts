/**
 * Auto-generated Zod schema for OrgBlockBlockedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { OrgBlockBlockedEvent as OrgBlockBlockedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const OrgBlockBlockedEventSchema = z.object({
  action: z.literal('blocked'),
  blocked_user: UserSchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
}) satisfies z.ZodType<OrgBlockBlockedEventOctokit>;

export type OrgBlockBlockedEvent = OrgBlockBlockedEventOctokit;

export function isOrgBlockBlockedEvent(value: unknown): value is OrgBlockBlockedEvent {
  return OrgBlockBlockedEventSchema.safeParse(value).success;
}
