/**
 * Auto-generated Zod schema for SecurityAdvisoryUpdatedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { SecurityAdvisoryUpdatedEvent as SecurityAdvisoryUpdatedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const SecurityAdvisoryUpdatedEventSchema = z.object({
  action: z.literal('updated'),
  security_advisory: z.object({
    cvss: z.object({
      vector_string: z.string(),
      score: z.number(),
    }),
    cwes: z.array(
      z.object({
        cwe_id: z.string(),
        name: z.string(),
      }),
    ),
    ghsa_id: z.string(),
    cve_id: z.string(),
    summary: z.string(),
    description: z.string(),
    severity: z.string(),
    identifiers: z.array(
      z.object({
        value: z.string(),
        type: z.string(),
      }),
    ),
    references: z.array(
      z.object({
        url: z.string(),
      }),
    ),
    published_at: z.string(),
    updated_at: z.string(),
    withdrawn_at: z.string(),
    vulnerabilities: z.array(
      z.object({
        package: z.object({
          ecosystem: z.string(),
          name: z.string(),
        }),
        severity: z.string(),
        vulnerable_version_range: z.string(),
        first_patched_version: z.object({
          identifier: z.string(),
        }),
      }),
    ),
  }),
}) satisfies z.ZodType<SecurityAdvisoryUpdatedEventOctokit>;

export type SecurityAdvisoryUpdatedEvent = SecurityAdvisoryUpdatedEventOctokit;

export function isSecurityAdvisoryUpdatedEvent(
  value: unknown,
): value is SecurityAdvisoryUpdatedEvent {
  return SecurityAdvisoryUpdatedEventSchema.safeParse(value).success;
}
