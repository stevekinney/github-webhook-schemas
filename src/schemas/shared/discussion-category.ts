/**
 * Auto-generated Zod schema for DiscussionCategory
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DiscussionCategory as DiscussionCategoryOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const DiscussionCategorySchema = z.object({
  id: z.number(),
  node_id: z.string(),
  repository_id: z.number(),
  emoji: z.string(),
  name: z.string(),
  description: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  slug: z.string(),
  is_answerable: z.boolean(),
}) satisfies z.ZodType<DiscussionCategoryOctokit>;

export type DiscussionCategory = DiscussionCategoryOctokit;

export function isDiscussionCategory(value: unknown): value is DiscussionCategory {
  return DiscussionCategorySchema.safeParse(value).success;
}
