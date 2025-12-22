/**
 * Auto-generated Zod schema for Membership
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Membership as MembershipOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const MembershipSchema = z.object({
  url: z.string(),
  state: z.string(),
  role: z.string(),
  organization_url: z.string(),
  user: UserSchema,
}) satisfies z.ZodType<MembershipOctokit>;

export type Membership = MembershipOctokit;

export function isMembership(value: unknown): value is Membership {
  return MembershipSchema.safeParse(value).success;
}
