/**
 * Auto-generated Zod schema for InstallationSuspendEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationSuspendEvent as InstallationSuspendEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { InstallationSchema, UserSchema } from './shared/index.js';

export const InstallationSuspendEventSchema = z.object({
  action: z.literal('suspend'),
  installation: InstallationSchema.and(
    z.object({
      suspended_by: UserSchema,
      suspended_at: z.string(),
    }),
  ),
  repositories: z
    .array(
      z.object({
        id: z.number(),
        node_id: z.string(),
        name: z.string(),
        full_name: z.string(),
        private: z.boolean(),
      }),
    )
    .optional(),
  requester: z.null().optional(),
  sender: UserSchema,
}) satisfies z.ZodType<InstallationSuspendEventOctokit>;

export type InstallationSuspendEvent = InstallationSuspendEventOctokit;

export function isInstallationSuspendEvent(
  value: unknown,
): value is InstallationSuspendEvent {
  return InstallationSuspendEventSchema.safeParse(value).success;
}
