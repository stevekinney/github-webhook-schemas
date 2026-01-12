/**
 * Auto-generated Zod schema for AlertInstance
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { AlertInstance as AlertInstanceOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const AlertInstanceSchema = z.object({
  ref: z.string(),
  analysis_key: z.string(),
  environment: z.string(),
  state: z.union([z.literal('open'), z.literal('dismissed'), z.literal('fixed')]),
  commit_sha: z.string().optional(),
  message: z
    .object({
      text: z.string().optional(),
    })
    .optional(),
  location: z
    .object({
      path: z.string().optional(),
      start_line: z.number().optional(),
      end_line: z.number().optional(),
      start_column: z.number().optional(),
      end_column: z.number().optional(),
    })
    .optional(),
  classifications: z.array(z.string()).optional(),
}) satisfies z.ZodType<AlertInstanceOctokit>;

export type AlertInstance = AlertInstanceOctokit;

export function isAlertInstance(value: unknown): value is AlertInstance {
  return AlertInstanceSchema.safeParse(value).success;
}
