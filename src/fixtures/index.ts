/**
 * Auto-generated fixture factories for webhook event schemas
 * DO NOT MODIFY - regenerate with: bun run scripts/generate-fixtures.ts
 */

import { z } from 'zod';

import type * as SchemaTypes from '../schemas/index.js';
import * as Schemas from '../schemas/index.js';

type DeepPartial<T> = T extends readonly (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function buildFixture(
  schema: z.ZodTypeAny,
  options: { includeOptional?: boolean } = {},
): unknown {
  const def = schema.def as unknown;

  switch (schema.type) {
    case 'default': {
      const { defaultValue, innerType } = def as {
        defaultValue?: unknown;
        innerType?: z.ZodTypeAny;
      };
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      return innerType ? buildFixture(innerType, options) : null;
    }
    case 'optional': {
      const { innerType } = def as { innerType?: z.ZodTypeAny };
      if (options.includeOptional && innerType) {
        return buildFixture(innerType, options);
      }
      return undefined;
    }
    case 'nullable':
    case 'null':
      return null;
    case 'undefined':
      return undefined;
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'boolean':
      return false;
    case 'literal': {
      const { values } = def as { values: unknown[] };
      return values[0];
    }
    case 'enum': {
      const { entries } = def as { entries: Record<string, string | number> };
      const values = Object.values(entries);
      return values[0] ?? null;
    }
    case 'array':
      return [];
    case 'tuple': {
      const { items } = def as { items: z.ZodTypeAny[] };
      return items.map((item) => buildFixture(item, options));
    }
    case 'union': {
      const { options: unionOptions } = def as { options: z.ZodTypeAny[] };
      const firstOption = unionOptions[0];
      return firstOption ? buildFixture(firstOption, options) : null;
    }
    case 'intersection': {
      const { left, right } = def as { left: z.ZodTypeAny; right: z.ZodTypeAny };
      const leftValue = buildFixture(left, options);
      const rightValue = buildFixture(right, { ...options, includeOptional: true });

      if (isPlainObject(leftValue) && isPlainObject(rightValue)) {
        return mergeFixture(leftValue, rightValue);
      }

      return rightValue ?? leftValue ?? null;
    }
    case 'object': {
      const { shape } = def as { shape: Record<string, z.ZodTypeAny> };
      const value: Record<string, unknown> = {};

      for (const [key, fieldSchema] of Object.entries(shape)) {
        const fieldValue = buildFixture(fieldSchema, options);
        if (fieldValue !== undefined) {
          value[key] = fieldValue;
        }
      }

      return value;
    }
    case 'record':
      return {};
    case 'lazy': {
      const { getter } = def as { getter: () => z.ZodTypeAny };
      return getter ? buildFixture(getter(), options) : null;
    }
    default:
      return null;
  }
}

function mergeFixture<T>(base: T, overrides?: DeepPartial<T>): T {
  if (overrides === undefined) {
    return base;
  }

  if (Array.isArray(base) || Array.isArray(overrides)) {
    return (overrides ?? base) as T;
  }

  if (isPlainObject(base) && isPlainObject(overrides)) {
    const result: Record<string, unknown> = { ...base };

    for (const [key, overrideValue] of Object.entries(overrides)) {
      if (overrideValue === undefined) {
        continue;
      }

      const baseValue = result[key];
      result[key] =
        isPlainObject(baseValue) && isPlainObject(overrideValue)
          ? mergeFixture(baseValue, overrideValue)
          : overrideValue;
    }

    return result as T;
  }

  return overrides as T;
}

function createFixture<T>(schema: z.ZodTypeAny, overrides?: DeepPartial<T>): T {
  const base = buildFixture(schema) as T;
  return mergeFixture(base, overrides);
}

export function createBranchProtectionConfigurationDisabledEvent(
  overrides: DeepPartial<SchemaTypes.BranchProtectionConfigurationDisabledEvent> = {},
): SchemaTypes.BranchProtectionConfigurationDisabledEvent {
  return createFixture<SchemaTypes.BranchProtectionConfigurationDisabledEvent>(
    Schemas.BranchProtectionConfigurationDisabledEventSchema,
    overrides,
  );
}

export function createBranchProtectionConfigurationEnabledEvent(
  overrides: DeepPartial<SchemaTypes.BranchProtectionConfigurationEnabledEvent> = {},
): SchemaTypes.BranchProtectionConfigurationEnabledEvent {
  return createFixture<SchemaTypes.BranchProtectionConfigurationEnabledEvent>(
    Schemas.BranchProtectionConfigurationEnabledEventSchema,
    overrides,
  );
}

export function createBranchProtectionRuleCreatedEvent(
  overrides: DeepPartial<SchemaTypes.BranchProtectionRuleCreatedEvent> = {},
): SchemaTypes.BranchProtectionRuleCreatedEvent {
  return createFixture<SchemaTypes.BranchProtectionRuleCreatedEvent>(
    Schemas.BranchProtectionRuleCreatedEventSchema,
    overrides,
  );
}

export function createBranchProtectionRuleDeletedEvent(
  overrides: DeepPartial<SchemaTypes.BranchProtectionRuleDeletedEvent> = {},
): SchemaTypes.BranchProtectionRuleDeletedEvent {
  return createFixture<SchemaTypes.BranchProtectionRuleDeletedEvent>(
    Schemas.BranchProtectionRuleDeletedEventSchema,
    overrides,
  );
}

export function createBranchProtectionRuleEditedEvent(
  overrides: DeepPartial<SchemaTypes.BranchProtectionRuleEditedEvent> = {},
): SchemaTypes.BranchProtectionRuleEditedEvent {
  return createFixture<SchemaTypes.BranchProtectionRuleEditedEvent>(
    Schemas.BranchProtectionRuleEditedEventSchema,
    overrides,
  );
}

export function createCheckRunCompletedEvent(
  overrides: DeepPartial<SchemaTypes.CheckRunCompletedEvent> = {},
): SchemaTypes.CheckRunCompletedEvent {
  return createFixture<SchemaTypes.CheckRunCompletedEvent>(
    Schemas.CheckRunCompletedEventSchema,
    overrides,
  );
}

export function createCheckRunCreatedEvent(
  overrides: DeepPartial<SchemaTypes.CheckRunCreatedEvent> = {},
): SchemaTypes.CheckRunCreatedEvent {
  return createFixture<SchemaTypes.CheckRunCreatedEvent>(
    Schemas.CheckRunCreatedEventSchema,
    overrides,
  );
}

export function createCheckRunRequestedActionEvent(
  overrides: DeepPartial<SchemaTypes.CheckRunRequestedActionEvent> = {},
): SchemaTypes.CheckRunRequestedActionEvent {
  return createFixture<SchemaTypes.CheckRunRequestedActionEvent>(
    Schemas.CheckRunRequestedActionEventSchema,
    overrides,
  );
}

export function createCheckRunRerequestedEvent(
  overrides: DeepPartial<SchemaTypes.CheckRunRerequestedEvent> = {},
): SchemaTypes.CheckRunRerequestedEvent {
  return createFixture<SchemaTypes.CheckRunRerequestedEvent>(
    Schemas.CheckRunRerequestedEventSchema,
    overrides,
  );
}

export function createCheckSuiteCompletedEvent(
  overrides: DeepPartial<SchemaTypes.CheckSuiteCompletedEvent> = {},
): SchemaTypes.CheckSuiteCompletedEvent {
  return createFixture<SchemaTypes.CheckSuiteCompletedEvent>(
    Schemas.CheckSuiteCompletedEventSchema,
    overrides,
  );
}

export function createCheckSuiteRequestedEvent(
  overrides: DeepPartial<SchemaTypes.CheckSuiteRequestedEvent> = {},
): SchemaTypes.CheckSuiteRequestedEvent {
  return createFixture<SchemaTypes.CheckSuiteRequestedEvent>(
    Schemas.CheckSuiteRequestedEventSchema,
    overrides,
  );
}

export function createCheckSuiteRerequestedEvent(
  overrides: DeepPartial<SchemaTypes.CheckSuiteRerequestedEvent> = {},
): SchemaTypes.CheckSuiteRerequestedEvent {
  return createFixture<SchemaTypes.CheckSuiteRerequestedEvent>(
    Schemas.CheckSuiteRerequestedEventSchema,
    overrides,
  );
}

export function createCodeScanningAlertAppearedInBranchEvent(
  overrides: DeepPartial<SchemaTypes.CodeScanningAlertAppearedInBranchEvent> = {},
): SchemaTypes.CodeScanningAlertAppearedInBranchEvent {
  return createFixture<SchemaTypes.CodeScanningAlertAppearedInBranchEvent>(
    Schemas.CodeScanningAlertAppearedInBranchEventSchema,
    overrides,
  );
}

export function createCodeScanningAlertClosedByUserEvent(
  overrides: DeepPartial<SchemaTypes.CodeScanningAlertClosedByUserEvent> = {},
): SchemaTypes.CodeScanningAlertClosedByUserEvent {
  return createFixture<SchemaTypes.CodeScanningAlertClosedByUserEvent>(
    Schemas.CodeScanningAlertClosedByUserEventSchema,
    overrides,
  );
}

export function createCodeScanningAlertCreatedEvent(
  overrides: DeepPartial<SchemaTypes.CodeScanningAlertCreatedEvent> = {},
): SchemaTypes.CodeScanningAlertCreatedEvent {
  return createFixture<SchemaTypes.CodeScanningAlertCreatedEvent>(
    Schemas.CodeScanningAlertCreatedEventSchema,
    overrides,
  );
}

export function createCodeScanningAlertFixedEvent(
  overrides: DeepPartial<SchemaTypes.CodeScanningAlertFixedEvent> = {},
): SchemaTypes.CodeScanningAlertFixedEvent {
  return createFixture<SchemaTypes.CodeScanningAlertFixedEvent>(
    Schemas.CodeScanningAlertFixedEventSchema,
    overrides,
  );
}

export function createCodeScanningAlertReopenedByUserEvent(
  overrides: DeepPartial<SchemaTypes.CodeScanningAlertReopenedByUserEvent> = {},
): SchemaTypes.CodeScanningAlertReopenedByUserEvent {
  return createFixture<SchemaTypes.CodeScanningAlertReopenedByUserEvent>(
    Schemas.CodeScanningAlertReopenedByUserEventSchema,
    overrides,
  );
}

export function createCodeScanningAlertReopenedEvent(
  overrides: DeepPartial<SchemaTypes.CodeScanningAlertReopenedEvent> = {},
): SchemaTypes.CodeScanningAlertReopenedEvent {
  return createFixture<SchemaTypes.CodeScanningAlertReopenedEvent>(
    Schemas.CodeScanningAlertReopenedEventSchema,
    overrides,
  );
}

export function createCommitCommentCreatedEvent(
  overrides: DeepPartial<SchemaTypes.CommitCommentCreatedEvent> = {},
): SchemaTypes.CommitCommentCreatedEvent {
  return createFixture<SchemaTypes.CommitCommentCreatedEvent>(
    Schemas.CommitCommentCreatedEventSchema,
    overrides,
  );
}

export function createCreateEvent(
  overrides: DeepPartial<SchemaTypes.CreateEvent> = {},
): SchemaTypes.CreateEvent {
  return createFixture<SchemaTypes.CreateEvent>(Schemas.CreateEventSchema, overrides);
}

export function createCustomPropertyCreatedEvent(
  overrides: DeepPartial<SchemaTypes.CustomPropertyCreatedEvent> = {},
): SchemaTypes.CustomPropertyCreatedEvent {
  return createFixture<SchemaTypes.CustomPropertyCreatedEvent>(
    Schemas.CustomPropertyCreatedEventSchema,
    overrides,
  );
}

export function createCustomPropertyDeletedEvent(
  overrides: DeepPartial<SchemaTypes.CustomPropertyDeletedEvent> = {},
): SchemaTypes.CustomPropertyDeletedEvent {
  return createFixture<SchemaTypes.CustomPropertyDeletedEvent>(
    Schemas.CustomPropertyDeletedEventSchema,
    overrides,
  );
}

export function createCustomPropertyValuesUpdatedEvent(
  overrides: DeepPartial<SchemaTypes.CustomPropertyValuesUpdatedEvent> = {},
): SchemaTypes.CustomPropertyValuesUpdatedEvent {
  return createFixture<SchemaTypes.CustomPropertyValuesUpdatedEvent>(
    Schemas.CustomPropertyValuesUpdatedEventSchema,
    overrides,
  );
}

export function createDeleteEvent(
  overrides: DeepPartial<SchemaTypes.DeleteEvent> = {},
): SchemaTypes.DeleteEvent {
  return createFixture<SchemaTypes.DeleteEvent>(Schemas.DeleteEventSchema, overrides);
}

export function createDependabotAlertCreatedEvent(
  overrides: DeepPartial<SchemaTypes.DependabotAlertCreatedEvent> = {},
): SchemaTypes.DependabotAlertCreatedEvent {
  return createFixture<SchemaTypes.DependabotAlertCreatedEvent>(
    Schemas.DependabotAlertCreatedEventSchema,
    overrides,
  );
}

export function createDependabotAlertDismissedEvent(
  overrides: DeepPartial<SchemaTypes.DependabotAlertDismissedEvent> = {},
): SchemaTypes.DependabotAlertDismissedEvent {
  return createFixture<SchemaTypes.DependabotAlertDismissedEvent>(
    Schemas.DependabotAlertDismissedEventSchema,
    overrides,
  );
}

export function createDependabotAlertFixedEvent(
  overrides: DeepPartial<SchemaTypes.DependabotAlertFixedEvent> = {},
): SchemaTypes.DependabotAlertFixedEvent {
  return createFixture<SchemaTypes.DependabotAlertFixedEvent>(
    Schemas.DependabotAlertFixedEventSchema,
    overrides,
  );
}

export function createDependabotAlertReintroducedEvent(
  overrides: DeepPartial<SchemaTypes.DependabotAlertReintroducedEvent> = {},
): SchemaTypes.DependabotAlertReintroducedEvent {
  return createFixture<SchemaTypes.DependabotAlertReintroducedEvent>(
    Schemas.DependabotAlertReintroducedEventSchema,
    overrides,
  );
}

export function createDependabotAlertReopenedEvent(
  overrides: DeepPartial<SchemaTypes.DependabotAlertReopenedEvent> = {},
): SchemaTypes.DependabotAlertReopenedEvent {
  return createFixture<SchemaTypes.DependabotAlertReopenedEvent>(
    Schemas.DependabotAlertReopenedEventSchema,
    overrides,
  );
}

export function createDeployKeyCreatedEvent(
  overrides: DeepPartial<SchemaTypes.DeployKeyCreatedEvent> = {},
): SchemaTypes.DeployKeyCreatedEvent {
  return createFixture<SchemaTypes.DeployKeyCreatedEvent>(
    Schemas.DeployKeyCreatedEventSchema,
    overrides,
  );
}

export function createDeployKeyDeletedEvent(
  overrides: DeepPartial<SchemaTypes.DeployKeyDeletedEvent> = {},
): SchemaTypes.DeployKeyDeletedEvent {
  return createFixture<SchemaTypes.DeployKeyDeletedEvent>(
    Schemas.DeployKeyDeletedEventSchema,
    overrides,
  );
}

export function createDeploymentCreatedEvent(
  overrides: DeepPartial<SchemaTypes.DeploymentCreatedEvent> = {},
): SchemaTypes.DeploymentCreatedEvent {
  return createFixture<SchemaTypes.DeploymentCreatedEvent>(
    Schemas.DeploymentCreatedEventSchema,
    overrides,
  );
}

export function createDeploymentProtectionRuleRequestedEvent(
  overrides: DeepPartial<SchemaTypes.DeploymentProtectionRuleRequestedEvent> = {},
): SchemaTypes.DeploymentProtectionRuleRequestedEvent {
  return createFixture<SchemaTypes.DeploymentProtectionRuleRequestedEvent>(
    Schemas.DeploymentProtectionRuleRequestedEventSchema,
    overrides,
  );
}

export function createDeploymentReviewApprovedEvent(
  overrides: DeepPartial<SchemaTypes.DeploymentReviewApprovedEvent> = {},
): SchemaTypes.DeploymentReviewApprovedEvent {
  return createFixture<SchemaTypes.DeploymentReviewApprovedEvent>(
    Schemas.DeploymentReviewApprovedEventSchema,
    overrides,
  );
}

export function createDeploymentReviewRejectedEvent(
  overrides: DeepPartial<SchemaTypes.DeploymentReviewRejectedEvent> = {},
): SchemaTypes.DeploymentReviewRejectedEvent {
  return createFixture<SchemaTypes.DeploymentReviewRejectedEvent>(
    Schemas.DeploymentReviewRejectedEventSchema,
    overrides,
  );
}

export function createDeploymentReviewRequestedEvent(
  overrides: DeepPartial<SchemaTypes.DeploymentReviewRequestedEvent> = {},
): SchemaTypes.DeploymentReviewRequestedEvent {
  return createFixture<SchemaTypes.DeploymentReviewRequestedEvent>(
    Schemas.DeploymentReviewRequestedEventSchema,
    overrides,
  );
}

export function createDeploymentStatusCreatedEvent(
  overrides: DeepPartial<SchemaTypes.DeploymentStatusCreatedEvent> = {},
): SchemaTypes.DeploymentStatusCreatedEvent {
  return createFixture<SchemaTypes.DeploymentStatusCreatedEvent>(
    Schemas.DeploymentStatusCreatedEventSchema,
    overrides,
  );
}

export function createDiscussionAnsweredEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionAnsweredEvent> = {},
): SchemaTypes.DiscussionAnsweredEvent {
  return createFixture<SchemaTypes.DiscussionAnsweredEvent>(
    Schemas.DiscussionAnsweredEventSchema,
    overrides,
  );
}

export function createDiscussionCategoryChangedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionCategoryChangedEvent> = {},
): SchemaTypes.DiscussionCategoryChangedEvent {
  return createFixture<SchemaTypes.DiscussionCategoryChangedEvent>(
    Schemas.DiscussionCategoryChangedEventSchema,
    overrides,
  );
}

export function createDiscussionCommentCreatedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionCommentCreatedEvent> = {},
): SchemaTypes.DiscussionCommentCreatedEvent {
  return createFixture<SchemaTypes.DiscussionCommentCreatedEvent>(
    Schemas.DiscussionCommentCreatedEventSchema,
    overrides,
  );
}

export function createDiscussionCommentDeletedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionCommentDeletedEvent> = {},
): SchemaTypes.DiscussionCommentDeletedEvent {
  return createFixture<SchemaTypes.DiscussionCommentDeletedEvent>(
    Schemas.DiscussionCommentDeletedEventSchema,
    overrides,
  );
}

export function createDiscussionCommentEditedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionCommentEditedEvent> = {},
): SchemaTypes.DiscussionCommentEditedEvent {
  return createFixture<SchemaTypes.DiscussionCommentEditedEvent>(
    Schemas.DiscussionCommentEditedEventSchema,
    overrides,
  );
}

export function createDiscussionCreatedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionCreatedEvent> = {},
): SchemaTypes.DiscussionCreatedEvent {
  return createFixture<SchemaTypes.DiscussionCreatedEvent>(
    Schemas.DiscussionCreatedEventSchema,
    overrides,
  );
}

