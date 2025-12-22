/**
 * Auto-generated Zod schema for CustomPropertyValuesUpdatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CustomPropertyValuesUpdatedEvent as CustomPropertyValuesUpdatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  CustomPropertyValueSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const CustomPropertyValuesUpdatedEventSchema = z.object({
  action: z.literal('updated'),
  installation: InstallationLiteSchema.optional(),
  repository: RepositorySchema,
  organization: OrganizationSchema,
  sender: UserSchema,
  new_property_values: z.array(CustomPropertyValueSchema),
  old_property_values: z.array(CustomPropertyValueSchema),
}) satisfies z.ZodType<CustomPropertyValuesUpdatedEventOctokit>;

export type CustomPropertyValuesUpdatedEvent = CustomPropertyValuesUpdatedEventOctokit;

export function isCustomPropertyValuesUpdatedEvent(
  value: unknown,
): value is CustomPropertyValuesUpdatedEvent {
  return CustomPropertyValuesUpdatedEventSchema.safeParse(value).success;
}
