/**
 * Auto-generated Zod schema for RepositoryLite
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { RepositoryLite as RepositoryLiteOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import { UserSchema } from './user.js';

export const RepositoryLiteSchema = z.object({
  archive_url: z.string(),
  assignees_url: z.string(),
  blobs_url: z.string(),
  branches_url: z.string(),
  collaborators_url: z.string(),
  comments_url: z.string(),
  commits_url: z.string(),
  compare_url: z.string(),
  contents_url: z.string(),
  contributors_url: z.string(),
  deployments_url: z.string(),
  description: z.string(),
  downloads_url: z.string(),
  events_url: z.string(),
  fork: z.boolean(),
  forks_url: z.string(),
  full_name: z.string(),
  git_commits_url: z.string(),
  git_refs_url: z.string(),
  git_tags_url: z.string(),
  hooks_url: z.string(),
  html_url: z.string(),
  id: z.number(),
  issue_comment_url: z.string(),
  issue_events_url: z.string(),
  issues_url: z.string(),
  keys_url: z.string(),
  labels_url: z.string(),
  languages_url: z.string(),
  merges_url: z.string(),
  milestones_url: z.string(),
  name: z.string(),
  node_id: z.string(),
  notifications_url: z.string(),
  owner: UserSchema,
  private: z.boolean(),
  pulls_url: z.string(),
  releases_url: z.string(),
  stargazers_url: z.string(),
  statuses_url: z.string(),
  subscribers_url: z.string(),
  subscription_url: z.string(),
  tags_url: z.string(),
  teams_url: z.string(),
  trees_url: z.string(),
  url: z.string(),
}) satisfies z.ZodType<RepositoryLiteOctokit>;

export type RepositoryLite = RepositoryLiteOctokit;

export function isRepositoryLite(value: unknown): value is RepositoryLite {
  return RepositoryLiteSchema.safeParse(value).success;
}
