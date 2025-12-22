/**
 * Auto-generated Zod schema for GitHubOrg
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { GitHubOrg as GitHubOrgOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

export const GitHubOrgSchema = z.object({
  login: z.literal('github'),
  id: z.literal(9919),
  node_id: z.literal('MDEyOk9yZ2FuaXphdGlvbjk5MTk='),
  name: z.literal('GitHub').optional(),
  email: z.null().optional(),
  avatar_url: z.literal('https://avatars.githubusercontent.com/u/9919?v=4'),
  gravatar_id: z.literal(''),
  url: z.literal('https://api.github.com/users/github'),
  html_url: z.literal('https://github.com/github'),
  followers_url: z.literal('https://api.github.com/users/github/followers'),
  following_url: z.literal('https://api.github.com/users/github/following{/other_user}'),
  gists_url: z.literal('https://api.github.com/users/github/gists{/gist_id}'),
  starred_url: z.literal('https://api.github.com/users/github/starred{/owner}{/repo}'),
  subscriptions_url: z.literal('https://api.github.com/users/github/subscriptions'),
  organizations_url: z.literal('https://api.github.com/users/github/orgs'),
  repos_url: z.literal('https://api.github.com/users/github/repos'),
  events_url: z.literal('https://api.github.com/users/github/events{/privacy}'),
  received_events_url: z.literal('https://api.github.com/users/github/received_events'),
  type: z.literal('Organization'),
  site_admin: z.literal(false),
}) satisfies z.ZodType<GitHubOrgOctokit>;

export type GitHubOrg = GitHubOrgOctokit;

export function isGitHubOrg(value: unknown): value is GitHubOrg {
  return GitHubOrgSchema.safeParse(value).success;
}
