/**
 * Auto-generated Zod schema for LabelCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { LabelCreatedEvent as LabelCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const LabelCreatedEventSchema = z.object({
  action: z.literal('created'),
  label: LabelSchema,
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<LabelCreatedEventOctokit>;

export type LabelCreatedEvent = LabelCreatedEventOctokit;

export function isLabelCreatedEvent(value: unknown): value is LabelCreatedEvent {
  return LabelCreatedEventSchema.safeParse(value).success;
}
