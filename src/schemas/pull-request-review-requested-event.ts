/**
 * Auto-generated Zod schema for PullRequestReviewRequestedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { PullRequestReviewRequestedEvent as PullRequestReviewRequestedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  OrganizationSchema,
  PullRequestSchema,
  RepositorySchema,
  TeamSchema,
  UserSchema,
} from './shared/index.js';

export const PullRequestReviewRequestedEventSchema = z.union([
  z.object({
    action: z.literal('review_requested'),
    number: z.number(),
    pull_request: PullRequestSchema,
    requested_reviewer: UserSchema,
    repository: RepositorySchema,
    installation: InstallationLiteSchema.optional(),
    organization: OrganizationSchema.optional(),
    sender: UserSchema,
  }),
  z.object({
    action: z.literal('review_requested'),
    number: z.number(),
    pull_request: PullRequestSchema,
    requested_team: TeamSchema,
    repository: RepositorySchema,
    installation: InstallationLiteSchema.optional(),
    organization: OrganizationSchema.optional(),
    sender: UserSchema,
  }),
]) satisfies z.ZodType<PullRequestReviewRequestedEventOctokit>;

export type PullRequestReviewRequestedEvent = PullRequestReviewRequestedEventOctokit;

export function isPullRequestReviewRequestedEvent(
  value: unknown,
): value is z.input<typeof PullRequestReviewRequestedEventSchema> {
  return PullRequestReviewRequestedEventSchema.safeParse(value).success;
}
