/**
 * Auto-generated Zod schema for Installation
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { Installation as InstallationOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const InstallationSchema = z.object({
  id: z.number(),
  account: UserSchema,
  repository_selection: z.union([z.literal('all'), z.literal('selected')]),
  access_tokens_url: z.string(),
  repositories_url: z.string(),
  html_url: z.string(),
  app_id: z.number(),
  app_slug: z.string().optional(),
  target_id: z.number(),
  target_type: z.union([z.literal('User'), z.literal('Organization')]),
  permissions: z.object({
    actions: z.union([z.literal('read'), z.literal('write')]).optional(),
    administration: z.union([z.literal('read'), z.literal('write')]).optional(),
    blocking: z.union([z.literal('read'), z.literal('write')]).optional(),
    checks: z.union([z.literal('read'), z.literal('write')]).optional(),
    content_references: z.union([z.literal('read'), z.literal('write')]).optional(),
    contents: z.union([z.literal('read'), z.literal('write')]).optional(),
    deployments: z.union([z.literal('read'), z.literal('write')]).optional(),
    discussions: z.union([z.literal('read'), z.literal('write')]).optional(),
    emails: z.union([z.literal('read'), z.literal('write')]).optional(),
    environments: z.union([z.literal('read'), z.literal('write')]).optional(),
    issues: z.union([z.literal('read'), z.literal('write')]).optional(),
    members: z.union([z.literal('read'), z.literal('write')]).optional(),
    merge_queues: z.union([z.literal('read'), z.literal('write')]).optional(),
    metadata: z.union([z.literal('read'), z.literal('write')]).optional(),
    organization_administration: z
      .union([z.literal('read'), z.literal('write')])
      .optional(),
    organization_events: z.union([z.literal('read'), z.literal('write')]).optional(),
    organization_hooks: z.union([z.literal('read'), z.literal('write')]).optional(),
    organization_packages: z.union([z.literal('read'), z.literal('write')]).optional(),
    organization_plan: z.union([z.literal('read'), z.literal('write')]).optional(),
    organization_projects: z.union([z.literal('read'), z.literal('write')]).optional(),
    organization_secrets: z.union([z.literal('read'), z.literal('write')]).optional(),
    organization_self_hosted_runners: z
      .union([z.literal('read'), z.literal('write')])
      .optional(),
    organization_user_blocking: z
      .union([z.literal('read'), z.literal('write')])
      .optional(),
    packages: z.union([z.literal('read'), z.literal('write')]).optional(),
    pages: z.union([z.literal('read'), z.literal('write')]).optional(),
    pull_requests: z.union([z.literal('read'), z.literal('write')]).optional(),
    repository_hooks: z.union([z.literal('read'), z.literal('write')]).optional(),
    repository_projects: z.union([z.literal('read'), z.literal('write')]).optional(),
    secret_scanning_alerts: z.union([z.literal('read'), z.literal('write')]).optional(),
    secrets: z.union([z.literal('read'), z.literal('write')]).optional(),
    security_events: z.union([z.literal('read'), z.literal('write')]).optional(),
    security_scanning_alert: z.union([z.literal('read'), z.literal('write')]).optional(),
    single_file: z.union([z.literal('read'), z.literal('write')]).optional(),
    statuses: z.union([z.literal('read'), z.literal('write')]).optional(),
    team_discussions: z.union([z.literal('read'), z.literal('write')]).optional(),
    vulnerability_alerts: z.union([z.literal('read'), z.literal('write')]).optional(),
    workflows: z.union([z.literal('read'), z.literal('write')]).optional(),
  }),
  events: z.array(
    z.union([
      z.literal('public'),
      z.literal('branch_protection_rule'),
      z.literal('check_run'),
      z.literal('check_suite'),
      z.literal('code_scanning_alert'),
      z.literal('commit_comment'),
      z.literal('create'),
      z.literal('delete'),
      z.literal('deployment'),
      z.literal('deployment_review'),
      z.literal('deployment_status'),
      z.literal('deploy_key'),
      z.literal('discussion'),
      z.literal('discussion_comment'),
      z.literal('fork'),
      z.literal('gollum'),
      z.literal('issues'),
      z.literal('issue_comment'),
      z.literal('label'),
      z.literal('member'),
      z.literal('membership'),
      z.literal('merge_group'),
      z.literal('merge_queue_entry'),
      z.literal('milestone'),
      z.literal('organization'),
      z.literal('org_block'),
      z.literal('page_build'),
      z.literal('project'),
      z.literal('projects_v2_item'),
      z.literal('project_card'),
      z.literal('project_column'),
      z.literal('pull_request'),
      z.literal('pull_request_review'),
      z.literal('pull_request_review_comment'),
      z.literal('pull_request_review_thread'),
      z.literal('push'),
      z.literal('registry_package'),
      z.literal('release'),
      z.literal('repository'),
      z.literal('repository_dispatch'),
      z.literal('secret_scanning_alert'),
      z.literal('secret_scanning_alert_location'),
      z.literal('security_and_analysis'),
      z.literal('star'),
      z.literal('status'),
      z.literal('team'),
      z.literal('team_add'),
      z.literal('watch'),
      z.literal('workflow_dispatch'),
      z.literal('workflow_job'),
      z.literal('workflow_run'),
    ]),
  ),
  created_at: z.union([z.string(), z.number()]),
  updated_at: z.union([z.string(), z.number()]),
  single_file_name: z.string(),
  has_multiple_single_files: z.boolean().optional(),
  single_file_paths: z.array(z.string()).optional(),
  suspended_by: UserSchema.nullable(),
  suspended_at: z.string(),
}) satisfies z.ZodType<InstallationOctokit>;

export type Installation = InstallationOctokit;

export function isInstallation(value: unknown): value is Installation {
  return InstallationSchema.safeParse(value).success;
}
