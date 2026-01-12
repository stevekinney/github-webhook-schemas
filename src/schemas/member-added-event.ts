/**
 * Auto-generated Zod schema for MemberAddedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MemberAddedEvent as MemberAddedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const MemberAddedEventSchema = z.object({
  action: z.literal('added'),
  changes: z
    .object({
      permission: z
        .object({
          to: z.union([z.literal('write'), z.literal('admin')]),
        })
        .optional(),
    })
    .optional(),
  member: UserSchema,
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<MemberAddedEventOctokit>;

export type MemberAddedEvent = MemberAddedEventOctokit;

export function isMemberAddedEvent(value: unknown): value is MemberAddedEvent {
  return MemberAddedEventSchema.safeParse(value).success;
}