export function createDiscussionDeletedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionDeletedEvent> = {},
): SchemaTypes.DiscussionDeletedEvent {
  return createFixture<SchemaTypes.DiscussionDeletedEvent>(
    Schemas.DiscussionDeletedEventSchema,
    overrides,
  );
}

export function createDiscussionEditedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionEditedEvent> = {},
): SchemaTypes.DiscussionEditedEvent {
  return createFixture<SchemaTypes.DiscussionEditedEvent>(
    Schemas.DiscussionEditedEventSchema,
    overrides,
  );
}

export function createDiscussionLabeledEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionLabeledEvent> = {},
): SchemaTypes.DiscussionLabeledEvent {
  return createFixture<SchemaTypes.DiscussionLabeledEvent>(
    Schemas.DiscussionLabeledEventSchema,
    overrides,
  );
}

export function createDiscussionLockedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionLockedEvent> = {},
): SchemaTypes.DiscussionLockedEvent {
  return createFixture<SchemaTypes.DiscussionLockedEvent>(
    Schemas.DiscussionLockedEventSchema,
    overrides,
  );
}

export function createDiscussionPinnedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionPinnedEvent> = {},
): SchemaTypes.DiscussionPinnedEvent {
  return createFixture<SchemaTypes.DiscussionPinnedEvent>(
    Schemas.DiscussionPinnedEventSchema,
    overrides,
  );
}

export function createDiscussionTransferredEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionTransferredEvent> = {},
): SchemaTypes.DiscussionTransferredEvent {
  return createFixture<SchemaTypes.DiscussionTransferredEvent>(
    Schemas.DiscussionTransferredEventSchema,
    overrides,
  );
}

export function createDiscussionUnansweredEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionUnansweredEvent> = {},
): SchemaTypes.DiscussionUnansweredEvent {
  return createFixture<SchemaTypes.DiscussionUnansweredEvent>(
    Schemas.DiscussionUnansweredEventSchema,
    overrides,
  );
}

export function createDiscussionUnlabeledEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionUnlabeledEvent> = {},
): SchemaTypes.DiscussionUnlabeledEvent {
  return createFixture<SchemaTypes.DiscussionUnlabeledEvent>(
    Schemas.DiscussionUnlabeledEventSchema,
    overrides,
  );
}

export function createDiscussionUnlockedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionUnlockedEvent> = {},
): SchemaTypes.DiscussionUnlockedEvent {
  return createFixture<SchemaTypes.DiscussionUnlockedEvent>(
    Schemas.DiscussionUnlockedEventSchema,
    overrides,
  );
}

export function createDiscussionUnpinnedEvent(
  overrides: DeepPartial<SchemaTypes.DiscussionUnpinnedEvent> = {},
): SchemaTypes.DiscussionUnpinnedEvent {
  return createFixture<SchemaTypes.DiscussionUnpinnedEvent>(
    Schemas.DiscussionUnpinnedEventSchema,
    overrides,
  );
}

export function createForkEvent(
  overrides: DeepPartial<SchemaTypes.ForkEvent> = {},
): SchemaTypes.ForkEvent {
  return createFixture<SchemaTypes.ForkEvent>(Schemas.ForkEventSchema, overrides);
}

export function createGithubAppAuthorizationRevokedEvent(
  overrides: DeepPartial<SchemaTypes.GithubAppAuthorizationRevokedEvent> = {},
): SchemaTypes.GithubAppAuthorizationRevokedEvent {
  return createFixture<SchemaTypes.GithubAppAuthorizationRevokedEvent>(
    Schemas.GithubAppAuthorizationRevokedEventSchema,
    overrides,
  );
}

export function createGollumEvent(
  overrides: DeepPartial<SchemaTypes.GollumEvent> = {},
): SchemaTypes.GollumEvent {
  return createFixture<SchemaTypes.GollumEvent>(Schemas.GollumEventSchema, overrides);
}

export function createInstallationCreatedEvent(
  overrides: DeepPartial<SchemaTypes.InstallationCreatedEvent> = {},
): SchemaTypes.InstallationCreatedEvent {
  return createFixture<SchemaTypes.InstallationCreatedEvent>(
    Schemas.InstallationCreatedEventSchema,
    overrides,
  );
}

export function createInstallationDeletedEvent(
  overrides: DeepPartial<SchemaTypes.InstallationDeletedEvent> = {},
): SchemaTypes.InstallationDeletedEvent {
  return createFixture<SchemaTypes.InstallationDeletedEvent>(
    Schemas.InstallationDeletedEventSchema,
    overrides,
  );
}

export function createInstallationNewPermissionsAcceptedEvent(
  overrides: DeepPartial<SchemaTypes.InstallationNewPermissionsAcceptedEvent> = {},
): SchemaTypes.InstallationNewPermissionsAcceptedEvent {
  return createFixture<SchemaTypes.InstallationNewPermissionsAcceptedEvent>(
    Schemas.InstallationNewPermissionsAcceptedEventSchema,
    overrides,
  );
}

export function createInstallationRepositoriesAddedEvent(
  overrides: DeepPartial<SchemaTypes.InstallationRepositoriesAddedEvent> = {},
): SchemaTypes.InstallationRepositoriesAddedEvent {
  return createFixture<SchemaTypes.InstallationRepositoriesAddedEvent>(
    Schemas.InstallationRepositoriesAddedEventSchema,
    overrides,
  );
}

export function createInstallationRepositoriesRemovedEvent(
  overrides: DeepPartial<SchemaTypes.InstallationRepositoriesRemovedEvent> = {},
): SchemaTypes.InstallationRepositoriesRemovedEvent {
  return createFixture<SchemaTypes.InstallationRepositoriesRemovedEvent>(
    Schemas.InstallationRepositoriesRemovedEventSchema,
    overrides,
  );
}

export function createInstallationSuspendEvent(
  overrides: DeepPartial<SchemaTypes.InstallationSuspendEvent> = {},
): SchemaTypes.InstallationSuspendEvent {
  return createFixture<SchemaTypes.InstallationSuspendEvent>(
    Schemas.InstallationSuspendEventSchema,
    overrides,
  );
}

export function createInstallationTargetRenamedEvent(
  overrides: DeepPartial<SchemaTypes.InstallationTargetRenamedEvent> = {},
): SchemaTypes.InstallationTargetRenamedEvent {
  return createFixture<SchemaTypes.InstallationTargetRenamedEvent>(
    Schemas.InstallationTargetRenamedEventSchema,
    overrides,
  );
}

export function createInstallationUnsuspendEvent(
  overrides: DeepPartial<SchemaTypes.InstallationUnsuspendEvent> = {},
): SchemaTypes.InstallationUnsuspendEvent {
  return createFixture<SchemaTypes.InstallationUnsuspendEvent>(
    Schemas.InstallationUnsuspendEventSchema,
    overrides,
  );
}

export function createIssueCommentCreatedEvent(
  overrides: DeepPartial<SchemaTypes.IssueCommentCreatedEvent> = {},
): SchemaTypes.IssueCommentCreatedEvent {
  return createFixture<SchemaTypes.IssueCommentCreatedEvent>(
    Schemas.IssueCommentCreatedEventSchema,
    overrides,
  );
}

export function createIssueCommentDeletedEvent(
  overrides: DeepPartial<SchemaTypes.IssueCommentDeletedEvent> = {},
): SchemaTypes.IssueCommentDeletedEvent {
  return createFixture<SchemaTypes.IssueCommentDeletedEvent>(
    Schemas.IssueCommentDeletedEventSchema,
    overrides,
  );
}

export function createIssueCommentEditedEvent(
  overrides: DeepPartial<SchemaTypes.IssueCommentEditedEvent> = {},
): SchemaTypes.IssueCommentEditedEvent {
  return createFixture<SchemaTypes.IssueCommentEditedEvent>(
    Schemas.IssueCommentEditedEventSchema,
    overrides,
  );
}

export function createIssuesAssignedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesAssignedEvent> = {},
): SchemaTypes.IssuesAssignedEvent {
  return createFixture<SchemaTypes.IssuesAssignedEvent>(
    Schemas.IssuesAssignedEventSchema,
    overrides,
  );
}

export function createIssuesClosedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesClosedEvent> = {},
): SchemaTypes.IssuesClosedEvent {
  return createFixture<SchemaTypes.IssuesClosedEvent>(
    Schemas.IssuesClosedEventSchema,
    overrides,
  );
}

export function createIssuesDeletedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesDeletedEvent> = {},
): SchemaTypes.IssuesDeletedEvent {
  return createFixture<SchemaTypes.IssuesDeletedEvent>(
    Schemas.IssuesDeletedEventSchema,
    overrides,
  );
}

export function createIssuesDemilestonedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesDemilestonedEvent> = {},
): SchemaTypes.IssuesDemilestonedEvent {
  return createFixture<SchemaTypes.IssuesDemilestonedEvent>(
    Schemas.IssuesDemilestonedEventSchema,
    overrides,
  );
}

export function createIssuesEditedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesEditedEvent> = {},
): SchemaTypes.IssuesEditedEvent {
  return createFixture<SchemaTypes.IssuesEditedEvent>(
    Schemas.IssuesEditedEventSchema,
    overrides,
  );
}

export function createIssuesLabeledEvent(
  overrides: DeepPartial<SchemaTypes.IssuesLabeledEvent> = {},
): SchemaTypes.IssuesLabeledEvent {
  return createFixture<SchemaTypes.IssuesLabeledEvent>(
    Schemas.IssuesLabeledEventSchema,
    overrides,
  );
}

export function createIssuesLockedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesLockedEvent> = {},
): SchemaTypes.IssuesLockedEvent {
  return createFixture<SchemaTypes.IssuesLockedEvent>(
    Schemas.IssuesLockedEventSchema,
    overrides,
  );
}

