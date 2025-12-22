/**
 * Auto-generated Zod schema for GithubAppAuthorizationRevokedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { GithubAppAuthorizationRevokedEvent as GithubAppAuthorizationRevokedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './shared/index.js';

export const GithubAppAuthorizationRevokedEventSchema = z.object({
  action: z.literal('revoked'),
  sender: UserSchema,
}) satisfies z.ZodType<GithubAppAuthorizationRevokedEventOctokit>;

export type GithubAppAuthorizationRevokedEvent =
  GithubAppAuthorizationRevokedEventOctokit;

export function isGithubAppAuthorizationRevokedEvent(
  value: unknown,
): value is GithubAppAuthorizationRevokedEvent {
  return GithubAppAuthorizationRevokedEventSchema.safeParse(value).success;
}
