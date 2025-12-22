/**
 * Auto-generated Zod schema for LabelDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { LabelDeletedEvent as LabelDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const LabelDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  label: LabelSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<LabelDeletedEventOctokit>;

export type LabelDeletedEvent = LabelDeletedEventOctokit;

export function isLabelDeletedEvent(value: unknown): value is LabelDeletedEvent {
  return LabelDeletedEventSchema.safeParse(value).success;
}