export function createIssuesMilestonedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesMilestonedEvent> = {},
): SchemaTypes.IssuesMilestonedEvent {
  return createFixture<SchemaTypes.IssuesMilestonedEvent>(
    Schemas.IssuesMilestonedEventSchema,
    overrides,
  );
}

export function createIssuesOpenedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesOpenedEvent> = {},
): SchemaTypes.IssuesOpenedEvent {
  return createFixture<SchemaTypes.IssuesOpenedEvent>(
    Schemas.IssuesOpenedEventSchema,
    overrides,
  );
}

export function createIssuesPinnedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesPinnedEvent> = {},
): SchemaTypes.IssuesPinnedEvent {
  return createFixture<SchemaTypes.IssuesPinnedEvent>(
    Schemas.IssuesPinnedEventSchema,
    overrides,
  );
}

export function createIssuesReopenedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesReopenedEvent> = {},
): SchemaTypes.IssuesReopenedEvent {
  return createFixture<SchemaTypes.IssuesReopenedEvent>(
    Schemas.IssuesReopenedEventSchema,
    overrides,
  );
}

export function createIssuesTransferredEvent(
  overrides: DeepPartial<SchemaTypes.IssuesTransferredEvent> = {},
): SchemaTypes.IssuesTransferredEvent {
  return createFixture<SchemaTypes.IssuesTransferredEvent>(
    Schemas.IssuesTransferredEventSchema,
    overrides,
  );
}

export function createIssuesUnassignedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesUnassignedEvent> = {},
): SchemaTypes.IssuesUnassignedEvent {
  return createFixture<SchemaTypes.IssuesUnassignedEvent>(
    Schemas.IssuesUnassignedEventSchema,
    overrides,
  );
}

export function createIssuesUnlabeledEvent(
  overrides: DeepPartial<SchemaTypes.IssuesUnlabeledEvent> = {},
): SchemaTypes.IssuesUnlabeledEvent {
  return createFixture<SchemaTypes.IssuesUnlabeledEvent>(
    Schemas.IssuesUnlabeledEventSchema,
    overrides,
  );
}

export function createIssuesUnlockedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesUnlockedEvent> = {},
): SchemaTypes.IssuesUnlockedEvent {
  return createFixture<SchemaTypes.IssuesUnlockedEvent>(
    Schemas.IssuesUnlockedEventSchema,
    overrides,
  );
}

export function createIssuesUnpinnedEvent(
  overrides: DeepPartial<SchemaTypes.IssuesUnpinnedEvent> = {},
): SchemaTypes.IssuesUnpinnedEvent {
  return createFixture<SchemaTypes.IssuesUnpinnedEvent>(
    Schemas.IssuesUnpinnedEventSchema,
    overrides,
  );
}

export function createLabelCreatedEvent(
  overrides: DeepPartial<SchemaTypes.LabelCreatedEvent> = {},
): SchemaTypes.LabelCreatedEvent {
  return createFixture<SchemaTypes.LabelCreatedEvent>(
    Schemas.LabelCreatedEventSchema,
    overrides,
  );
}

export function createLabelDeletedEvent(
  overrides: DeepPartial<SchemaTypes.LabelDeletedEvent> = {},
): SchemaTypes.LabelDeletedEvent {
  return createFixture<SchemaTypes.LabelDeletedEvent>(
    Schemas.LabelDeletedEventSchema,
    overrides,
  );
}

export function createLabelEditedEvent(
  overrides: DeepPartial<SchemaTypes.LabelEditedEvent> = {},
): SchemaTypes.LabelEditedEvent {
  return createFixture<SchemaTypes.LabelEditedEvent>(
    Schemas.LabelEditedEventSchema,
    overrides,
  );
}

export function createMarketplacePurchaseCancelledEvent(
  overrides: DeepPartial<SchemaTypes.MarketplacePurchaseCancelledEvent> = {},
): SchemaTypes.MarketplacePurchaseCancelledEvent {
  return createFixture<SchemaTypes.MarketplacePurchaseCancelledEvent>(
    Schemas.MarketplacePurchaseCancelledEventSchema,
    overrides,
  );
}

export function createMarketplacePurchaseChangedEvent(
  overrides: DeepPartial<SchemaTypes.MarketplacePurchaseChangedEvent> = {},
): SchemaTypes.MarketplacePurchaseChangedEvent {
  return createFixture<SchemaTypes.MarketplacePurchaseChangedEvent>(
    Schemas.MarketplacePurchaseChangedEventSchema,
    overrides,
  );
}

export function createMarketplacePurchasePendingChangeCancelledEvent(
  overrides: DeepPartial<SchemaTypes.MarketplacePurchasePendingChangeCancelledEvent> = {},
): SchemaTypes.MarketplacePurchasePendingChangeCancelledEvent {
  return createFixture<SchemaTypes.MarketplacePurchasePendingChangeCancelledEvent>(
    Schemas.MarketplacePurchasePendingChangeCancelledEventSchema,
    overrides,
  );
}

export function createMarketplacePurchasePendingChangeEvent(
  overrides: DeepPartial<SchemaTypes.MarketplacePurchasePendingChangeEvent> = {},
): SchemaTypes.MarketplacePurchasePendingChangeEvent {
  return createFixture<SchemaTypes.MarketplacePurchasePendingChangeEvent>(
    Schemas.MarketplacePurchasePendingChangeEventSchema,
    overrides,
  );
}

export function createMarketplacePurchasePurchasedEvent(
  overrides: DeepPartial<SchemaTypes.MarketplacePurchasePurchasedEvent> = {},
): SchemaTypes.MarketplacePurchasePurchasedEvent {
  return createFixture<SchemaTypes.MarketplacePurchasePurchasedEvent>(
    Schemas.MarketplacePurchasePurchasedEventSchema,
    overrides,
  );
}

export function createMemberAddedEvent(
  overrides: DeepPartial<SchemaTypes.MemberAddedEvent> = {},
): SchemaTypes.MemberAddedEvent {
  return createFixture<SchemaTypes.MemberAddedEvent>(
    Schemas.MemberAddedEventSchema,
    overrides,
  );
}

export function createMemberEditedEvent(
  overrides: DeepPartial<SchemaTypes.MemberEditedEvent> = {},
): SchemaTypes.MemberEditedEvent {
  return createFixture<SchemaTypes.MemberEditedEvent>(
    Schemas.MemberEditedEventSchema,
    overrides,
  );
}

export function createMemberRemovedEvent(
  overrides: DeepPartial<SchemaTypes.MemberRemovedEvent> = {},
): SchemaTypes.MemberRemovedEvent {
  return createFixture<SchemaTypes.MemberRemovedEvent>(
    Schemas.MemberRemovedEventSchema,
    overrides,
  );
}

export function createMembershipAddedEvent(
  overrides: DeepPartial<SchemaTypes.MembershipAddedEvent> = {},
): SchemaTypes.MembershipAddedEvent {
  return createFixture<SchemaTypes.MembershipAddedEvent>(
    Schemas.MembershipAddedEventSchema,
    overrides,
  );
}

export function createMembershipRemovedEvent(
  overrides: DeepPartial<SchemaTypes.MembershipRemovedEvent> = {},
): SchemaTypes.MembershipRemovedEvent {
  return createFixture<SchemaTypes.MembershipRemovedEvent>(
    Schemas.MembershipRemovedEventSchema,
    overrides,
  );
}

export function createMergeGroupChecksRequestedEvent(
  overrides: DeepPartial<SchemaTypes.MergeGroupChecksRequestedEvent> = {},
): SchemaTypes.MergeGroupChecksRequestedEvent {
  return createFixture<SchemaTypes.MergeGroupChecksRequestedEvent>(
    Schemas.MergeGroupChecksRequestedEventSchema,
    overrides,
  );
}

export function createMergeGroupDestroyedEvent(
  overrides: DeepPartial<SchemaTypes.MergeGroupDestroyedEvent> = {},
): SchemaTypes.MergeGroupDestroyedEvent {
  return createFixture<SchemaTypes.MergeGroupDestroyedEvent>(
    Schemas.MergeGroupDestroyedEventSchema,
    overrides,
  );
}

export function createMetaDeletedEvent(
  overrides: DeepPartial<SchemaTypes.MetaDeletedEvent> = {},
): SchemaTypes.MetaDeletedEvent {
  return createFixture<SchemaTypes.MetaDeletedEvent>(
    Schemas.MetaDeletedEventSchema,
    overrides,
  );
}

export function createMilestoneClosedEvent(
  overrides: DeepPartial<SchemaTypes.MilestoneClosedEvent> = {},
): SchemaTypes.MilestoneClosedEvent {
  return createFixture<SchemaTypes.MilestoneClosedEvent>(
    Schemas.MilestoneClosedEventSchema,
    overrides,
  );
}

export function createMilestoneCreatedEvent(
  overrides: DeepPartial<SchemaTypes.MilestoneCreatedEvent> = {},
): SchemaTypes.MilestoneCreatedEvent {
  return createFixture<SchemaTypes.MilestoneCreatedEvent>(
    Schemas.MilestoneCreatedEventSchema,
    overrides,
  );
}

export function createMilestoneDeletedEvent(
  overrides: DeepPartial<SchemaTypes.MilestoneDeletedEvent> = {},
): SchemaTypes.MilestoneDeletedEvent {
  return createFixture<SchemaTypes.MilestoneDeletedEvent>(
    Schemas.MilestoneDeletedEventSchema,
    overrides,
  );
}

export function createMilestoneEditedEvent(
  overrides: DeepPartial<SchemaTypes.MilestoneEditedEvent> = {},
): SchemaTypes.MilestoneEditedEvent {
  return createFixture<SchemaTypes.MilestoneEditedEvent>(
    Schemas.MilestoneEditedEventSchema,
    overrides,
  );
}

