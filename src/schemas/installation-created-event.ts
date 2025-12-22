/**
 * Auto-generated Zod schema for InstallationCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationCreatedEvent as InstallationCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { InstallationSchema, UserSchema } from './shared/index.js';

export const InstallationCreatedEventSchema = z.object({
  action: z.literal('created'),
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
  requester: UserSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<InstallationCreatedEventOctokit>;

export type InstallationCreatedEvent = InstallationCreatedEventOctokit;

export function isInstallationCreatedEvent(
  value: unknown,
): value is InstallationCreatedEvent {
  return InstallationCreatedEventSchema.safeParse(value).success;
}
