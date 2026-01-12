/**
 * Auto-generated Zod schema for LabelEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { LabelEditedEvent as LabelEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const LabelEditedEventSchema = z.object({
  action: z.literal('edited'),
  label: LabelSchema,
  changes: z
    .object({
      color: z
        .object({
          from: z.string(),
        })
        .optional(),
      name: z
        .object({
          from: z.string(),
        })
        .optional(),
      description: z
        .object({
          from: z.string(),
        })
        .optional(),
    })
    .optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<LabelEditedEventOctokit>;

export type LabelEditedEvent = LabelEditedEventOctokit;

export function isLabelEditedEvent(value: unknown): value is LabelEditedEvent {
  return LabelEditedEventSchema.safeParse(value).success;
}
