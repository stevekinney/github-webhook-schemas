/**
 * Auto-generated Zod schema for PingEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PingEvent as PingEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { OrganizationSchema, RepositorySchema, UserSchema } from './shared/index.js';

export const PingEventSchema = z.object({
  zen: z.string(),
  hook_id: z.number(),
  hook: z.object({
    type: z.union([z.literal('Organization'), z.literal('Repository'), z.literal('App')]),
    id: z.number(),
    name: z.string(),
    active: z.boolean(),
    app_id: z.number().optional(),
    events: z.union([
      z.array(
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
          z.literal('secret_scanning_alert'),
          z.literal('secret_scanning_alert_location'),
          z.literal('security_and_analysis'),
          z.literal('star'),
          z.literal('status'),
          z.literal('team'),
          z.literal('team_add'),
          z.literal('watch'),
          z.literal('workflow_job'),
          z.literal('workflow_run'),
          z.literal('meta'),
          z.literal('package'),
          z.literal('repository_import'),
          z.literal('repository_vulnerability_alert'),
        ]),
      ),
      z.tuple([z.literal('*')]),
    ]),
    config: z.object({
      content_type: z.union([z.literal('json'), z.literal('form')]),
      secret: z.string().optional(),
      url: z.string(),
      insecure_ssl: z.union([z.literal('0'), z.literal('1')]),
    }),
    updated_at: z.string(),
    created_at: z.string(),
    url: z.string(),
    test_url: z.string().optional(),
    ping_url: z.string(),
    deliveries_url: z.string(),
    last_response: z
      .object({
        code: z.null(),
        status: z.string(),
        message: z.null(),
      })
      .optional(),
  }),
  repository: RepositorySchema.optional(),
  sender: UserSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<PingEventOctokit>;

export type PingEvent = PingEventOctokit;

export function isPingEvent(value: unknown): value is PingEvent {
  return PingEventSchema.safeParse(value).success;
}
