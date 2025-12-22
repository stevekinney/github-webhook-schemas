/**
 * Auto-generated Zod schema for IssuesEditedEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesEditedEvent as IssuesEditedEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesEditedEventSchema = z.object({
  action: z.literal('edited'),
  issue: IssueSchema,
  label: LabelSchema.optional(),
  changes: z.object({
    body: z
      .object({
        from: z.string(),
      })
      .optional(),
    title: z
      .object({
        from: z.string(),
      })
      .optional(),
  }),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesEditedEventOctokit>;

export type IssuesEditedEvent = IssuesEditedEventOctokit;

export function isIssuesEditedEvent(value: unknown): value is IssuesEditedEvent {
  return IssuesEditedEventSchema.safeParse(value).success;
}
