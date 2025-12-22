/**
 * Auto-generated Zod schema for MemberRemovedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MemberRemovedEvent as MemberRemovedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MemberRemovedEventSchema = z.object({
  action: z.literal('removed'),
  member: UserSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<MemberRemovedEventOctokit>;

export type MemberRemovedEvent = MemberRemovedEventOctokit;

export function isMemberRemovedEvent(value: unknown): value is MemberRemovedEvent {
  return MemberRemovedEventSchema.safeParse(value).success;
}
