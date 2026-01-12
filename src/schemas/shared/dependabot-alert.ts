/**
 * Auto-generated Zod schema for DependabotAlert
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DependabotAlert as DependabotAlertOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { DependabotAlertPackageSchema } from './dependabot-alert-package.js';
import { SecurityAdvisoryCvssSchema } from './security-advisory-cvss.js';
import { SecurityAdvisoryCwesSchema } from './security-advisory-cwes.js';
import { UserSchema } from './user.js';

export const DependabotAlertSchema = z.object({
  number: z.number(),
  state: z.union([
    z.literal('open'),
    z.literal('dismissed'),
    z.literal('fixed'),
    z.literal('auto_dismissed'),
  ]),
  dependency: z.object({
    package: DependabotAlertPackageSchema,
    manifest_path: z.string(),
    scope: z.union([z.literal('development'), z.literal('runtime')]).nullable(),
  }),
  security_advisory: z.object({
    ghsa_id: z.string(),
    cve_id: z.string().nullable(),
    summary: z.string(),
    description: z.string(),
    vulnerabilities: z.array(
      z.object({
        package: DependabotAlertPackageSchema,
        severity: z.union([
          z.literal('low'),
          z.literal('medium'),
          z.literal('high'),
          z.literal('critical'),
        ]),
        vulnerable_version_range: z.string(),
        first_patched_version: z.object({
          identifier: z.string(),
        }),
      }),
    ),
    severity: z.union([
      z.literal('low'),
      z.literal('medium'),
      z.literal('high'),
      z.literal('critical'),
    ]),
    cvss: SecurityAdvisoryCvssSchema,
    cwes: z.array(SecurityAdvisoryCwesSchema),
    identifiers: z.array(
      z.object({
        type: z.union([z.literal('CVE'), z.literal('GHSA')]),
        value: z.string(),
      }),
    ),
    references: z.array(
      z.object({
        url: z.string(),
      }),
    ),
    published_at: z.string(),
    updated_at: z.string(),
    withdrawn_at: z.string().nullable(),
  }),
  security_vulnerability: z.object({
    package: DependabotAlertPackageSchema,
    severity: z.union([
      z.literal('low'),
      z.literal('medium'),
      z.literal('high'),
      z.literal('critical'),
    ]),
    vulnerable_version_range: z.string(),
    first_patched_version: z.object({
      identifier: z.string(),
    }),
  }),
  url: z.string(),
  html_url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  dismissed_at: z.string().nullable(),
  auto_dismissed_at: z.string().nullable().optional(),
  dismissed_by: UserSchema.nullable(),
  dismissed_reason: z
    .union([
      z.literal('fix_started'),
      z.literal('inaccurate'),
      z.literal('no_bandwidth'),
      z.literal('not_used'),
      z.literal('tolerable_risk'),
    ])
    .nullable(),
  dismissed_comment: z.string().nullable(),
  fixed_at: z.string().nullable(),
}) satisfies z.ZodType<DependabotAlertOctokit>;

export type DependabotAlert = DependabotAlertOctokit;

export function isDependabotAlert(value: unknown): value is DependabotAlert {
  return DependabotAlertSchema.safeParse(value).success;
}
