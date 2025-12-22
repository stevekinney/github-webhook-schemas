/**
 * Auto-generated Zod schema for MetaDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { MetaDeletedEvent as MetaDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { RepositorySchema, UserSchema } from './shared/index.js';

export const MetaDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  hook_id: z.number(),
  hook: z.object({
    type: z.string(),
    id: z.number(),
    name: z.string(),
    active: z.boolean(),
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
  }),
  repository: RepositorySchema,
  sender: UserSchema,
}) satisfies z.ZodType<MetaDeletedEventOctokit>;

export type MetaDeletedEvent = MetaDeletedEventOctokit;

export function isMetaDeletedEvent(value: unknown): value is MetaDeletedEvent {
  return MetaDeletedEventSchema.safeParse(value).success;
}
