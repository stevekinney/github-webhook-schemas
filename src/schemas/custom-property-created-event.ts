/**
 * Auto-generated Zod schema for CustomPropertyCreatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CustomPropertyCreatedEvent as CustomPropertyCreatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationCustomPropertySchema,
  OrganizationSchema,
  UserSchema,
} from './shared/index.js';

export const CustomPropertyCreatedEventSchema = z.object({
  action: z.literal('created'),
  definition: OrganizationCustomPropertySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema,
  sender: UserSchema.optional(),
}) satisfies z.ZodType<CustomPropertyCreatedEventOctokit>;

export type CustomPropertyCreatedEvent = CustomPropertyCreatedEventOctokit;

export function isCustomPropertyCreatedEvent(
  value: unknown,
): value is CustomPropertyCreatedEvent {
  return CustomPropertyCreatedEventSchema.safeParse(value).success;
}
