/**
 * Auto-generated Zod schema for DeploymentProtectionRuleRequestedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { DeploymentProtectionRuleRequestedEvent as DeploymentProtectionRuleRequestedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  DeploymentSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const DeploymentProtectionRuleRequestedEventSchema = z.object({
  action: z.literal('requested'),
  environment: z.string().optional(),
  event: z.string().optional(),
  deployment_callback_url: z.string().optional(),
  deployment: DeploymentSchema.optional(),
  pull_requests: z.array(PullRequestSchema).optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<DeploymentProtectionRuleRequestedEventOctokit>;

export type DeploymentProtectionRuleRequestedEvent =
  DeploymentProtectionRuleRequestedEventOctokit;

export function isDeploymentProtectionRuleRequestedEvent(
  value: unknown,
): value is DeploymentProtectionRuleRequestedEvent {
  return DeploymentProtectionRuleRequestedEventSchema.safeParse(value).success;
}
