/**
 * Auto-generated Zod schema for OrgBlockUnblockedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { OrgBlockUnblockedEvent as OrgBlockUnblockedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const OrgBlockUnblockedEventSchema = z.object({
  action: z.literal('unblocked'),
  blocked_user: UserSchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
}) satisfies z.ZodType<OrgBlockUnblockedEventOctokit>;

export type OrgBlockUnblockedEvent = OrgBlockUnblockedEventOctokit;

export function isOrgBlockUnblockedEvent(
  value: unknown,
): value is OrgBlockUnblockedEvent {
  return OrgBlockUnblockedEventSchema.safeParse(value).success;
}
