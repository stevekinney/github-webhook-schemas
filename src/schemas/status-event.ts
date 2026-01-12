/**
 * Auto-generated Zod schema for StatusEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { StatusEvent as StatusEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  CommitterSchema,
  InstallationLiteSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const StatusEventSchema = z.object({
  id: z.number(),
  sha: z.string(),
  name: z.string(),
  avatar_url: z.string().nullable().optional(),
  target_url: z.string().nullable(),
  context: z.string(),
  description: z.string().nullable(),
  state: z.union([
    z.literal('success'),
    z.literal('failure'),
    z.literal('error'),
    z.literal('pending'),
  ]),
  commit: z.object({
    sha: z.string(),
    node_id: z.string(),
    commit: z.object({
      author: CommitterSchema.and(
        z.object({
          date: z.string(),
        }),
      ),
      committer: CommitterSchema.and(
        z.object({
          date: z.string(),
        }),
      ),
      message: z.string(),
      tree: z.object({
        sha: z.string(),
        url: z.string(),
      }),
      url: z.string(),
      comment_count: z.number(),
      verification: z.object({
        verified: z.boolean(),
        reason: z.union([
          z.literal('expired_key'),
          z.literal('not_signing_key'),
          z.literal('gpgverify_error'),
          z.literal('gpgverify_unavailable'),
          z.literal('unsigned'),
          z.literal('unknown_signature_type'),
          z.literal('no_user'),
          z.literal('unverified_email'),
          z.literal('bad_email'),
          z.literal('unknown_key'),
          z.literal('malformed_signature'),
          z.literal('invalid'),
          z.literal('valid'),
        ]),
        signature: z.string().nullable(),
        payload: z.string().nullable(),
      }),
    }),
    url: z.string(),
    html_url: z.string(),
    comments_url: z.string(),
    author: UserSchema.nullable(),
    committer: UserSchema.nullable(),
    parents: z.array(
      z.object({
        sha: z.string(),
        url: z.string(),
        html_url: z.string(),
      }),
    ),
  }),
  branches: z.array(
    z.object({
      name: z.string(),
      commit: z.object({
        sha: z.string(),
        url: z.string(),
      }),
      protected: z.boolean(),
    }),
  ),
  created_at: z.string(),
  updated_at: z.string(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<StatusEventOctokit>;

export type StatusEvent = StatusEventOctokit;

export function isStatusEvent(value: unknown): value is StatusEvent {
  return StatusEventSchema.safeParse(value).success;
}
