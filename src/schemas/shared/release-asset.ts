/**
 * Auto-generated Zod schema for ReleaseAsset
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { ReleaseAsset as ReleaseAssetOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const ReleaseAssetSchema = z.object({
  url: z.string(),
  browser_download_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  label: z.string().nullable(),
  state: z.literal('uploaded'),
  content_type: z.string(),
  size: z.number(),
  download_count: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  uploader: UserSchema.optional(),
}) satisfies z.ZodType<ReleaseAssetOctokit>;

export type ReleaseAsset = ReleaseAssetOctokit;

export function isReleaseAsset(value: unknown): value is ReleaseAsset {
  return ReleaseAssetSchema.safeParse(value).success;
}