export function createMilestoneOpenedEvent(
  overrides: DeepPartial<SchemaTypes.MilestoneOpenedEvent> = {},
): SchemaTypes.MilestoneOpenedEvent {
  return createFixture<SchemaTypes.MilestoneOpenedEvent>(
    Schemas.MilestoneOpenedEventSchema,
    overrides,
  );
}

export function createOrgBlockBlockedEvent(
  overrides: DeepPartial<SchemaTypes.OrgBlockBlockedEvent> = {},
): SchemaTypes.OrgBlockBlockedEvent {
  return createFixture<SchemaTypes.OrgBlockBlockedEvent>(
    Schemas.OrgBlockBlockedEventSchema,
    overrides,
  );
}

export function createOrgBlockUnblockedEvent(
  overrides: DeepPartial<SchemaTypes.OrgBlockUnblockedEvent> = {},
): SchemaTypes.OrgBlockUnblockedEvent {
  return createFixture<SchemaTypes.OrgBlockUnblockedEvent>(
    Schemas.OrgBlockUnblockedEventSchema,
    overrides,
  );
}

export function createOrganizationDeletedEvent(
  overrides: DeepPartial<SchemaTypes.OrganizationDeletedEvent> = {},
): SchemaTypes.OrganizationDeletedEvent {
  return createFixture<SchemaTypes.OrganizationDeletedEvent>(
    Schemas.OrganizationDeletedEventSchema,
    overrides,
  );
}

export function createOrganizationMemberAddedEvent(
  overrides: DeepPartial<SchemaTypes.OrganizationMemberAddedEvent> = {},
): SchemaTypes.OrganizationMemberAddedEvent {
  return createFixture<SchemaTypes.OrganizationMemberAddedEvent>(
    Schemas.OrganizationMemberAddedEventSchema,
    overrides,
  );
}

export function createOrganizationMemberInvitedEvent(
  overrides: DeepPartial<SchemaTypes.OrganizationMemberInvitedEvent> = {},
): SchemaTypes.OrganizationMemberInvitedEvent {
  return createFixture<SchemaTypes.OrganizationMemberInvitedEvent>(
    Schemas.OrganizationMemberInvitedEventSchema,
    overrides,
  );
}

export function createOrganizationMemberRemovedEvent(
  overrides: DeepPartial<SchemaTypes.OrganizationMemberRemovedEvent> = {},
): SchemaTypes.OrganizationMemberRemovedEvent {
  return createFixture<SchemaTypes.OrganizationMemberRemovedEvent>(
    Schemas.OrganizationMemberRemovedEventSchema,
    overrides,
  );
}

export function createOrganizationRenamedEvent(
  overrides: DeepPartial<SchemaTypes.OrganizationRenamedEvent> = {},
): SchemaTypes.OrganizationRenamedEvent {
  return createFixture<SchemaTypes.OrganizationRenamedEvent>(
    Schemas.OrganizationRenamedEventSchema,
    overrides,
  );
}

export function createPackagePublishedEvent(
  overrides: DeepPartial<SchemaTypes.PackagePublishedEvent> = {},
): SchemaTypes.PackagePublishedEvent {
  return createFixture<SchemaTypes.PackagePublishedEvent>(
    Schemas.PackagePublishedEventSchema,
    overrides,
  );
}

export function createPackageUpdatedEvent(
  overrides: DeepPartial<SchemaTypes.PackageUpdatedEvent> = {},
): SchemaTypes.PackageUpdatedEvent {
  return createFixture<SchemaTypes.PackageUpdatedEvent>(
    Schemas.PackageUpdatedEventSchema,
    overrides,
  );
}

export function createPageBuildEvent(
  overrides: DeepPartial<SchemaTypes.PageBuildEvent> = {},
): SchemaTypes.PageBuildEvent {
  return createFixture<SchemaTypes.PageBuildEvent>(
    Schemas.PageBuildEventSchema,
    overrides,
  );
}

export function createPingEvent(
  overrides: DeepPartial<SchemaTypes.PingEvent> = {},
): SchemaTypes.PingEvent {
  return createFixture<SchemaTypes.PingEvent>(Schemas.PingEventSchema, overrides);
}

export function createProjectCardConvertedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectCardConvertedEvent> = {},
): SchemaTypes.ProjectCardConvertedEvent {
  return createFixture<SchemaTypes.ProjectCardConvertedEvent>(
    Schemas.ProjectCardConvertedEventSchema,
    overrides,
  );
}

export function createProjectCardCreatedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectCardCreatedEvent> = {},
): SchemaTypes.ProjectCardCreatedEvent {
  return createFixture<SchemaTypes.ProjectCardCreatedEvent>(
    Schemas.ProjectCardCreatedEventSchema,
    overrides,
  );
}

export function createProjectCardDeletedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectCardDeletedEvent> = {},
): SchemaTypes.ProjectCardDeletedEvent {
  return createFixture<SchemaTypes.ProjectCardDeletedEvent>(
    Schemas.ProjectCardDeletedEventSchema,
    overrides,
  );
}

export function createProjectCardEditedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectCardEditedEvent> = {},
): SchemaTypes.ProjectCardEditedEvent {
  return createFixture<SchemaTypes.ProjectCardEditedEvent>(
    Schemas.ProjectCardEditedEventSchema,
    overrides,
  );
}

export function createProjectCardMovedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectCardMovedEvent> = {},
): SchemaTypes.ProjectCardMovedEvent {
  return createFixture<SchemaTypes.ProjectCardMovedEvent>(
    Schemas.ProjectCardMovedEventSchema,
    overrides,
  );
}

export function createProjectClosedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectClosedEvent> = {},
): SchemaTypes.ProjectClosedEvent {
  return createFixture<SchemaTypes.ProjectClosedEvent>(
    Schemas.ProjectClosedEventSchema,
    overrides,
  );
}

export function createProjectColumnCreatedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectColumnCreatedEvent> = {},
): SchemaTypes.ProjectColumnCreatedEvent {
  return createFixture<SchemaTypes.ProjectColumnCreatedEvent>(
    Schemas.ProjectColumnCreatedEventSchema,
    overrides,
  );
}

export function createProjectColumnDeletedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectColumnDeletedEvent> = {},
): SchemaTypes.ProjectColumnDeletedEvent {
  return createFixture<SchemaTypes.ProjectColumnDeletedEvent>(
    Schemas.ProjectColumnDeletedEventSchema,
    overrides,
  );
}

export function createProjectColumnEditedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectColumnEditedEvent> = {},
): SchemaTypes.ProjectColumnEditedEvent {
  return createFixture<SchemaTypes.ProjectColumnEditedEvent>(
    Schemas.ProjectColumnEditedEventSchema,
    overrides,
  );
}

export function createProjectColumnMovedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectColumnMovedEvent> = {},
): SchemaTypes.ProjectColumnMovedEvent {
  return createFixture<SchemaTypes.ProjectColumnMovedEvent>(
    Schemas.ProjectColumnMovedEventSchema,
    overrides,
  );
}

export function createProjectCreatedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectCreatedEvent> = {},
): SchemaTypes.ProjectCreatedEvent {
  return createFixture<SchemaTypes.ProjectCreatedEvent>(
    Schemas.ProjectCreatedEventSchema,
    overrides,
  );
}

export function createProjectDeletedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectDeletedEvent> = {},
): SchemaTypes.ProjectDeletedEvent {
  return createFixture<SchemaTypes.ProjectDeletedEvent>(
    Schemas.ProjectDeletedEventSchema,
    overrides,
  );
}

export function createProjectEditedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectEditedEvent> = {},
): SchemaTypes.ProjectEditedEvent {
  return createFixture<SchemaTypes.ProjectEditedEvent>(
    Schemas.ProjectEditedEventSchema,
    overrides,
  );
}

export function createProjectReopenedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectReopenedEvent> = {},
): SchemaTypes.ProjectReopenedEvent {
  return createFixture<SchemaTypes.ProjectReopenedEvent>(
    Schemas.ProjectReopenedEventSchema,
    overrides,
  );
}

export function createProjectsV2ItemArchivedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectsV2ItemArchivedEvent> = {},
): SchemaTypes.ProjectsV2ItemArchivedEvent {
  return createFixture<SchemaTypes.ProjectsV2ItemArchivedEvent>(
    Schemas.ProjectsV2ItemArchivedEventSchema,
    overrides,
  );
}

export function createProjectsV2ItemConvertedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectsV2ItemConvertedEvent> = {},
): SchemaTypes.ProjectsV2ItemConvertedEvent {
  return createFixture<SchemaTypes.ProjectsV2ItemConvertedEvent>(
    Schemas.ProjectsV2ItemConvertedEventSchema,
    overrides,
  );
}

export function createProjectsV2ItemCreatedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectsV2ItemCreatedEvent> = {},
): SchemaTypes.ProjectsV2ItemCreatedEvent {
  return createFixture<SchemaTypes.ProjectsV2ItemCreatedEvent>(
    Schemas.ProjectsV2ItemCreatedEventSchema,
    overrides,
  );
}

export function createProjectsV2ItemDeletedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectsV2ItemDeletedEvent> = {},
): SchemaTypes.ProjectsV2ItemDeletedEvent {
  return createFixture<SchemaTypes.ProjectsV2ItemDeletedEvent>(
    Schemas.ProjectsV2ItemDeletedEventSchema,
    overrides,
  );
}

export function createProjectsV2ItemEditedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectsV2ItemEditedEvent> = {},
): SchemaTypes.ProjectsV2ItemEditedEvent {
  return createFixture<SchemaTypes.ProjectsV2ItemEditedEvent>(
    Schemas.ProjectsV2ItemEditedEventSchema,
    overrides,
  );
}

export function createProjectsV2ItemReorderedEvent(
  overrides: DeepPartial<SchemaTypes.ProjectsV2ItemReorderedEvent> = {},
): SchemaTypes.ProjectsV2ItemReorderedEvent {
  return createFixture<SchemaTypes.ProjectsV2ItemReorderedEvent>(
    Schemas.ProjectsV2ItemReorderedEventSchema,
    overrides,
  );
}

