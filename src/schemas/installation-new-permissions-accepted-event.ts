/**
 * Auto-generated Zod schema for InstallationNewPermissionsAcceptedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationNewPermissionsAcceptedEvent as InstallationNewPermissionsAcceptedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { InstallationSchema, UserSchema } from './shared/index.js';

export const InstallationNewPermissionsAcceptedEventSchema = z.object({
  action: z.literal('new_permissions_accepted'),
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
}) satisfies z.ZodType<InstallationNewPermissionsAcceptedEventOctokit>;

export type InstallationNewPermissionsAcceptedEvent =
  InstallationNewPermissionsAcceptedEventOctokit;

export function isInstallationNewPermissionsAcceptedEvent(
  value: unknown,
): value is InstallationNewPermissionsAcceptedEvent {
  return InstallationNewPermissionsAcceptedEventSchema.safeParse(value).success;
}
