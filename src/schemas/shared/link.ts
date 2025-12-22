/**
 * Auto-generated Zod schema for Link
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Link as LinkOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const LinkSchema = z.object({
  href: z.string(),
}) satisfies z.ZodType<LinkOctokit>;

export type Link = LinkOctokit;

export function isLink(value: unknown): value is Link {
  return LinkSchema.safeParse(value).success;
}
