/**
 * Auto-generated Zod schema for CustomPropertyDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CustomPropertyDeletedEvent as CustomPropertyDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const CustomPropertyDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  definition: z.object({
    property_name: z.string(),
  }),
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
  sender: UserSchema.optional(),
}) satisfies z.ZodType<CustomPropertyDeletedEventOctokit>;

export type CustomPropertyDeletedEvent = CustomPropertyDeletedEventOctokit;

export function isCustomPropertyDeletedEvent(
  value: unknown,
): value is CustomPropertyDeletedEvent {
  return CustomPropertyDeletedEventSchema.safeParse(value).success;
}
