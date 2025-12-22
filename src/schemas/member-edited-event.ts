/**
 * Auto-generated Zod schema for MemberEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MemberEditedEvent as MemberEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MemberEditedEventSchema = z.object({
  action: z.literal('edited'),
  member: UserSchema,
  changes: z.object({
    old_permission: z.object({
      from: z.string(),
    }),
  }),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<MemberEditedEventOctokit>;

export type MemberEditedEvent = MemberEditedEventOctokit;

export function isMemberEditedEvent(value: unknown): value is MemberEditedEvent {
  return MemberEditedEventSchema.safeParse(value).success;
}
