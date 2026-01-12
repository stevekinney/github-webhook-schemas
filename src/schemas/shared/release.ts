/**
 * Auto-generated Zod schema for Release
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Release as ReleaseOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { ReactionsSchema } from './reactions.js';
import { ReleaseAssetSchema } from './release-asset.js';
import { UserSchema } from './user.js';

export const ReleaseSchema = z.object({
  url: z.string(),
  assets_url: z.string(),
  upload_url: z.string(),
  html_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  tag_name: z.string(),
  target_commitish: z.string(),
  name: z.string(),
  draft: z.boolean(),
  author: UserSchema,
  prerelease: z.boolean(),
  created_at: z.string().nullable(),
  published_at: z.string().nullable(),
  assets: z.array(ReleaseAssetSchema),
  tarball_url: z.string().nullable(),
  zipball_url: z.string().nullable(),
  body: z.string(),
  mentions_count: z.number().optional(),
  reactions: ReactionsSchema.optional(),
  discussion_url: z.string().optional(),
}) satisfies z.ZodType<ReleaseOctokit>;

export type Release = ReleaseOctokit;

export function isRelease(value: unknown): value is Release {
  return ReleaseSchema.safeParse(value).success;
}
