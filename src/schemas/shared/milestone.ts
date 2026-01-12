/**
 * Auto-generated Zod schema for Milestone
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Milestone as MilestoneOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const MilestoneSchema = z.object({
  url: z.string(),
  html_url: z.string(),
  labels_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  number: z.number(),
  title: z.string(),
  description: z.string().nullable(),
  creator: UserSchema,
  open_issues: z.number(),
  closed_issues: z.number(),
  state: z.union([z.literal('open'), z.literal('closed')]),
  created_at: z.string(),
  updated_at: z.string(),
  due_on: z.string().nullable(),
  closed_at: z.string().nullable(),
}) satisfies z.ZodType<MilestoneOctokit>;

export type Milestone = MilestoneOctokit;

export function isMilestone(value: unknown): value is Milestone {
  return MilestoneSchema.safeParse(value).success;
}