export function createProjectsV2ItemRestoredEvent(
  overrides: DeepPartial<SchemaTypes.ProjectsV2ItemRestoredEvent> = {},
): SchemaTypes.ProjectsV2ItemRestoredEvent {
  return createFixture<SchemaTypes.ProjectsV2ItemRestoredEvent>(
    Schemas.ProjectsV2ItemRestoredEventSchema,
    overrides,
  );
}

export function createPublicEvent(
  overrides: DeepPartial<SchemaTypes.PublicEvent> = {},
): SchemaTypes.PublicEvent {
  return createFixture<SchemaTypes.PublicEvent>(Schemas.PublicEventSchema, overrides);
}

export function createPullRequestAssignedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestAssignedEvent> = {},
): SchemaTypes.PullRequestAssignedEvent {
  return createFixture<SchemaTypes.PullRequestAssignedEvent>(
    Schemas.PullRequestAssignedEventSchema,
    overrides,
  );
}

export function createPullRequestAutoMergeDisabledEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestAutoMergeDisabledEvent> = {},
): SchemaTypes.PullRequestAutoMergeDisabledEvent {
  return createFixture<SchemaTypes.PullRequestAutoMergeDisabledEvent>(
    Schemas.PullRequestAutoMergeDisabledEventSchema,
    overrides,
  );
}

export function createPullRequestAutoMergeEnabledEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestAutoMergeEnabledEvent> = {},
): SchemaTypes.PullRequestAutoMergeEnabledEvent {
  return createFixture<SchemaTypes.PullRequestAutoMergeEnabledEvent>(
    Schemas.PullRequestAutoMergeEnabledEventSchema,
    overrides,
  );
}

export function createPullRequestClosedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestClosedEvent> = {},
): SchemaTypes.PullRequestClosedEvent {
  return createFixture<SchemaTypes.PullRequestClosedEvent>(
    Schemas.PullRequestClosedEventSchema,
    overrides,
  );
}

export function createPullRequestConvertedToDraftEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestConvertedToDraftEvent> = {},
): SchemaTypes.PullRequestConvertedToDraftEvent {
  return createFixture<SchemaTypes.PullRequestConvertedToDraftEvent>(
    Schemas.PullRequestConvertedToDraftEventSchema,
    overrides,
  );
}

export function createPullRequestDemilestonedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestDemilestonedEvent> = {},
): SchemaTypes.PullRequestDemilestonedEvent {
  return createFixture<SchemaTypes.PullRequestDemilestonedEvent>(
    Schemas.PullRequestDemilestonedEventSchema,
    overrides,
  );
}

export function createPullRequestDequeuedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestDequeuedEvent> = {},
): SchemaTypes.PullRequestDequeuedEvent {
  return createFixture<SchemaTypes.PullRequestDequeuedEvent>(
    Schemas.PullRequestDequeuedEventSchema,
    overrides,
  );
}

export function createPullRequestEditedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestEditedEvent> = {},
): SchemaTypes.PullRequestEditedEvent {
  return createFixture<SchemaTypes.PullRequestEditedEvent>(
    Schemas.PullRequestEditedEventSchema,
    overrides,
  );
}

export function createPullRequestEnqueuedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestEnqueuedEvent> = {},
): SchemaTypes.PullRequestEnqueuedEvent {
  return createFixture<SchemaTypes.PullRequestEnqueuedEvent>(
    Schemas.PullRequestEnqueuedEventSchema,
    overrides,
  );
}

export function createPullRequestLabeledEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestLabeledEvent> = {},
): SchemaTypes.PullRequestLabeledEvent {
  return createFixture<SchemaTypes.PullRequestLabeledEvent>(
    Schemas.PullRequestLabeledEventSchema,
    overrides,
  );
}

export function createPullRequestLockedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestLockedEvent> = {},
): SchemaTypes.PullRequestLockedEvent {
  return createFixture<SchemaTypes.PullRequestLockedEvent>(
    Schemas.PullRequestLockedEventSchema,
    overrides,
  );
}

export function createPullRequestMilestonedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestMilestonedEvent> = {},
): SchemaTypes.PullRequestMilestonedEvent {
  return createFixture<SchemaTypes.PullRequestMilestonedEvent>(
    Schemas.PullRequestMilestonedEventSchema,
    overrides,
  );
}

export function createPullRequestOpenedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestOpenedEvent> = {},
): SchemaTypes.PullRequestOpenedEvent {
  return createFixture<SchemaTypes.PullRequestOpenedEvent>(
    Schemas.PullRequestOpenedEventSchema,
    overrides,
  );
}

export function createPullRequestReadyForReviewEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReadyForReviewEvent> = {},
): SchemaTypes.PullRequestReadyForReviewEvent {
  return createFixture<SchemaTypes.PullRequestReadyForReviewEvent>(
    Schemas.PullRequestReadyForReviewEventSchema,
    overrides,
  );
}

export function createPullRequestReopenedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReopenedEvent> = {},
): SchemaTypes.PullRequestReopenedEvent {
  return createFixture<SchemaTypes.PullRequestReopenedEvent>(
    Schemas.PullRequestReopenedEventSchema,
    overrides,
  );
}

export function createPullRequestReviewCommentCreatedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReviewCommentCreatedEvent> = {},
): SchemaTypes.PullRequestReviewCommentCreatedEvent {
  return createFixture<SchemaTypes.PullRequestReviewCommentCreatedEvent>(
    Schemas.PullRequestReviewCommentCreatedEventSchema,
    overrides,
  );
}

export function createPullRequestReviewCommentDeletedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReviewCommentDeletedEvent> = {},
): SchemaTypes.PullRequestReviewCommentDeletedEvent {
  return createFixture<SchemaTypes.PullRequestReviewCommentDeletedEvent>(
    Schemas.PullRequestReviewCommentDeletedEventSchema,
    overrides,
  );
}

export function createPullRequestReviewCommentEditedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReviewCommentEditedEvent> = {},
): SchemaTypes.PullRequestReviewCommentEditedEvent {
  return createFixture<SchemaTypes.PullRequestReviewCommentEditedEvent>(
    Schemas.PullRequestReviewCommentEditedEventSchema,
    overrides,
  );
}

export function createPullRequestReviewDismissedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReviewDismissedEvent> = {},
): SchemaTypes.PullRequestReviewDismissedEvent {
  return createFixture<SchemaTypes.PullRequestReviewDismissedEvent>(
    Schemas.PullRequestReviewDismissedEventSchema,
    overrides,
  );
}

export function createPullRequestReviewEditedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReviewEditedEvent> = {},
): SchemaTypes.PullRequestReviewEditedEvent {
  return createFixture<SchemaTypes.PullRequestReviewEditedEvent>(
    Schemas.PullRequestReviewEditedEventSchema,
    overrides,
  );
}

export function createPullRequestReviewSubmittedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReviewSubmittedEvent> = {},
): SchemaTypes.PullRequestReviewSubmittedEvent {
  return createFixture<SchemaTypes.PullRequestReviewSubmittedEvent>(
    Schemas.PullRequestReviewSubmittedEventSchema,
    overrides,
  );
}

export function createPullRequestReviewThreadResolvedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReviewThreadResolvedEvent> = {},
): SchemaTypes.PullRequestReviewThreadResolvedEvent {
  return createFixture<SchemaTypes.PullRequestReviewThreadResolvedEvent>(
    Schemas.PullRequestReviewThreadResolvedEventSchema,
    overrides,
  );
}

export function createPullRequestReviewThreadUnresolvedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestReviewThreadUnresolvedEvent> = {},
): SchemaTypes.PullRequestReviewThreadUnresolvedEvent {
  return createFixture<SchemaTypes.PullRequestReviewThreadUnresolvedEvent>(
    Schemas.PullRequestReviewThreadUnresolvedEventSchema,
    overrides,
  );
}

export function createPullRequestSynchronizeEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestSynchronizeEvent> = {},
): SchemaTypes.PullRequestSynchronizeEvent {
  return createFixture<SchemaTypes.PullRequestSynchronizeEvent>(
    Schemas.PullRequestSynchronizeEventSchema,
    overrides,
  );
}

export function createPullRequestUnassignedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestUnassignedEvent> = {},
): SchemaTypes.PullRequestUnassignedEvent {
  return createFixture<SchemaTypes.PullRequestUnassignedEvent>(
    Schemas.PullRequestUnassignedEventSchema,
    overrides,
  );
}

export function createPullRequestUnlabeledEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestUnlabeledEvent> = {},
): SchemaTypes.PullRequestUnlabeledEvent {
  return createFixture<SchemaTypes.PullRequestUnlabeledEvent>(
    Schemas.PullRequestUnlabeledEventSchema,
    overrides,
  );
}

export function createPullRequestUnlockedEvent(
  overrides: DeepPartial<SchemaTypes.PullRequestUnlockedEvent> = {},
): SchemaTypes.PullRequestUnlockedEvent {
  return createFixture<SchemaTypes.PullRequestUnlockedEvent>(
    Schemas.PullRequestUnlockedEventSchema,
    overrides,
  );
}

export function createPushEvent(
  overrides: DeepPartial<SchemaTypes.PushEvent> = {},
): SchemaTypes.PushEvent {
  return createFixture<SchemaTypes.PushEvent>(Schemas.PushEventSchema, overrides);
}

export function createRegistryPackagePublishedEvent(
  overrides: DeepPartial<SchemaTypes.RegistryPackagePublishedEvent> = {},
): SchemaTypes.RegistryPackagePublishedEvent {
  return createFixture<SchemaTypes.RegistryPackagePublishedEvent>(
    Schemas.RegistryPackagePublishedEventSchema,
    overrides,
  );
}

