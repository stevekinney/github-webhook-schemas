/**
 * Auto-generated Zod schema for IssuesUnlabeledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesUnlabeledEvent as IssuesUnlabeledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesUnlabeledEventSchema = z.object({
  action: z.literal('unlabeled'),
  issue: IssueSchema,
  label: LabelSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesUnlabeledEventOctokit>;

export type IssuesUnlabeledEvent = IssuesUnlabeledEventOctokit;

export function isIssuesUnlabeledEvent(value: unknown): value is IssuesUnlabeledEvent {
  return IssuesUnlabeledEventSchema.safeParse(value).success;
}
