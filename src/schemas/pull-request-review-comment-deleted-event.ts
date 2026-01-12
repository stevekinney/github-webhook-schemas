/**
 * Auto-generated Zod schema for PullRequestReviewCommentDeletedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewCommentDeletedEvent as PullRequestReviewCommentDeletedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  LabelSchema,
  LinkSchema,
  MilestoneSchema,
  OrganizationSchema,
  PullRequestAutoMergeSchema,
  PullRequestReviewCommentSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReviewCommentDeletedEventSchema = z.object({
  action: z.literal('deleted'),
  comment: PullRequestReviewCommentSchema,
  pull_request: z.object({
    url: z.string(),
    id: z.number(),
    node_id: z.string(),
    html_url: z.string(),
    diff_url: z.string(),
    patch_url: z.string(),
    issue_url: z.string(),
    number: z.number(),
    state: z.union([z.literal('open'), z.literal('closed')]),
    locked: z.boolean(),
    title: z.string(),
    user: UserSchema,
    body: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
    closed_at: z.string().nullable(),
    merged_at: z.string().nullable(),
    merge_commit_sha: z.string().nullable(),
    assignee: UserSchema.nullable(),
    assignees: z.array(UserSchema),
    requested_reviewers: z.array(z.union([UserSchema, TeamSchema])),
    requested_teams: z.array(TeamSchema),
    labels: z.array(LabelSchema),
    milestone: MilestoneSchema.nullable(),
    draft: z.union([z.literal(false), z.literal(true)]).optional(),
    commits_url: z.string(),
    review_comments_url: z.string(),
    review_comment_url: z.string(),
    comments_url: z.string(),
    statuses_url: z.string(),
    head: z.object({
      label: z.string(),
      ref: z.string(),
      sha: z.string(),
      user: UserSchema,
      repo: RepositorySchema,
    }),
    base: z.object({
      label: z.string(),
      ref: z.string(),
      sha: z.string(),
      user: UserSchema,
      repo: RepositorySchema,
    }),
    _links: z.object({
      self: LinkSchema,
      html: LinkSchema,
      issue: LinkSchema,
      comments: LinkSchema,
      review_comments: LinkSchema,
      review_comment: LinkSchema,
      commits: LinkSchema,
      statuses: LinkSchema,
    }),
    auto_merge: PullRequestAutoMergeSchema.nullable().optional(),
    author_association: z.union([
      z.literal('COLLABORATOR'),
      z.literal('CONTRIBUTOR'),
      z.literal('FIRST_TIMER'),
      z.literal('FIRST_TIME_CONTRIBUTOR'),
      z.literal('MANNEQUIN'),
      z.literal('MEMBER'),
      z.literal('NONE'),
      z.literal('OWNER'),
    ]),
    active_lock_reason: z
      .union([
        z.literal('resolved'),
        z.literal('off-topic'),
        z.literal('too heated'),
        z.literal('spam'),
      ])
      .nullable(),
  }),
  repository: RepositorySchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
  sender: UserSchema,
}) satisfies z.ZodType<PullRequestReviewCommentDeletedEventOctokit>;

export type PullRequestReviewCommentDeletedEvent =
  PullRequestReviewCommentDeletedEventOctokit;

export function isPullRequestReviewCommentDeletedEvent(
  value: unknown,
): value is PullRequestReviewCommentDeletedEvent {
  return PullRequestReviewCommentDeletedEventSchema.safeParse(value).success;
}
