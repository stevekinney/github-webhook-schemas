/**
 * Auto-generated Zod schema for InstallationUnsuspendEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationUnsuspendEvent as InstallationUnsuspendEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { InstallationSchema, UserSchema } from './shared/index.js';

export const InstallationUnsuspendEventSchema = z.object({
  action: z.literal('unsuspend'),
  installation: InstallationSchema.and(
    z.object({
      suspended_by: z.null(),
      suspended_at: z.null(),
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
}) satisfies z.ZodType<InstallationUnsuspendEventOctokit>;

export type InstallationUnsuspendEvent = InstallationUnsuspendEventOctokit;

export function isInstallationUnsuspendEvent(
  value: unknown,
): value is InstallationUnsuspendEvent {
  return InstallationUnsuspendEventSchema.safeParse(value).success;
}
