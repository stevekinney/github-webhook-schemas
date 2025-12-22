/**
 * Auto-generated Zod schema for WatchStartedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { WatchStartedEvent as WatchStartedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const WatchStartedEventSchema = z.object({
  action: z.literal('started'),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<WatchStartedEventOctokit>;

export type WatchStartedEvent = WatchStartedEventOctokit;

export function isWatchStartedEvent(value: unknown): value is WatchStartedEvent {
  return WatchStartedEventSchema.safeParse(value).success;
}