export function createRegistryPackageUpdatedEvent(
  overrides: DeepPartial<SchemaTypes.RegistryPackageUpdatedEvent> = {},
): SchemaTypes.RegistryPackageUpdatedEvent {
  return createFixture<SchemaTypes.RegistryPackageUpdatedEvent>(
    Schemas.RegistryPackageUpdatedEventSchema,
    overrides,
  );
}

export function createReleaseCreatedEvent(
  overrides: DeepPartial<SchemaTypes.ReleaseCreatedEvent> = {},
): SchemaTypes.ReleaseCreatedEvent {
  return createFixture<SchemaTypes.ReleaseCreatedEvent>(
    Schemas.ReleaseCreatedEventSchema,
    overrides,
  );
}

export function createReleaseDeletedEvent(
  overrides: DeepPartial<SchemaTypes.ReleaseDeletedEvent> = {},
): SchemaTypes.ReleaseDeletedEvent {
  return createFixture<SchemaTypes.ReleaseDeletedEvent>(
    Schemas.ReleaseDeletedEventSchema,
    overrides,
  );
}

export function createReleaseEditedEvent(
  overrides: DeepPartial<SchemaTypes.ReleaseEditedEvent> = {},
): SchemaTypes.ReleaseEditedEvent {
  return createFixture<SchemaTypes.ReleaseEditedEvent>(
    Schemas.ReleaseEditedEventSchema,
    overrides,
  );
}

export function createReleasePrereleasedEvent(
  overrides: DeepPartial<SchemaTypes.ReleasePrereleasedEvent> = {},
): SchemaTypes.ReleasePrereleasedEvent {
  return createFixture<SchemaTypes.ReleasePrereleasedEvent>(
    Schemas.ReleasePrereleasedEventSchema,
    overrides,
  );
}

export function createReleasePublishedEvent(
  overrides: DeepPartial<SchemaTypes.ReleasePublishedEvent> = {},
): SchemaTypes.ReleasePublishedEvent {
  return createFixture<SchemaTypes.ReleasePublishedEvent>(
    Schemas.ReleasePublishedEventSchema,
    overrides,
  );
}

export function createReleaseReleasedEvent(
  overrides: DeepPartial<SchemaTypes.ReleaseReleasedEvent> = {},
): SchemaTypes.ReleaseReleasedEvent {
  return createFixture<SchemaTypes.ReleaseReleasedEvent>(
    Schemas.ReleaseReleasedEventSchema,
    overrides,
  );
}

export function createReleaseUnpublishedEvent(
  overrides: DeepPartial<SchemaTypes.ReleaseUnpublishedEvent> = {},
): SchemaTypes.ReleaseUnpublishedEvent {
  return createFixture<SchemaTypes.ReleaseUnpublishedEvent>(
    Schemas.ReleaseUnpublishedEventSchema,
    overrides,
  );
}

export function createRepositoryArchivedEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryArchivedEvent> = {},
): SchemaTypes.RepositoryArchivedEvent {
  return createFixture<SchemaTypes.RepositoryArchivedEvent>(
    Schemas.RepositoryArchivedEventSchema,
    overrides,
  );
}

export function createRepositoryCreatedEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryCreatedEvent> = {},
): SchemaTypes.RepositoryCreatedEvent {
  return createFixture<SchemaTypes.RepositoryCreatedEvent>(
    Schemas.RepositoryCreatedEventSchema,
    overrides,
  );
}

export function createRepositoryDeletedEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryDeletedEvent> = {},
): SchemaTypes.RepositoryDeletedEvent {
  return createFixture<SchemaTypes.RepositoryDeletedEvent>(
    Schemas.RepositoryDeletedEventSchema,
    overrides,
  );
}

export function createRepositoryDispatchEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryDispatchEvent> = {},
): SchemaTypes.RepositoryDispatchEvent {
  return createFixture<SchemaTypes.RepositoryDispatchEvent>(
    Schemas.RepositoryDispatchEventSchema,
    overrides,
  );
}

export function createRepositoryEditedEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryEditedEvent> = {},
): SchemaTypes.RepositoryEditedEvent {
  return createFixture<SchemaTypes.RepositoryEditedEvent>(
    Schemas.RepositoryEditedEventSchema,
    overrides,
  );
}

export function createRepositoryImportEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryImportEvent> = {},
): SchemaTypes.RepositoryImportEvent {
  return createFixture<SchemaTypes.RepositoryImportEvent>(
    Schemas.RepositoryImportEventSchema,
    overrides,
  );
}

export function createRepositoryPrivatizedEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryPrivatizedEvent> = {},
): SchemaTypes.RepositoryPrivatizedEvent {
  return createFixture<SchemaTypes.RepositoryPrivatizedEvent>(
    Schemas.RepositoryPrivatizedEventSchema,
    overrides,
  );
}

export function createRepositoryPublicizedEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryPublicizedEvent> = {},
): SchemaTypes.RepositoryPublicizedEvent {
  return createFixture<SchemaTypes.RepositoryPublicizedEvent>(
    Schemas.RepositoryPublicizedEventSchema,
    overrides,
  );
}

export function createRepositoryRenamedEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryRenamedEvent> = {},
): SchemaTypes.RepositoryRenamedEvent {
  return createFixture<SchemaTypes.RepositoryRenamedEvent>(
    Schemas.RepositoryRenamedEventSchema,
    overrides,
  );
}

export function createRepositoryTransferredEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryTransferredEvent> = {},
): SchemaTypes.RepositoryTransferredEvent {
  return createFixture<SchemaTypes.RepositoryTransferredEvent>(
    Schemas.RepositoryTransferredEventSchema,
    overrides,
  );
}

export function createRepositoryUnarchivedEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryUnarchivedEvent> = {},
): SchemaTypes.RepositoryUnarchivedEvent {
  return createFixture<SchemaTypes.RepositoryUnarchivedEvent>(
    Schemas.RepositoryUnarchivedEventSchema,
    overrides,
  );
}

export function createRepositoryVulnerabilityAlertCreateEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryVulnerabilityAlertCreateEvent> = {},
): SchemaTypes.RepositoryVulnerabilityAlertCreateEvent {
  return createFixture<SchemaTypes.RepositoryVulnerabilityAlertCreateEvent>(
    Schemas.RepositoryVulnerabilityAlertCreateEventSchema,
    overrides,
  );
}

export function createRepositoryVulnerabilityAlertDismissEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryVulnerabilityAlertDismissEvent> = {},
): SchemaTypes.RepositoryVulnerabilityAlertDismissEvent {
  return createFixture<SchemaTypes.RepositoryVulnerabilityAlertDismissEvent>(
    Schemas.RepositoryVulnerabilityAlertDismissEventSchema,
    overrides,
  );
}

export function createRepositoryVulnerabilityAlertReopenEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryVulnerabilityAlertReopenEvent> = {},
): SchemaTypes.RepositoryVulnerabilityAlertReopenEvent {
  return createFixture<SchemaTypes.RepositoryVulnerabilityAlertReopenEvent>(
    Schemas.RepositoryVulnerabilityAlertReopenEventSchema,
    overrides,
  );
}

export function createRepositoryVulnerabilityAlertResolveEvent(
  overrides: DeepPartial<SchemaTypes.RepositoryVulnerabilityAlertResolveEvent> = {},
): SchemaTypes.RepositoryVulnerabilityAlertResolveEvent {
  return createFixture<SchemaTypes.RepositoryVulnerabilityAlertResolveEvent>(
    Schemas.RepositoryVulnerabilityAlertResolveEventSchema,
    overrides,
  );
}

export function createSecretScanningAlertCreatedEvent(
  overrides: DeepPartial<SchemaTypes.SecretScanningAlertCreatedEvent> = {},
): SchemaTypes.SecretScanningAlertCreatedEvent {
  return createFixture<SchemaTypes.SecretScanningAlertCreatedEvent>(
    Schemas.SecretScanningAlertCreatedEventSchema,
    overrides,
  );
}

export function createSecretScanningAlertLocationCreatedEvent(
  overrides: DeepPartial<SchemaTypes.SecretScanningAlertLocationCreatedEvent> = {},
): SchemaTypes.SecretScanningAlertLocationCreatedEvent {
  return createFixture<SchemaTypes.SecretScanningAlertLocationCreatedEvent>(
    Schemas.SecretScanningAlertLocationCreatedEventSchema,
    overrides,
  );
}

export function createSecretScanningAlertReopenedEvent(
  overrides: DeepPartial<SchemaTypes.SecretScanningAlertReopenedEvent> = {},
): SchemaTypes.SecretScanningAlertReopenedEvent {
  return createFixture<SchemaTypes.SecretScanningAlertReopenedEvent>(
    Schemas.SecretScanningAlertReopenedEventSchema,
    overrides,
  );
}

export function createSecretScanningAlertResolvedEvent(
  overrides: DeepPartial<SchemaTypes.SecretScanningAlertResolvedEvent> = {},
): SchemaTypes.SecretScanningAlertResolvedEvent {
  return createFixture<SchemaTypes.SecretScanningAlertResolvedEvent>(
    Schemas.SecretScanningAlertResolvedEventSchema,
    overrides,
  );
}

export function createSecretScanningAlertRevokedEvent(
  overrides: DeepPartial<SchemaTypes.SecretScanningAlertRevokedEvent> = {},
): SchemaTypes.SecretScanningAlertRevokedEvent {
  return createFixture<SchemaTypes.SecretScanningAlertRevokedEvent>(
    Schemas.SecretScanningAlertRevokedEventSchema,
    overrides,
  );
}

export function createSecurityAdvisoryPerformedEvent(
  overrides: DeepPartial<SchemaTypes.SecurityAdvisoryPerformedEvent> = {},
): SchemaTypes.SecurityAdvisoryPerformedEvent {
  return createFixture<SchemaTypes.SecurityAdvisoryPerformedEvent>(
    Schemas.SecurityAdvisoryPerformedEventSchema,
    overrides,
  );
}

