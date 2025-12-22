/**
 * Auto-generated Zod schema for CustomPropertyValue
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { CustomPropertyValue as CustomPropertyValueOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const CustomPropertyValueSchema = z.object({
  property_name: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
}) satisfies z.ZodType<CustomPropertyValueOctokit>;

export type CustomPropertyValue = CustomPropertyValueOctokit;

export function isCustomPropertyValue(value: unknown): value is CustomPropertyValue {
  return CustomPropertyValueSchema.safeParse(value).success;
}
