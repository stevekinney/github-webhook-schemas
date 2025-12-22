/**
 * Auto-generated Zod schema for Label
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Label as LabelOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const LabelSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  url: z.string(),
  name: z.string(),
  description: z.string(),
  color: z.string(),
  default: z.boolean(),
}) satisfies z.ZodType<LabelOctokit>;

export type Label = LabelOctokit;

export function isLabel(value: unknown): value is Label {
  return LabelSchema.safeParse(value).success;
}
