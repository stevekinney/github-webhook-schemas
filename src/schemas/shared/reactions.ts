/**
 * Auto-generated Zod schema for Reactions
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Reactions as ReactionsOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const ReactionsSchema = z.object({
  url: z.string(),
  total_count: z.number(),
  '+1': z.number(),
  '-1': z.number(),
  laugh: z.number(),
  hooray: z.number(),
  confused: z.number(),
  heart: z.number(),
  rocket: z.number(),
  eyes: z.number(),
}) satisfies z.ZodType<ReactionsOctokit>;

export type Reactions = ReactionsOctokit;

export function isReactions(value: unknown): value is Reactions {
  return ReactionsSchema.safeParse(value).success;
}
