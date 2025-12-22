/**
 * Auto-generated Zod schema for InstallationRepositoriesAddedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationRepositoriesAddedEvent as InstallationRepositoriesAddedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { InstallationSchema, UserSchema } from './shared/index.js';

export const InstallationRepositoriesAddedEventSchema = z.object({
  action: z.literal('added'),
  installation: InstallationSchema,
  repository_selection: z.union([z.literal('all'), z.literal('selected')]),
  repositories_added: z.array(
    z.object({
      id: z.number(),
      node_id: z.string(),
      name: z.string(),
      full_name: z.string(),
      private: z.boolean(),
    }),
  ),
  repositories_removed: z.tuple([]),
  requester: UserSchema.nullable(),
  sender: UserSchema,
}) satisfies z.ZodType<InstallationRepositoriesAddedEventOctokit>;

export type InstallationRepositoriesAddedEvent =
  InstallationRepositoriesAddedEventOctokit;

export function isInstallationRepositoriesAddedEvent(
  value: unknown,
): value is InstallationRepositoriesAddedEvent {
  return InstallationRepositoriesAddedEventSchema.safeParse(value).success;
}