export function createSecurityAdvisoryPublishedEvent(
  overrides: DeepPartial<SchemaTypes.SecurityAdvisoryPublishedEvent> = {},
): SchemaTypes.SecurityAdvisoryPublishedEvent {
  return createFixture<SchemaTypes.SecurityAdvisoryPublishedEvent>(
    Schemas.SecurityAdvisoryPublishedEventSchema,
    overrides,
  );
}

export function createSecurityAdvisoryUpdatedEvent(
  overrides: DeepPartial<SchemaTypes.SecurityAdvisoryUpdatedEvent> = {},
): SchemaTypes.SecurityAdvisoryUpdatedEvent {
  return createFixture<SchemaTypes.SecurityAdvisoryUpdatedEvent>(
    Schemas.SecurityAdvisoryUpdatedEventSchema,
    overrides,
  );
}

export function createSecurityAdvisoryWithdrawnEvent(
  overrides: DeepPartial<SchemaTypes.SecurityAdvisoryWithdrawnEvent> = {},
): SchemaTypes.SecurityAdvisoryWithdrawnEvent {
  return createFixture<SchemaTypes.SecurityAdvisoryWithdrawnEvent>(
    Schemas.SecurityAdvisoryWithdrawnEventSchema,
    overrides,
  );
}

export function createSponsorshipCancelledEvent(
  overrides: DeepPartial<SchemaTypes.SponsorshipCancelledEvent> = {},
): SchemaTypes.SponsorshipCancelledEvent {
  return createFixture<SchemaTypes.SponsorshipCancelledEvent>(
    Schemas.SponsorshipCancelledEventSchema,
    overrides,
  );
}

export function createSponsorshipCreatedEvent(
  overrides: DeepPartial<SchemaTypes.SponsorshipCreatedEvent> = {},
): SchemaTypes.SponsorshipCreatedEvent {
  return createFixture<SchemaTypes.SponsorshipCreatedEvent>(
    Schemas.SponsorshipCreatedEventSchema,
    overrides,
  );
}

export function createSponsorshipEditedEvent(
  overrides: DeepPartial<SchemaTypes.SponsorshipEditedEvent> = {},
): SchemaTypes.SponsorshipEditedEvent {
  return createFixture<SchemaTypes.SponsorshipEditedEvent>(
    Schemas.SponsorshipEditedEventSchema,
    overrides,
  );
}

export function createSponsorshipPendingCancellationEvent(
  overrides: DeepPartial<SchemaTypes.SponsorshipPendingCancellationEvent> = {},
): SchemaTypes.SponsorshipPendingCancellationEvent {
  return createFixture<SchemaTypes.SponsorshipPendingCancellationEvent>(
    Schemas.SponsorshipPendingCancellationEventSchema,
    overrides,
  );
}

export function createSponsorshipPendingTierChangeEvent(
  overrides: DeepPartial<SchemaTypes.SponsorshipPendingTierChangeEvent> = {},
): SchemaTypes.SponsorshipPendingTierChangeEvent {
  return createFixture<SchemaTypes.SponsorshipPendingTierChangeEvent>(
    Schemas.SponsorshipPendingTierChangeEventSchema,
    overrides,
  );
}

export function createSponsorshipTierChangedEvent(
  overrides: DeepPartial<SchemaTypes.SponsorshipTierChangedEvent> = {},
): SchemaTypes.SponsorshipTierChangedEvent {
  return createFixture<SchemaTypes.SponsorshipTierChangedEvent>(
    Schemas.SponsorshipTierChangedEventSchema,
    overrides,
  );
}

export function createStarCreatedEvent(
  overrides: DeepPartial<SchemaTypes.StarCreatedEvent> = {},
): SchemaTypes.StarCreatedEvent {
  return createFixture<SchemaTypes.StarCreatedEvent>(
    Schemas.StarCreatedEventSchema,
    overrides,
  );
}

export function createStarDeletedEvent(
  overrides: DeepPartial<SchemaTypes.StarDeletedEvent> = {},
): SchemaTypes.StarDeletedEvent {
  return createFixture<SchemaTypes.StarDeletedEvent>(
    Schemas.StarDeletedEventSchema,
    overrides,
  );
}

export function createStatusEvent(
  overrides: DeepPartial<SchemaTypes.StatusEvent> = {},
): SchemaTypes.StatusEvent {
  return createFixture<SchemaTypes.StatusEvent>(Schemas.StatusEventSchema, overrides);
}

export function createTeamAddEvent(
  overrides: DeepPartial<SchemaTypes.TeamAddEvent> = {},
): SchemaTypes.TeamAddEvent {
  return createFixture<SchemaTypes.TeamAddEvent>(Schemas.TeamAddEventSchema, overrides);
}

export function createTeamAddedToRepositoryEvent(
  overrides: DeepPartial<SchemaTypes.TeamAddedToRepositoryEvent> = {},
): SchemaTypes.TeamAddedToRepositoryEvent {
  return createFixture<SchemaTypes.TeamAddedToRepositoryEvent>(
    Schemas.TeamAddedToRepositoryEventSchema,
    overrides,
  );
}

export function createTeamCreatedEvent(
  overrides: DeepPartial<SchemaTypes.TeamCreatedEvent> = {},
): SchemaTypes.TeamCreatedEvent {
  return createFixture<SchemaTypes.TeamCreatedEvent>(
    Schemas.TeamCreatedEventSchema,
    overrides,
  );
}

export function createTeamDeletedEvent(
  overrides: DeepPartial<SchemaTypes.TeamDeletedEvent> = {},
): SchemaTypes.TeamDeletedEvent {
  return createFixture<SchemaTypes.TeamDeletedEvent>(
    Schemas.TeamDeletedEventSchema,
    overrides,
  );
}

export function createTeamEditedEvent(
  overrides: DeepPartial<SchemaTypes.TeamEditedEvent> = {},
): SchemaTypes.TeamEditedEvent {
  return createFixture<SchemaTypes.TeamEditedEvent>(
    Schemas.TeamEditedEventSchema,
    overrides,
  );
}

export function createTeamRemovedFromRepositoryEvent(
  overrides: DeepPartial<SchemaTypes.TeamRemovedFromRepositoryEvent> = {},
): SchemaTypes.TeamRemovedFromRepositoryEvent {
  return createFixture<SchemaTypes.TeamRemovedFromRepositoryEvent>(
    Schemas.TeamRemovedFromRepositoryEventSchema,
    overrides,
  );
}

export function createWatchStartedEvent(
  overrides: DeepPartial<SchemaTypes.WatchStartedEvent> = {},
): SchemaTypes.WatchStartedEvent {
  return createFixture<SchemaTypes.WatchStartedEvent>(
    Schemas.WatchStartedEventSchema,
    overrides,
  );
}

export function createWorkflowDispatchEvent(
  overrides: DeepPartial<SchemaTypes.WorkflowDispatchEvent> = {},
): SchemaTypes.WorkflowDispatchEvent {
  return createFixture<SchemaTypes.WorkflowDispatchEvent>(
    Schemas.WorkflowDispatchEventSchema,
    overrides,
  );
}

export function createWorkflowJobCompletedEvent(
  overrides: DeepPartial<SchemaTypes.WorkflowJobCompletedEvent> = {},
): SchemaTypes.WorkflowJobCompletedEvent {
  return createFixture<SchemaTypes.WorkflowJobCompletedEvent>(
    Schemas.WorkflowJobCompletedEventSchema,
    overrides,
  );
}

export function createWorkflowJobInProgressEvent(
  overrides: DeepPartial<SchemaTypes.WorkflowJobInProgressEvent> = {},
): SchemaTypes.WorkflowJobInProgressEvent {
  return createFixture<SchemaTypes.WorkflowJobInProgressEvent>(
    Schemas.WorkflowJobInProgressEventSchema,
    overrides,
  );
}

export function createWorkflowJobQueuedEvent(
  overrides: DeepPartial<SchemaTypes.WorkflowJobQueuedEvent> = {},
): SchemaTypes.WorkflowJobQueuedEvent {
  return createFixture<SchemaTypes.WorkflowJobQueuedEvent>(
    Schemas.WorkflowJobQueuedEventSchema,
    overrides,
  );
}

export function createWorkflowJobWaitingEvent(
  overrides: DeepPartial<SchemaTypes.WorkflowJobWaitingEvent> = {},
): SchemaTypes.WorkflowJobWaitingEvent {
  return createFixture<SchemaTypes.WorkflowJobWaitingEvent>(
    Schemas.WorkflowJobWaitingEventSchema,
    overrides,
  );
}

export function createWorkflowRunCompletedEvent(
  overrides: DeepPartial<SchemaTypes.WorkflowRunCompletedEvent> = {},
): SchemaTypes.WorkflowRunCompletedEvent {
  return createFixture<SchemaTypes.WorkflowRunCompletedEvent>(
    Schemas.WorkflowRunCompletedEventSchema,
    overrides,
  );
}

export function createWorkflowRunInProgressEvent(
  overrides: DeepPartial<SchemaTypes.WorkflowRunInProgressEvent> = {},
): SchemaTypes.WorkflowRunInProgressEvent {
  return createFixture<SchemaTypes.WorkflowRunInProgressEvent>(
    Schemas.WorkflowRunInProgressEventSchema,
    overrides,
  );
}

export function createWorkflowRunRequestedEvent(
  overrides: DeepPartial<SchemaTypes.WorkflowRunRequestedEvent> = {},
): SchemaTypes.WorkflowRunRequestedEvent {
  return createFixture<SchemaTypes.WorkflowRunRequestedEvent>(
    Schemas.WorkflowRunRequestedEventSchema,
    overrides,
  );
}
