/**
 * Auto-generated Zod schema for OrganizationCustomProperty
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { OrganizationCustomProperty as OrganizationCustomPropertyOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const OrganizationCustomPropertySchema = z.object({
  property_name: z.string(),
  value_type: z.union([z.literal('string'), z.literal('single_select')]),
  required: z.boolean().optional(),
  default_value: z.string().optional(),
  description: z.string().optional(),
  allowed_values: z.array(z.string()).optional(),
  values_editable_by: z
    .union([z.literal('org_actors'), z.literal('org_and_repo_actors')])
    .optional(),
}) satisfies z.ZodType<OrganizationCustomPropertyOctokit>;

export type OrganizationCustomProperty = OrganizationCustomPropertyOctokit;

export function isOrganizationCustomProperty(
  value: unknown,
): value is OrganizationCustomProperty {
  return OrganizationCustomPropertySchema.safeParse(value).success;
}
