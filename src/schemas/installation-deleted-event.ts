/**
 * Auto-generated Zod schema for InstallationDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationDeletedEvent as InstallationDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { InstallationSchema, UserSchema } from './shared/index.js';

export const InstallationDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  installation: InstallationSchema,
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
}) satisfies z.ZodType<InstallationDeletedEventOctokit>;

export type InstallationDeletedEvent = InstallationDeletedEventOctokit;

export function isInstallationDeletedEvent(
  value: unknown,
): value is InstallationDeletedEvent {
  return InstallationDeletedEventSchema.safeParse(value).success;
}
