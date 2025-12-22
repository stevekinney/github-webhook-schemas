/**
 * Auto-generated Zod schema for App
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { App as AppOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const AppSchema = z.object({
  id: z.number(),
  slug: z.string().optional(),
  node_id: z.string(),
  owner: UserSchema,
  name: z.string(),
  description: z.string(),
  external_url: z.string(),
  html_url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
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
    followers: z.union([z.literal('read'), z.literal('write')]).optional(),
    gpg_keys: z.union([z.literal('read'), z.literal('write')]).optional(),
    interaction_limits: z.union([z.literal('read'), z.literal('write')]).optional(),
    issues: z.union([z.literal('read'), z.literal('write')]).optional(),
    keys: z.union([z.literal('read'), z.literal('write')]).optional(),
    members: z.union([z.literal('read'), z.literal('write')]).optional(),
    merge_queues: z.union([z.literal('read'), z.literal('write')]).optional(),
    metadata: z.union([z.literal('read'), z.literal('write')]).optional(),
    organization_administration: z
      .union([z.literal('read'), z.literal('write')])
      .optional(),
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
    plan: z.union([z.literal('read'), z.literal('write')]).optional(),
    pull_requests: z.union([z.literal('read'), z.literal('write')]).optional(),
    repository_hooks: z.union([z.literal('read'), z.literal('write')]).optional(),
    repository_projects: z.union([z.literal('read'), z.literal('write')]).optional(),
    secret_scanning_alerts: z.union([z.literal('read'), z.literal('write')]).optional(),
    secrets: z.union([z.literal('read'), z.literal('write')]).optional(),
    security_events: z.union([z.literal('read'), z.literal('write')]).optional(),
    security_scanning_alert: z.union([z.literal('read'), z.literal('write')]).optional(),
    single_file: z.union([z.literal('read'), z.literal('write')]).optional(),
    starring: z.union([z.literal('read'), z.literal('write')]).optional(),
    statuses: z.union([z.literal('read'), z.literal('write')]).optional(),
    team_discussions: z.union([z.literal('read'), z.literal('write')]).optional(),
    vulnerability_alerts: z.union([z.literal('read'), z.literal('write')]).optional(),
    watching: z.union([z.literal('read'), z.literal('write')]).optional(),
    workflows: z.union([z.literal('read'), z.literal('write')]).optional(),
  }),
  events: z
    .array(
      z.union([
        z.literal('public'),
        z.literal('branch_protection_rule'),
        z.literal('check_run'),
        z.literal('check_suite'),
        z.literal('code_scanning_alert'),
        z.literal('commit_comment'),
        z.literal('create'),
        z.literal('delete'),
        z.literal('dependabot_alert'),
        z.literal('deployment'),
        z.literal('deployment_protection_rule'),
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
        z.literal('repository_ruleset'),
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
    )
    .optional(),
}) satisfies z.ZodType<AppOctokit>;

export type App = AppOctokit;

export function isApp(value: unknown): value is App {
  return AppSchema.safeParse(value).success;
}
