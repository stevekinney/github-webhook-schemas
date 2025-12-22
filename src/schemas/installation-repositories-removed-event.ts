/**
 * Auto-generated Zod schema for InstallationRepositoriesRemovedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { InstallationRepositoriesRemovedEvent as InstallationRepositoriesRemovedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { InstallationSchema, UserSchema } from './shared/index.js';

export const InstallationRepositoriesRemovedEventSchema = z.object({
  action: z.literal('removed'),
  installation: InstallationSchema,
  repository_selection: z.union([z.literal('all'), z.literal('selected')]),
  repositories_added: z.tuple([]),
  repositories_removed: z.array(
    z.object({
      id: z.number(),
      node_id: z.string(),
      name: z.string(),
      full_name: z.string(),
      private: z.boolean(),
    }),
  ),
  requester: UserSchema.nullable(),
  sender: UserSchema,
}) satisfies z.ZodType<InstallationRepositoriesRemovedEventOctokit>;

export type InstallationRepositoriesRemovedEvent =
  InstallationRepositoriesRemovedEventOctokit;

export function isInstallationRepositoriesRemovedEvent(
  value: unknown,
): value is InstallationRepositoriesRemovedEvent {
  return InstallationRepositoriesRemovedEventSchema.safeParse(value).success;
}
