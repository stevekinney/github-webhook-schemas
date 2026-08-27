/**
 * Auto-generated Zod schema for PullRequestReviewRequestRemovedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewRequestRemovedEvent as PullRequestReviewRequestRemovedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReviewRequestRemovedEventSchema = z.union([
  z.object({
    action: z.literal('review_request_removed'),
    number: z.number(),
    pull_request: PullRequestSchema,
    requested_reviewer: UserSchema,
    repository: RepositorySchema,
    installation: InstallationLiteSchema.optional(),
    organization: OrganizationSchema.optional(),
    sender: UserSchema,
  }),
  z.object({
    action: z.literal('review_request_removed'),
    number: z.number(),
    pull_request: PullRequestSchema,
    requested_team: TeamSchema,
    repository: RepositorySchema,
    installation: InstallationLiteSchema.optional(),
    organization: OrganizationSchema.optional(),
    sender: UserSchema,
  }),
]) satisfies z.ZodType<PullRequestReviewRequestRemovedEventOctokit>;

export type PullRequestReviewRequestRemovedEvent =
  PullRequestReviewRequestRemovedEventOctokit;

export function isPullRequestReviewRequestRemovedEvent(
  value: unknown,
): value is z.input<typeof PullRequestReviewRequestRemovedEventSchema> {
  return PullRequestReviewRequestRemovedEventSchema.safeParse(value).success;
}
