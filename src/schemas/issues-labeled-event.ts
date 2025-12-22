/**
 * Auto-generated Zod schema for IssuesLabeledEvent
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import type { IssuesLabeledEvent as IssuesLabeledEventOctokit } from '@octokit/webhooks-types';
import { z } from 'zod';

import {
  InstallationLiteSchema,
  IssueSchema,
  LabelSchema,
  OrganizationSchema,
  RepositorySchema,
  UserSchema,
} from './shared/index.js';

export const IssuesLabeledEventSchema = z.object({
  action: z.literal('labeled'),
  issue: IssueSchema,
  label: LabelSchema.optional(),
  repository: RepositorySchema,
  sender: UserSchema,
  installation: InstallationLiteSchema.optional(),
  organization: OrganizationSchema.optional(),
}) satisfies z.ZodType<IssuesLabeledEventOctokit>;

export type IssuesLabeledEvent = IssuesLabeledEventOctokit;

export function isIssuesLabeledEvent(value: unknown): value is IssuesLabeledEvent {
  return IssuesLabeledEventSchema.safeParse(value).success;
}
