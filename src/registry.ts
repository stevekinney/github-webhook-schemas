/**
 * Auto-generated webhook event schema registry
 * DO NOT MODIFY - regenerate with: bun run scripts/generate-registry.ts
 */

import type {
  WebhookEvent,
  WebhookEventMap,
  WebhookEventName,
  WebhookEvents,
} from '@octokit/webhooks-types';
import { z } from 'zod';

import { BranchProtectionConfigurationDisabledEventSchema } from './schemas/branch-protection-configuration-disabled-event.js';
import { BranchProtectionConfigurationEnabledEventSchema } from './schemas/branch-protection-configuration-enabled-event.js';
import { BranchProtectionRuleCreatedEventSchema } from './schemas/branch-protection-rule-created-event.js';
import { BranchProtectionRuleDeletedEventSchema } from './schemas/branch-protection-rule-deleted-event.js';
import { BranchProtectionRuleEditedEventSchema } from './schemas/branch-protection-rule-edited-event.js';
import { CheckRunCompletedEventSchema } from './schemas/check-run-completed-event.js';
import { CheckRunCreatedEventSchema } from './schemas/check-run-created-event.js';
import { CheckRunRequestedActionEventSchema } from './schemas/check-run-requested-action-event.js';
import { CheckRunRerequestedEventSchema } from './schemas/check-run-rerequested-event.js';
import { CheckSuiteCompletedEventSchema } from './schemas/check-suite-completed-event.js';
import { CheckSuiteRequestedEventSchema } from './schemas/check-suite-requested-event.js';
import { CheckSuiteRerequestedEventSchema } from './schemas/check-suite-rerequested-event.js';
import { CodeScanningAlertAppearedInBranchEventSchema } from './schemas/code-scanning-alert-appeared-in-branch-event.js';
import { CodeScanningAlertClosedByUserEventSchema } from './schemas/code-scanning-alert-closed-by-user-event.js';
import { CodeScanningAlertCreatedEventSchema } from './schemas/code-scanning-alert-created-event.js';
import { CodeScanningAlertFixedEventSchema } from './schemas/code-scanning-alert-fixed-event.js';
import { CodeScanningAlertReopenedByUserEventSchema } from './schemas/code-scanning-alert-reopened-by-user-event.js';
import { CodeScanningAlertReopenedEventSchema } from './schemas/code-scanning-alert-reopened-event.js';
import { CommitCommentCreatedEventSchema } from './schemas/commit-comment-created-event.js';
import { CreateEventSchema } from './schemas/create-event.js';
import { CustomPropertyCreatedEventSchema } from './schemas/custom-property-created-event.js';
import { CustomPropertyDeletedEventSchema } from './schemas/custom-property-deleted-event.js';
import { CustomPropertyValuesUpdatedEventSchema } from './schemas/custom-property-values-updated-event.js';
import { DeleteEventSchema } from './schemas/delete-event.js';
import { DependabotAlertCreatedEventSchema } from './schemas/dependabot-alert-created-event.js';
import { DependabotAlertDismissedEventSchema } from './schemas/dependabot-alert-dismissed-event.js';
import { DependabotAlertFixedEventSchema } from './schemas/dependabot-alert-fixed-event.js';
import { DependabotAlertReintroducedEventSchema } from './schemas/dependabot-alert-reintroduced-event.js';
import { DependabotAlertReopenedEventSchema } from './schemas/dependabot-alert-reopened-event.js';
import { DeployKeyCreatedEventSchema } from './schemas/deploy-key-created-event.js';
import { DeployKeyDeletedEventSchema } from './schemas/deploy-key-deleted-event.js';
import { DeploymentCreatedEventSchema } from './schemas/deployment-created-event.js';
import { DeploymentProtectionRuleRequestedEventSchema } from './schemas/deployment-protection-rule-requested-event.js';
import { DeploymentReviewApprovedEventSchema } from './schemas/deployment-review-approved-event.js';
import { DeploymentReviewRejectedEventSchema } from './schemas/deployment-review-rejected-event.js';
import { DeploymentReviewRequestedEventSchema } from './schemas/deployment-review-requested-event.js';
import { DeploymentStatusCreatedEventSchema } from './schemas/deployment-status-created-event.js';
import { DiscussionAnsweredEventSchema } from './schemas/discussion-answered-event.js';
import { DiscussionCategoryChangedEventSchema } from './schemas/discussion-category-changed-event.js';
import { DiscussionCommentCreatedEventSchema } from './schemas/discussion-comment-created-event.js';
import { DiscussionCommentDeletedEventSchema } from './schemas/discussion-comment-deleted-event.js';
import { DiscussionCommentEditedEventSchema } from './schemas/discussion-comment-edited-event.js';
import { DiscussionCreatedEventSchema } from './schemas/discussion-created-event.js';
import { DiscussionDeletedEventSchema } from './schemas/discussion-deleted-event.js';
import { DiscussionEditedEventSchema } from './schemas/discussion-edited-event.js';
import { DiscussionLabeledEventSchema } from './schemas/discussion-labeled-event.js';
import { DiscussionLockedEventSchema } from './schemas/discussion-locked-event.js';
import { DiscussionPinnedEventSchema } from './schemas/discussion-pinned-event.js';
import { DiscussionTransferredEventSchema } from './schemas/discussion-transferred-event.js';
import { DiscussionUnansweredEventSchema } from './schemas/discussion-unanswered-event.js';
import { DiscussionUnlabeledEventSchema } from './schemas/discussion-unlabeled-event.js';
import { DiscussionUnlockedEventSchema } from './schemas/discussion-unlocked-event.js';
import { DiscussionUnpinnedEventSchema } from './schemas/discussion-unpinned-event.js';
import { ForkEventSchema } from './schemas/fork-event.js';
import { GithubAppAuthorizationRevokedEventSchema } from './schemas/github-app-authorization-revoked-event.js';
import { GollumEventSchema } from './schemas/gollum-event.js';
import { InstallationCreatedEventSchema } from './schemas/installation-created-event.js';
import { InstallationDeletedEventSchema } from './schemas/installation-deleted-event.js';
import { InstallationNewPermissionsAcceptedEventSchema } from './schemas/installation-new-permissions-accepted-event.js';
import { InstallationRepositoriesAddedEventSchema } from './schemas/installation-repositories-added-event.js';
import { InstallationRepositoriesRemovedEventSchema } from './schemas/installation-repositories-removed-event.js';
import { InstallationSuspendEventSchema } from './schemas/installation-suspend-event.js';
import { InstallationTargetRenamedEventSchema } from './schemas/installation-target-renamed-event.js';
import { InstallationUnsuspendEventSchema } from './schemas/installation-unsuspend-event.js';
import { IssueCommentCreatedEventSchema } from './schemas/issue-comment-created-event.js';
import { IssueCommentDeletedEventSchema } from './schemas/issue-comment-deleted-event.js';
import { IssueCommentEditedEventSchema } from './schemas/issue-comment-edited-event.js';
import { IssuesAssignedEventSchema } from './schemas/issues-assigned-event.js';
import { IssuesClosedEventSchema } from './schemas/issues-closed-event.js';
import { IssuesDeletedEventSchema } from './schemas/issues-deleted-event.js';
import { IssuesDemilestonedEventSchema } from './schemas/issues-demilestoned-event.js';
import { IssuesEditedEventSchema } from './schemas/issues-edited-event.js';
import { IssuesLabeledEventSchema } from './schemas/issues-labeled-event.js';
import { IssuesLockedEventSchema } from './schemas/issues-locked-event.js';
import { IssuesMilestonedEventSchema } from './schemas/issues-milestoned-event.js';
import { IssuesOpenedEventSchema } from './schemas/issues-opened-event.js';
import { IssuesPinnedEventSchema } from './schemas/issues-pinned-event.js';
import { IssuesReopenedEventSchema } from './schemas/issues-reopened-event.js';
import { IssuesTransferredEventSchema } from './schemas/issues-transferred-event.js';
import { IssuesUnassignedEventSchema } from './schemas/issues-unassigned-event.js';
import { IssuesUnlabeledEventSchema } from './schemas/issues-unlabeled-event.js';
import { IssuesUnlockedEventSchema } from './schemas/issues-unlocked-event.js';
import { IssuesUnpinnedEventSchema } from './schemas/issues-unpinned-event.js';
import { LabelCreatedEventSchema } from './schemas/label-created-event.js';
import { LabelDeletedEventSchema } from './schemas/label-deleted-event.js';
import { LabelEditedEventSchema } from './schemas/label-edited-event.js';
import { MarketplacePurchaseCancelledEventSchema } from './schemas/marketplace-purchase-cancelled-event.js';
import { MarketplacePurchaseChangedEventSchema } from './schemas/marketplace-purchase-changed-event.js';
import { MarketplacePurchasePendingChangeCancelledEventSchema } from './schemas/marketplace-purchase-pending-change-cancelled-event.js';
import { MarketplacePurchasePendingChangeEventSchema } from './schemas/marketplace-purchase-pending-change-event.js';
import { MarketplacePurchasePurchasedEventSchema } from './schemas/marketplace-purchase-purchased-event.js';
import { MemberAddedEventSchema } from './schemas/member-added-event.js';
import { MemberEditedEventSchema } from './schemas/member-edited-event.js';
import { MemberRemovedEventSchema } from './schemas/member-removed-event.js';
import { MembershipAddedEventSchema } from './schemas/membership-added-event.js';
import { MembershipRemovedEventSchema } from './schemas/membership-removed-event.js';
import { MergeGroupChecksRequestedEventSchema } from './schemas/merge-group-checks-requested-event.js';
import { MergeGroupDestroyedEventSchema } from './schemas/merge-group-destroyed-event.js';
import { MetaDeletedEventSchema } from './schemas/meta-deleted-event.js';
import { MilestoneClosedEventSchema } from './schemas/milestone-closed-event.js';
import { MilestoneCreatedEventSchema } from './schemas/milestone-created-event.js';
import { MilestoneDeletedEventSchema } from './schemas/milestone-deleted-event.js';
import { MilestoneEditedEventSchema } from './schemas/milestone-edited-event.js';
import { MilestoneOpenedEventSchema } from './schemas/milestone-opened-event.js';
import { OrgBlockBlockedEventSchema } from './schemas/org-block-blocked-event.js';
import { OrgBlockUnblockedEventSchema } from './schemas/org-block-unblocked-event.js';
import { OrganizationDeletedEventSchema } from './schemas/organization-deleted-event.js';
import { OrganizationMemberAddedEventSchema } from './schemas/organization-member-added-event.js';
import { OrganizationMemberInvitedEventSchema } from './schemas/organization-member-invited-event.js';
import { OrganizationMemberRemovedEventSchema } from './schemas/organization-member-removed-event.js';
import { OrganizationRenamedEventSchema } from './schemas/organization-renamed-event.js';
import { PackagePublishedEventSchema } from './schemas/package-published-event.js';
import { PackageUpdatedEventSchema } from './schemas/package-updated-event.js';
import { PageBuildEventSchema } from './schemas/page-build-event.js';
import { PingEventSchema } from './schemas/ping-event.js';
import { ProjectCardConvertedEventSchema } from './schemas/project-card-converted-event.js';
import { ProjectCardCreatedEventSchema } from './schemas/project-card-created-event.js';
import { ProjectCardDeletedEventSchema } from './schemas/project-card-deleted-event.js';
import { ProjectCardEditedEventSchema } from './schemas/project-card-edited-event.js';
import { ProjectCardMovedEventSchema } from './schemas/project-card-moved-event.js';
import { ProjectClosedEventSchema } from './schemas/project-closed-event.js';
import { ProjectColumnCreatedEventSchema } from './schemas/project-column-created-event.js';
import { ProjectColumnDeletedEventSchema } from './schemas/project-column-deleted-event.js';
import { ProjectColumnEditedEventSchema } from './schemas/project-column-edited-event.js';
import { ProjectColumnMovedEventSchema } from './schemas/project-column-moved-event.js';
import { ProjectCreatedEventSchema } from './schemas/project-created-event.js';
import { ProjectDeletedEventSchema } from './schemas/project-deleted-event.js';
import { ProjectEditedEventSchema } from './schemas/project-edited-event.js';
import { ProjectReopenedEventSchema } from './schemas/project-reopened-event.js';
import { ProjectsV2ItemArchivedEventSchema } from './schemas/projects-v2-item-archived-event.js';
import { ProjectsV2ItemConvertedEventSchema } from './schemas/projects-v2-item-converted-event.js';
import { ProjectsV2ItemCreatedEventSchema } from './schemas/projects-v2-item-created-event.js';
import { ProjectsV2ItemDeletedEventSchema } from './schemas/projects-v2-item-deleted-event.js';
import { ProjectsV2ItemEditedEventSchema } from './schemas/projects-v2-item-edited-event.js';
import { ProjectsV2ItemReorderedEventSchema } from './schemas/projects-v2-item-reordered-event.js';
import { ProjectsV2ItemRestoredEventSchema } from './schemas/projects-v2-item-restored-event.js';
import { PublicEventSchema } from './schemas/public-event.js';
import { PullRequestAssignedEventSchema } from './schemas/pull-request-assigned-event.js';
import { PullRequestAutoMergeDisabledEventSchema } from './schemas/pull-request-auto-merge-disabled-event.js';
import { PullRequestAutoMergeEnabledEventSchema } from './schemas/pull-request-auto-merge-enabled-event.js';
import { PullRequestClosedEventSchema } from './schemas/pull-request-closed-event.js';
import { PullRequestConvertedToDraftEventSchema } from './schemas/pull-request-converted-to-draft-event.js';
import { PullRequestDemilestonedEventSchema } from './schemas/pull-request-demilestoned-event.js';
import { PullRequestDequeuedEventSchema } from './schemas/pull-request-dequeued-event.js';
import { PullRequestEditedEventSchema } from './schemas/pull-request-edited-event.js';
import { PullRequestEnqueuedEventSchema } from './schemas/pull-request-enqueued-event.js';
import { PullRequestLabeledEventSchema } from './schemas/pull-request-labeled-event.js';
import { PullRequestLockedEventSchema } from './schemas/pull-request-locked-event.js';
import { PullRequestMilestonedEventSchema } from './schemas/pull-request-milestoned-event.js';
import { PullRequestOpenedEventSchema } from './schemas/pull-request-opened-event.js';
import { PullRequestReadyForReviewEventSchema } from './schemas/pull-request-ready-for-review-event.js';
import { PullRequestReopenedEventSchema } from './schemas/pull-request-reopened-event.js';
import { PullRequestReviewCommentCreatedEventSchema } from './schemas/pull-request-review-comment-created-event.js';
import { PullRequestReviewCommentDeletedEventSchema } from './schemas/pull-request-review-comment-deleted-event.js';
import { PullRequestReviewCommentEditedEventSchema } from './schemas/pull-request-review-comment-edited-event.js';
import { PullRequestReviewDismissedEventSchema } from './schemas/pull-request-review-dismissed-event.js';
import { PullRequestReviewEditedEventSchema } from './schemas/pull-request-review-edited-event.js';
import { PullRequestReviewSubmittedEventSchema } from './schemas/pull-request-review-submitted-event.js';
import { PullRequestReviewThreadResolvedEventSchema } from './schemas/pull-request-review-thread-resolved-event.js';
import { PullRequestReviewThreadUnresolvedEventSchema } from './schemas/pull-request-review-thread-unresolved-event.js';
import { PullRequestSynchronizeEventSchema } from './schemas/pull-request-synchronize-event.js';
import { PullRequestUnassignedEventSchema } from './schemas/pull-request-unassigned-event.js';
import { PullRequestUnlabeledEventSchema } from './schemas/pull-request-unlabeled-event.js';
import { PullRequestUnlockedEventSchema } from './schemas/pull-request-unlocked-event.js';
import { PushEventSchema } from './schemas/push-event.js';
import { RegistryPackagePublishedEventSchema } from './schemas/registry-package-published-event.js';
import { RegistryPackageUpdatedEventSchema } from './schemas/registry-package-updated-event.js';
import { ReleaseCreatedEventSchema } from './schemas/release-created-event.js';
import { ReleaseDeletedEventSchema } from './schemas/release-deleted-event.js';
import { ReleaseEditedEventSchema } from './schemas/release-edited-event.js';
import { ReleasePrereleasedEventSchema } from './schemas/release-prereleased-event.js';
import { ReleasePublishedEventSchema } from './schemas/release-published-event.js';
import { ReleaseReleasedEventSchema } from './schemas/release-released-event.js';
import { ReleaseUnpublishedEventSchema } from './schemas/release-unpublished-event.js';
import { RepositoryArchivedEventSchema } from './schemas/repository-archived-event.js';
import { RepositoryCreatedEventSchema } from './schemas/repository-created-event.js';
import { RepositoryDeletedEventSchema } from './schemas/repository-deleted-event.js';
import { RepositoryDispatchEventSchema } from './schemas/repository-dispatch-event.js';
import { RepositoryEditedEventSchema } from './schemas/repository-edited-event.js';
import { RepositoryImportEventSchema } from './schemas/repository-import-event.js';
import { RepositoryPrivatizedEventSchema } from './schemas/repository-privatized-event.js';
import { RepositoryPublicizedEventSchema } from './schemas/repository-publicized-event.js';
import { RepositoryRenamedEventSchema } from './schemas/repository-renamed-event.js';
import { RepositoryTransferredEventSchema } from './schemas/repository-transferred-event.js';
import { RepositoryUnarchivedEventSchema } from './schemas/repository-unarchived-event.js';
import { RepositoryVulnerabilityAlertCreateEventSchema } from './schemas/repository-vulnerability-alert-create-event.js';
import { RepositoryVulnerabilityAlertDismissEventSchema } from './schemas/repository-vulnerability-alert-dismiss-event.js';
import { RepositoryVulnerabilityAlertReopenEventSchema } from './schemas/repository-vulnerability-alert-reopen-event.js';
import { RepositoryVulnerabilityAlertResolveEventSchema } from './schemas/repository-vulnerability-alert-resolve-event.js';
import { SecretScanningAlertCreatedEventSchema } from './schemas/secret-scanning-alert-created-event.js';
import { SecretScanningAlertLocationCreatedEventSchema } from './schemas/secret-scanning-alert-location-created-event.js';
import { SecretScanningAlertReopenedEventSchema } from './schemas/secret-scanning-alert-reopened-event.js';
import { SecretScanningAlertResolvedEventSchema } from './schemas/secret-scanning-alert-resolved-event.js';
import { SecretScanningAlertRevokedEventSchema } from './schemas/secret-scanning-alert-revoked-event.js';
import { SecurityAdvisoryPerformedEventSchema } from './schemas/security-advisory-performed-event.js';
import { SecurityAdvisoryPublishedEventSchema } from './schemas/security-advisory-published-event.js';
import { SecurityAdvisoryUpdatedEventSchema } from './schemas/security-advisory-updated-event.js';
import { SecurityAdvisoryWithdrawnEventSchema } from './schemas/security-advisory-withdrawn-event.js';
import { SponsorshipCancelledEventSchema } from './schemas/sponsorship-cancelled-event.js';
import { SponsorshipCreatedEventSchema } from './schemas/sponsorship-created-event.js';
import { SponsorshipEditedEventSchema } from './schemas/sponsorship-edited-event.js';
import { SponsorshipPendingCancellationEventSchema } from './schemas/sponsorship-pending-cancellation-event.js';
import { SponsorshipPendingTierChangeEventSchema } from './schemas/sponsorship-pending-tier-change-event.js';
import { SponsorshipTierChangedEventSchema } from './schemas/sponsorship-tier-changed-event.js';
import { StarCreatedEventSchema } from './schemas/star-created-event.js';
import { StarDeletedEventSchema } from './schemas/star-deleted-event.js';
import { StatusEventSchema } from './schemas/status-event.js';
import { TeamAddEventSchema } from './schemas/team-add-event.js';
import { TeamAddedToRepositoryEventSchema } from './schemas/team-added-to-repository-event.js';
import { TeamCreatedEventSchema } from './schemas/team-created-event.js';
import { TeamDeletedEventSchema } from './schemas/team-deleted-event.js';
import { TeamEditedEventSchema } from './schemas/team-edited-event.js';
import { TeamRemovedFromRepositoryEventSchema } from './schemas/team-removed-from-repository-event.js';
import { WatchStartedEventSchema } from './schemas/watch-started-event.js';
import { WorkflowDispatchEventSchema } from './schemas/workflow-dispatch-event.js';
import { WorkflowJobCompletedEventSchema } from './schemas/workflow-job-completed-event.js';
import { WorkflowJobInProgressEventSchema } from './schemas/workflow-job-in-progress-event.js';
import { WorkflowJobQueuedEventSchema } from './schemas/workflow-job-queued-event.js';
import { WorkflowJobWaitingEventSchema } from './schemas/workflow-job-waiting-event.js';
import { WorkflowRunCompletedEventSchema } from './schemas/workflow-run-completed-event.js';
import { WorkflowRunInProgressEventSchema } from './schemas/workflow-run-in-progress-event.js';
import { WorkflowRunRequestedEventSchema } from './schemas/workflow-run-requested-event.js';

export type { WebhookEvent, WebhookEventMap, WebhookEventName, WebhookEvents };

interface WebhookRouteKeyEventMap {
  branchProtectionConfiguration: WebhookEventMap['branch_protection_configuration'];
  branchProtectionConfigurationDisabled: Extract<
    WebhookEventMap['branch_protection_configuration'],
    { action: 'disabled' }
  >;
  branchProtectionConfigurationEnabled: Extract<
    WebhookEventMap['branch_protection_configuration'],
    { action: 'enabled' }
  >;
  branchProtectionRule: WebhookEventMap['branch_protection_rule'];
  branchProtectionRuleCreated: Extract<
    WebhookEventMap['branch_protection_rule'],
    { action: 'created' }
  >;
  branchProtectionRuleDeleted: Extract<
    WebhookEventMap['branch_protection_rule'],
    { action: 'deleted' }
  >;
  branchProtectionRuleEdited: Extract<
    WebhookEventMap['branch_protection_rule'],
    { action: 'edited' }
  >;
  checkRun: WebhookEventMap['check_run'];
  checkRunCompleted: Extract<WebhookEventMap['check_run'], { action: 'completed' }>;
  checkRunCreated: Extract<WebhookEventMap['check_run'], { action: 'created' }>;
  checkRunRequestedAction: Extract<
    WebhookEventMap['check_run'],
    { action: 'requested_action' }
  >;
  checkRunRerequested: Extract<WebhookEventMap['check_run'], { action: 'rerequested' }>;
  checkSuite: WebhookEventMap['check_suite'];
  checkSuiteCompleted: Extract<WebhookEventMap['check_suite'], { action: 'completed' }>;
  checkSuiteRequested: Extract<WebhookEventMap['check_suite'], { action: 'requested' }>;
  checkSuiteRerequested: Extract<
    WebhookEventMap['check_suite'],
    { action: 'rerequested' }
  >;
  codeScanningAlert: WebhookEventMap['code_scanning_alert'];
  codeScanningAlertAppearedInBranch: Extract<
    WebhookEventMap['code_scanning_alert'],
    { action: 'appeared_in_branch' }
  >;
  codeScanningAlertClosedByUser: Extract<
    WebhookEventMap['code_scanning_alert'],
    { action: 'closed_by_user' }
  >;
  codeScanningAlertCreated: Extract<
    WebhookEventMap['code_scanning_alert'],
    { action: 'created' }
  >;
  codeScanningAlertFixed: Extract<
    WebhookEventMap['code_scanning_alert'],
    { action: 'fixed' }
  >;
  codeScanningAlertReopened: Extract<
    WebhookEventMap['code_scanning_alert'],
    { action: 'reopened' }
  >;
  codeScanningAlertReopenedByUser: Extract<
    WebhookEventMap['code_scanning_alert'],
    { action: 'reopened_by_user' }
  >;
  commitComment: WebhookEventMap['commit_comment'];
  commitCommentCreated: Extract<WebhookEventMap['commit_comment'], { action: 'created' }>;
  create: WebhookEventMap['create'];
  customProperty: WebhookEventMap['custom_property'];
  customPropertyCreated: Extract<
    WebhookEventMap['custom_property'],
    { action: 'created' }
  >;
  customPropertyDeleted: Extract<
    WebhookEventMap['custom_property'],
    { action: 'deleted' }
  >;
  customPropertyPromoteToEnterprise: Extract<
    WebhookEventMap['custom_property'],
    { action: 'promote_to_enterprise' }
  >;
  customPropertyUpdated: Extract<
    WebhookEventMap['custom_property'],
    { action: 'updated' }
  >;
  customPropertyValues: WebhookEventMap['custom_property_values'];
  customPropertyValuesUpdated: Extract<
    WebhookEventMap['custom_property_values'],
    { action: 'updated' }
  >;
  delete: WebhookEventMap['delete'];
  dependabotAlert: WebhookEventMap['dependabot_alert'];
  dependabotAlertAutoDismissed: Extract<
    WebhookEventMap['dependabot_alert'],
    { action: 'auto_dismissed' }
  >;
  dependabotAlertAutoReopened: Extract<
    WebhookEventMap['dependabot_alert'],
    { action: 'auto_reopened' }
  >;
  dependabotAlertCreated: Extract<
    WebhookEventMap['dependabot_alert'],
    { action: 'created' }
  >;
  dependabotAlertDismissed: Extract<
    WebhookEventMap['dependabot_alert'],
    { action: 'dismissed' }
  >;
  dependabotAlertFixed: Extract<WebhookEventMap['dependabot_alert'], { action: 'fixed' }>;
  dependabotAlertReintroduced: Extract<
    WebhookEventMap['dependabot_alert'],
    { action: 'reintroduced' }
  >;
  dependabotAlertReopened: Extract<
    WebhookEventMap['dependabot_alert'],
    { action: 'reopened' }
  >;
  deployKey: WebhookEventMap['deploy_key'];
  deployKeyCreated: Extract<WebhookEventMap['deploy_key'], { action: 'created' }>;
  deployKeyDeleted: Extract<WebhookEventMap['deploy_key'], { action: 'deleted' }>;
  deployment: WebhookEventMap['deployment'];
  deploymentCreated: Extract<WebhookEventMap['deployment'], { action: 'created' }>;
  deploymentProtectionRule: WebhookEventMap['deployment_protection_rule'];
  deploymentProtectionRuleRequested: Extract<
    WebhookEventMap['deployment_protection_rule'],
    { action: 'requested' }
  >;
  deploymentReview: WebhookEventMap['deployment_review'];
  deploymentReviewApproved: Extract<
    WebhookEventMap['deployment_review'],
    { action: 'approved' }
  >;
  deploymentReviewRejected: Extract<
    WebhookEventMap['deployment_review'],
    { action: 'rejected' }
  >;
  deploymentReviewRequested: Extract<
    WebhookEventMap['deployment_review'],
    { action: 'requested' }
  >;
  deploymentStatus: WebhookEventMap['deployment_status'];
  deploymentStatusCreated: Extract<
    WebhookEventMap['deployment_status'],
    { action: 'created' }
  >;
  discussion: WebhookEventMap['discussion'];
  discussionAnswered: Extract<WebhookEventMap['discussion'], { action: 'answered' }>;
  discussionCategoryChanged: Extract<
    WebhookEventMap['discussion'],
    { action: 'category_changed' }
  >;
  discussionClosed: Extract<WebhookEventMap['discussion'], { action: 'closed' }>;
  discussionCreated: Extract<WebhookEventMap['discussion'], { action: 'created' }>;
  discussionDeleted: Extract<WebhookEventMap['discussion'], { action: 'deleted' }>;
  discussionEdited: Extract<WebhookEventMap['discussion'], { action: 'edited' }>;
  discussionLabeled: Extract<WebhookEventMap['discussion'], { action: 'labeled' }>;
  discussionLocked: Extract<WebhookEventMap['discussion'], { action: 'locked' }>;
  discussionPinned: Extract<WebhookEventMap['discussion'], { action: 'pinned' }>;
  discussionReopened: Extract<WebhookEventMap['discussion'], { action: 'reopened' }>;
  discussionTransferred: Extract<
    WebhookEventMap['discussion'],
    { action: 'transferred' }
  >;
  discussionUnanswered: Extract<WebhookEventMap['discussion'], { action: 'unanswered' }>;
  discussionUnlabeled: Extract<WebhookEventMap['discussion'], { action: 'unlabeled' }>;
  discussionUnlocked: Extract<WebhookEventMap['discussion'], { action: 'unlocked' }>;
  discussionUnpinned: Extract<WebhookEventMap['discussion'], { action: 'unpinned' }>;
  discussionComment: WebhookEventMap['discussion_comment'];
  discussionCommentCreated: Extract<
    WebhookEventMap['discussion_comment'],
    { action: 'created' }
  >;
  discussionCommentDeleted: Extract<
    WebhookEventMap['discussion_comment'],
    { action: 'deleted' }
  >;
  discussionCommentEdited: Extract<
    WebhookEventMap['discussion_comment'],
    { action: 'edited' }
  >;
  fork: WebhookEventMap['fork'];
  githubAppAuthorization: WebhookEventMap['github_app_authorization'];
  githubAppAuthorizationRevoked: Extract<
    WebhookEventMap['github_app_authorization'],
    { action: 'revoked' }
  >;
  gollum: WebhookEventMap['gollum'];
  installation: WebhookEventMap['installation'];
  installationCreated: Extract<WebhookEventMap['installation'], { action: 'created' }>;
  installationDeleted: Extract<WebhookEventMap['installation'], { action: 'deleted' }>;
  installationNewPermissionsAccepted: Extract<
    WebhookEventMap['installation'],
    { action: 'new_permissions_accepted' }
  >;
  installationSuspend: Extract<WebhookEventMap['installation'], { action: 'suspend' }>;
  installationUnsuspend: Extract<
    WebhookEventMap['installation'],
    { action: 'unsuspend' }
  >;
  installationRepositories: WebhookEventMap['installation_repositories'];
  installationRepositoriesAdded: Extract<
    WebhookEventMap['installation_repositories'],
    { action: 'added' }
  >;
  installationRepositoriesRemoved: Extract<
    WebhookEventMap['installation_repositories'],
    { action: 'removed' }
  >;
  installationTarget: WebhookEventMap['installation_target'];
  installationTargetRenamed: Extract<
    WebhookEventMap['installation_target'],
    { action: 'renamed' }
  >;
  issueComment: WebhookEventMap['issue_comment'];
  issueCommentCreated: Extract<WebhookEventMap['issue_comment'], { action: 'created' }>;
  issueCommentDeleted: Extract<WebhookEventMap['issue_comment'], { action: 'deleted' }>;
  issueCommentEdited: Extract<WebhookEventMap['issue_comment'], { action: 'edited' }>;
  issues: WebhookEventMap['issues'];
  issuesAssigned: Extract<WebhookEventMap['issues'], { action: 'assigned' }>;
  issuesClosed: Extract<WebhookEventMap['issues'], { action: 'closed' }>;
  issuesDeleted: Extract<WebhookEventMap['issues'], { action: 'deleted' }>;
  issuesDemilestoned: Extract<WebhookEventMap['issues'], { action: 'demilestoned' }>;
  issuesEdited: Extract<WebhookEventMap['issues'], { action: 'edited' }>;
  issuesLabeled: Extract<WebhookEventMap['issues'], { action: 'labeled' }>;
  issuesLocked: Extract<WebhookEventMap['issues'], { action: 'locked' }>;
  issuesMilestoned: Extract<WebhookEventMap['issues'], { action: 'milestoned' }>;
  issuesOpened: Extract<WebhookEventMap['issues'], { action: 'opened' }>;
  issuesPinned: Extract<WebhookEventMap['issues'], { action: 'pinned' }>;
  issuesReopened: Extract<WebhookEventMap['issues'], { action: 'reopened' }>;
  issuesTransferred: Extract<WebhookEventMap['issues'], { action: 'transferred' }>;
  issuesTyped: Extract<WebhookEventMap['issues'], { action: 'typed' }>;
  issuesUnassigned: Extract<WebhookEventMap['issues'], { action: 'unassigned' }>;
  issuesUnlabeled: Extract<WebhookEventMap['issues'], { action: 'unlabeled' }>;
  issuesUnlocked: Extract<WebhookEventMap['issues'], { action: 'unlocked' }>;
  issuesUnpinned: Extract<WebhookEventMap['issues'], { action: 'unpinned' }>;
  issuesUntyped: Extract<WebhookEventMap['issues'], { action: 'untyped' }>;
  label: WebhookEventMap['label'];
  labelCreated: Extract<WebhookEventMap['label'], { action: 'created' }>;
  labelDeleted: Extract<WebhookEventMap['label'], { action: 'deleted' }>;
  labelEdited: Extract<WebhookEventMap['label'], { action: 'edited' }>;
  marketplacePurchase: WebhookEventMap['marketplace_purchase'];
  marketplacePurchaseCancelled: Extract<
    WebhookEventMap['marketplace_purchase'],
    { action: 'cancelled' }
  >;
  marketplacePurchaseChanged: Extract<
    WebhookEventMap['marketplace_purchase'],
    { action: 'changed' }
  >;
  marketplacePurchasePendingChange: Extract<
    WebhookEventMap['marketplace_purchase'],
    { action: 'pending_change' }
  >;
  marketplacePurchasePendingChangeCancelled: Extract<
    WebhookEventMap['marketplace_purchase'],
    { action: 'pending_change_cancelled' }
  >;
  marketplacePurchasePurchased: Extract<
    WebhookEventMap['marketplace_purchase'],
    { action: 'purchased' }
  >;
  member: WebhookEventMap['member'];
  memberAdded: Extract<WebhookEventMap['member'], { action: 'added' }>;
  memberEdited: Extract<WebhookEventMap['member'], { action: 'edited' }>;
  memberRemoved: Extract<WebhookEventMap['member'], { action: 'removed' }>;
  membership: WebhookEventMap['membership'];
  membershipAdded: Extract<WebhookEventMap['membership'], { action: 'added' }>;
  membershipRemoved: Extract<WebhookEventMap['membership'], { action: 'removed' }>;
  mergeGroup: WebhookEventMap['merge_group'];
  mergeGroupChecksRequested: Extract<
    WebhookEventMap['merge_group'],
    { action: 'checks_requested' }
  >;
  mergeGroupDestroyed: Extract<WebhookEventMap['merge_group'], { action: 'destroyed' }>;
  meta: WebhookEventMap['meta'];
  metaDeleted: Extract<WebhookEventMap['meta'], { action: 'deleted' }>;
  milestone: WebhookEventMap['milestone'];
  milestoneClosed: Extract<WebhookEventMap['milestone'], { action: 'closed' }>;
  milestoneCreated: Extract<WebhookEventMap['milestone'], { action: 'created' }>;
  milestoneDeleted: Extract<WebhookEventMap['milestone'], { action: 'deleted' }>;
  milestoneEdited: Extract<WebhookEventMap['milestone'], { action: 'edited' }>;
  milestoneOpened: Extract<WebhookEventMap['milestone'], { action: 'opened' }>;
  orgBlock: WebhookEventMap['org_block'];
  orgBlockBlocked: Extract<WebhookEventMap['org_block'], { action: 'blocked' }>;
  orgBlockUnblocked: Extract<WebhookEventMap['org_block'], { action: 'unblocked' }>;
  organization: WebhookEventMap['organization'];
  organizationDeleted: Extract<WebhookEventMap['organization'], { action: 'deleted' }>;
  organizationMemberAdded: Extract<
    WebhookEventMap['organization'],
    { action: 'member_added' }
  >;
  organizationMemberInvited: Extract<
    WebhookEventMap['organization'],
    { action: 'member_invited' }
  >;
  organizationMemberRemoved: Extract<
    WebhookEventMap['organization'],
    { action: 'member_removed' }
  >;
  organizationRenamed: Extract<WebhookEventMap['organization'], { action: 'renamed' }>;
  package: WebhookEventMap['package'];
  packagePublished: Extract<WebhookEventMap['package'], { action: 'published' }>;
  packageUpdated: Extract<WebhookEventMap['package'], { action: 'updated' }>;
  pageBuild: WebhookEventMap['page_build'];
  ping: WebhookEventMap['ping'];
  project: WebhookEventMap['project'];
  projectClosed: Extract<WebhookEventMap['project'], { action: 'closed' }>;
  projectCreated: Extract<WebhookEventMap['project'], { action: 'created' }>;
  projectDeleted: Extract<WebhookEventMap['project'], { action: 'deleted' }>;
  projectEdited: Extract<WebhookEventMap['project'], { action: 'edited' }>;
  projectReopened: Extract<WebhookEventMap['project'], { action: 'reopened' }>;
  projectCard: WebhookEventMap['project_card'];
  projectCardConverted: Extract<WebhookEventMap['project_card'], { action: 'converted' }>;
  projectCardCreated: Extract<WebhookEventMap['project_card'], { action: 'created' }>;
  projectCardDeleted: Extract<WebhookEventMap['project_card'], { action: 'deleted' }>;
  projectCardEdited: Extract<WebhookEventMap['project_card'], { action: 'edited' }>;
  projectCardMoved: Extract<WebhookEventMap['project_card'], { action: 'moved' }>;
  projectColumn: WebhookEventMap['project_column'];
  projectColumnCreated: Extract<WebhookEventMap['project_column'], { action: 'created' }>;
  projectColumnDeleted: Extract<WebhookEventMap['project_column'], { action: 'deleted' }>;
  projectColumnEdited: Extract<WebhookEventMap['project_column'], { action: 'edited' }>;
  projectColumnMoved: Extract<WebhookEventMap['project_column'], { action: 'moved' }>;
  projectsV2Item: WebhookEventMap['projects_v2_item'];
  projectsV2ItemArchived: Extract<
    WebhookEventMap['projects_v2_item'],
    { action: 'archived' }
  >;
  projectsV2ItemConverted: Extract<
    WebhookEventMap['projects_v2_item'],
    { action: 'converted' }
  >;
  projectsV2ItemCreated: Extract<
    WebhookEventMap['projects_v2_item'],
    { action: 'created' }
  >;
  projectsV2ItemDeleted: Extract<
    WebhookEventMap['projects_v2_item'],
    { action: 'deleted' }
  >;
  projectsV2ItemEdited: Extract<
    WebhookEventMap['projects_v2_item'],
    { action: 'edited' }
  >;
  projectsV2ItemReordered: Extract<
    WebhookEventMap['projects_v2_item'],
    { action: 'reordered' }
  >;
  projectsV2ItemRestored: Extract<
    WebhookEventMap['projects_v2_item'],
    { action: 'restored' }
  >;
  public: WebhookEventMap['public'];
  pullRequest: WebhookEventMap['pull_request'];
  pullRequestAssigned: Extract<WebhookEventMap['pull_request'], { action: 'assigned' }>;
  pullRequestAutoMergeDisabled: Extract<
    WebhookEventMap['pull_request'],
    { action: 'auto_merge_disabled' }
  >;
  pullRequestAutoMergeEnabled: Extract<
    WebhookEventMap['pull_request'],
    { action: 'auto_merge_enabled' }
  >;
  pullRequestClosed: Extract<WebhookEventMap['pull_request'], { action: 'closed' }>;
  pullRequestConvertedToDraft: Extract<
    WebhookEventMap['pull_request'],
    { action: 'converted_to_draft' }
  >;
  pullRequestDemilestoned: Extract<
    WebhookEventMap['pull_request'],
    { action: 'demilestoned' }
  >;
  pullRequestDequeued: Extract<WebhookEventMap['pull_request'], { action: 'dequeued' }>;
  pullRequestEdited: Extract<WebhookEventMap['pull_request'], { action: 'edited' }>;
  pullRequestEnqueued: Extract<WebhookEventMap['pull_request'], { action: 'enqueued' }>;
  pullRequestLabeled: Extract<WebhookEventMap['pull_request'], { action: 'labeled' }>;
  pullRequestLocked: Extract<WebhookEventMap['pull_request'], { action: 'locked' }>;
  pullRequestMilestoned: Extract<
    WebhookEventMap['pull_request'],
    { action: 'milestoned' }
  >;
  pullRequestOpened: Extract<WebhookEventMap['pull_request'], { action: 'opened' }>;
  pullRequestReadyForReview: Extract<
    WebhookEventMap['pull_request'],
    { action: 'ready_for_review' }
  >;
  pullRequestReopened: Extract<WebhookEventMap['pull_request'], { action: 'reopened' }>;
  pullRequestReviewRequestRemoved: Extract<
    WebhookEventMap['pull_request'],
    { action: 'review_request_removed' }
  >;
  pullRequestReviewRequested: Extract<
    WebhookEventMap['pull_request'],
    { action: 'review_requested' }
  >;
  pullRequestSynchronize: Extract<
    WebhookEventMap['pull_request'],
    { action: 'synchronize' }
  >;
  pullRequestUnassigned: Extract<
    WebhookEventMap['pull_request'],
    { action: 'unassigned' }
  >;
  pullRequestUnlabeled: Extract<WebhookEventMap['pull_request'], { action: 'unlabeled' }>;
  pullRequestUnlocked: Extract<WebhookEventMap['pull_request'], { action: 'unlocked' }>;
  pullRequestReview: WebhookEventMap['pull_request_review'];
  pullRequestReviewDismissed: Extract<
    WebhookEventMap['pull_request_review'],
    { action: 'dismissed' }
  >;
  pullRequestReviewEdited: Extract<
    WebhookEventMap['pull_request_review'],
    { action: 'edited' }
  >;
  pullRequestReviewSubmitted: Extract<
    WebhookEventMap['pull_request_review'],
    { action: 'submitted' }
  >;
  pullRequestReviewComment: WebhookEventMap['pull_request_review_comment'];
  pullRequestReviewCommentCreated: Extract<
    WebhookEventMap['pull_request_review_comment'],
    { action: 'created' }
  >;
  pullRequestReviewCommentDeleted: Extract<
    WebhookEventMap['pull_request_review_comment'],
    { action: 'deleted' }
  >;
  pullRequestReviewCommentEdited: Extract<
    WebhookEventMap['pull_request_review_comment'],
    { action: 'edited' }
  >;
  pullRequestReviewThread: WebhookEventMap['pull_request_review_thread'];
  pullRequestReviewThreadResolved: Extract<
    WebhookEventMap['pull_request_review_thread'],
    { action: 'resolved' }
  >;
  pullRequestReviewThreadUnresolved: Extract<
    WebhookEventMap['pull_request_review_thread'],
    { action: 'unresolved' }
  >;
  push: WebhookEventMap['push'];
  registryPackage: WebhookEventMap['registry_package'];
  registryPackagePublished: Extract<
    WebhookEventMap['registry_package'],
    { action: 'published' }
  >;
  registryPackageUpdated: Extract<
    WebhookEventMap['registry_package'],
    { action: 'updated' }
  >;
  release: WebhookEventMap['release'];
  releaseCreated: Extract<WebhookEventMap['release'], { action: 'created' }>;
  releaseDeleted: Extract<WebhookEventMap['release'], { action: 'deleted' }>;
  releaseEdited: Extract<WebhookEventMap['release'], { action: 'edited' }>;
  releasePrereleased: Extract<WebhookEventMap['release'], { action: 'prereleased' }>;
  releasePublished: Extract<WebhookEventMap['release'], { action: 'published' }>;
  releaseReleased: Extract<WebhookEventMap['release'], { action: 'released' }>;
  releaseUnpublished: Extract<WebhookEventMap['release'], { action: 'unpublished' }>;
  repository: WebhookEventMap['repository'];
  repositoryArchived: Extract<WebhookEventMap['repository'], { action: 'archived' }>;
  repositoryCreated: Extract<WebhookEventMap['repository'], { action: 'created' }>;
  repositoryDeleted: Extract<WebhookEventMap['repository'], { action: 'deleted' }>;
  repositoryEdited: Extract<WebhookEventMap['repository'], { action: 'edited' }>;
  repositoryPrivatized: Extract<WebhookEventMap['repository'], { action: 'privatized' }>;
  repositoryPublicized: Extract<WebhookEventMap['repository'], { action: 'publicized' }>;
  repositoryRenamed: Extract<WebhookEventMap['repository'], { action: 'renamed' }>;
  repositoryTransferred: Extract<
    WebhookEventMap['repository'],
    { action: 'transferred' }
  >;
  repositoryUnarchived: Extract<WebhookEventMap['repository'], { action: 'unarchived' }>;
  repositoryDispatch: WebhookEventMap['repository_dispatch'];
  repositoryDispatchSampleCollected: Extract<
    WebhookEventMap['repository_dispatch'],
    { action: 'sample.collected' }
  >;
  repositoryImport: WebhookEventMap['repository_import'];
  repositoryVulnerabilityAlert: WebhookEventMap['repository_vulnerability_alert'];
  repositoryVulnerabilityAlertCreate: Extract<
    WebhookEventMap['repository_vulnerability_alert'],
    { action: 'create' }
  >;
  repositoryVulnerabilityAlertDismiss: Extract<
    WebhookEventMap['repository_vulnerability_alert'],
    { action: 'dismiss' }
  >;
  repositoryVulnerabilityAlertReopen: Extract<
    WebhookEventMap['repository_vulnerability_alert'],
    { action: 'reopen' }
  >;
  repositoryVulnerabilityAlertResolve: Extract<
    WebhookEventMap['repository_vulnerability_alert'],
    { action: 'resolve' }
  >;
  secretScanningAlert: WebhookEventMap['secret_scanning_alert'];
  secretScanningAlertAssigned: Extract<
    WebhookEventMap['secret_scanning_alert'],
    { action: 'assigned' }
  >;
  secretScanningAlertCreated: Extract<
    WebhookEventMap['secret_scanning_alert'],
    { action: 'created' }
  >;
  secretScanningAlertPubliclyLeaked: Extract<
    WebhookEventMap['secret_scanning_alert'],
    { action: 'publicly_leaked' }
  >;
  secretScanningAlertReopened: Extract<
    WebhookEventMap['secret_scanning_alert'],
    { action: 'reopened' }
  >;
  secretScanningAlertResolved: Extract<
    WebhookEventMap['secret_scanning_alert'],
    { action: 'resolved' }
  >;
  secretScanningAlertUnassigned: Extract<
    WebhookEventMap['secret_scanning_alert'],
    { action: 'unassigned' }
  >;
  secretScanningAlertValidated: Extract<
    WebhookEventMap['secret_scanning_alert'],
    { action: 'validated' }
  >;
  secretScanningAlertLocation: WebhookEventMap['secret_scanning_alert_location'];
  secretScanningAlertLocationCreated: Extract<
    WebhookEventMap['secret_scanning_alert_location'],
    { action: 'created' }
  >;
  securityAdvisory: WebhookEventMap['security_advisory'];
  securityAdvisoryPublished: Extract<
    WebhookEventMap['security_advisory'],
    { action: 'published' }
  >;
  securityAdvisoryUpdated: Extract<
    WebhookEventMap['security_advisory'],
    { action: 'updated' }
  >;
  securityAdvisoryWithdrawn: Extract<
    WebhookEventMap['security_advisory'],
    { action: 'withdrawn' }
  >;
  sponsorship: WebhookEventMap['sponsorship'];
  sponsorshipCancelled: Extract<WebhookEventMap['sponsorship'], { action: 'cancelled' }>;
  sponsorshipCreated: Extract<WebhookEventMap['sponsorship'], { action: 'created' }>;
  sponsorshipEdited: Extract<WebhookEventMap['sponsorship'], { action: 'edited' }>;
  sponsorshipPendingCancellation: Extract<
    WebhookEventMap['sponsorship'],
    { action: 'pending_cancellation' }
  >;
  sponsorshipPendingTierChange: Extract<
    WebhookEventMap['sponsorship'],
    { action: 'pending_tier_change' }
  >;
  sponsorshipTierChanged: Extract<
    WebhookEventMap['sponsorship'],
    { action: 'tier_changed' }
  >;
  star: WebhookEventMap['star'];
  starCreated: Extract<WebhookEventMap['star'], { action: 'created' }>;
  starDeleted: Extract<WebhookEventMap['star'], { action: 'deleted' }>;
  status: WebhookEventMap['status'];
  team: WebhookEventMap['team'];
  teamAddedToRepository: Extract<
    WebhookEventMap['team'],
    { action: 'added_to_repository' }
  >;
  teamCreated: Extract<WebhookEventMap['team'], { action: 'created' }>;
  teamDeleted: Extract<WebhookEventMap['team'], { action: 'deleted' }>;
  teamEdited: Extract<WebhookEventMap['team'], { action: 'edited' }>;
  teamRemovedFromRepository: Extract<
    WebhookEventMap['team'],
    { action: 'removed_from_repository' }
  >;
  teamAdd: WebhookEventMap['team_add'];
  watch: WebhookEventMap['watch'];
  watchStarted: Extract<WebhookEventMap['watch'], { action: 'started' }>;
  workflowDispatch: WebhookEventMap['workflow_dispatch'];
  workflowJob: WebhookEventMap['workflow_job'];
  workflowJobCompleted: Extract<WebhookEventMap['workflow_job'], { action: 'completed' }>;
  workflowJobInProgress: Extract<
    WebhookEventMap['workflow_job'],
    { action: 'in_progress' }
  >;
  workflowJobQueued: Extract<WebhookEventMap['workflow_job'], { action: 'queued' }>;
  workflowJobWaiting: Extract<WebhookEventMap['workflow_job'], { action: 'waiting' }>;
  workflowRun: WebhookEventMap['workflow_run'];
  workflowRunCompleted: Extract<WebhookEventMap['workflow_run'], { action: 'completed' }>;
  workflowRunInProgress: Extract<
    WebhookEventMap['workflow_run'],
    { action: 'in_progress' }
  >;
  workflowRunRequested: Extract<WebhookEventMap['workflow_run'], { action: 'requested' }>;
}

export type WebhookRouteKey = keyof WebhookRouteKeyEventMap;

export type WebhookRouteEvent<K extends WebhookRouteKey> = WebhookRouteKeyEventMap[K];

export type WebhookHandler<K extends WebhookRouteKey> = (
  event: WebhookRouteEvent<K>,
) => void | Promise<void>;

export type WebhookErrorHandler = (error: unknown) => void;

export interface WebhookRouter {
  on<K extends WebhookRouteKey>(event: K, handler: WebhookHandler<K>): this;
  on(event: 'error', handler: WebhookErrorHandler): this;
  off<K extends WebhookRouteKey>(event: K, handler: WebhookHandler<K>): this;
  off(event: 'error', handler: WebhookErrorHandler): this;
  removeAllListeners(event?: string): this;
  receive(payload: unknown): void;
}

const schemaRegistry = new Map<WebhookEventName, z.ZodTypeAny>([
  [
    'branch_protection_configuration',
    z.union([
      BranchProtectionConfigurationDisabledEventSchema,
      BranchProtectionConfigurationEnabledEventSchema,
    ]),
  ],
  [
    'branch_protection_rule',
    z.union([
      BranchProtectionRuleCreatedEventSchema,
      BranchProtectionRuleDeletedEventSchema,
      BranchProtectionRuleEditedEventSchema,
    ]),
  ],
  [
    'check_run',
    z.union([
      CheckRunCompletedEventSchema,
      CheckRunCreatedEventSchema,
      CheckRunRequestedActionEventSchema,
      CheckRunRerequestedEventSchema,
    ]),
  ],
  [
    'check_suite',
    z.union([
      CheckSuiteCompletedEventSchema,
      CheckSuiteRequestedEventSchema,
      CheckSuiteRerequestedEventSchema,
    ]),
  ],
  [
    'code_scanning_alert',
    z.union([
      CodeScanningAlertAppearedInBranchEventSchema,
      CodeScanningAlertClosedByUserEventSchema,
      CodeScanningAlertCreatedEventSchema,
      CodeScanningAlertFixedEventSchema,
      CodeScanningAlertReopenedByUserEventSchema,
      CodeScanningAlertReopenedEventSchema,
    ]),
  ],
  ['commit_comment', CommitCommentCreatedEventSchema],
  ['create', CreateEventSchema],
  [
    'custom_property',
    z.union([CustomPropertyCreatedEventSchema, CustomPropertyDeletedEventSchema]),
  ],
  ['custom_property_values', CustomPropertyValuesUpdatedEventSchema],
  ['delete', DeleteEventSchema],
  [
    'dependabot_alert',
    z.union([
      DependabotAlertCreatedEventSchema,
      DependabotAlertDismissedEventSchema,
      DependabotAlertFixedEventSchema,
      DependabotAlertReintroducedEventSchema,
      DependabotAlertReopenedEventSchema,
    ]),
  ],
  ['deploy_key', z.union([DeployKeyCreatedEventSchema, DeployKeyDeletedEventSchema])],
  ['deployment', DeploymentCreatedEventSchema],
  ['deployment_protection_rule', DeploymentProtectionRuleRequestedEventSchema],
  [
    'deployment_review',
    z.union([
      DeploymentReviewApprovedEventSchema,
      DeploymentReviewRejectedEventSchema,
      DeploymentReviewRequestedEventSchema,
    ]),
  ],
  ['deployment_status', DeploymentStatusCreatedEventSchema],
  [
    'discussion',
    z.union([
      DiscussionAnsweredEventSchema,
      DiscussionCategoryChangedEventSchema,
      DiscussionCreatedEventSchema,
      DiscussionDeletedEventSchema,
      DiscussionEditedEventSchema,
      DiscussionLabeledEventSchema,
      DiscussionLockedEventSchema,
      DiscussionPinnedEventSchema,
      DiscussionTransferredEventSchema,
      DiscussionUnansweredEventSchema,
      DiscussionUnlabeledEventSchema,
      DiscussionUnlockedEventSchema,
      DiscussionUnpinnedEventSchema,
    ]),
  ],
  [
    'discussion_comment',
    z.union([
      DiscussionCommentCreatedEventSchema,
      DiscussionCommentDeletedEventSchema,
      DiscussionCommentEditedEventSchema,
    ]),
  ],
  ['fork', ForkEventSchema],
  ['github_app_authorization', GithubAppAuthorizationRevokedEventSchema],
  ['gollum', GollumEventSchema],
  [
    'installation',
    z.union([
      InstallationCreatedEventSchema,
      InstallationDeletedEventSchema,
      InstallationNewPermissionsAcceptedEventSchema,
      InstallationSuspendEventSchema,
      InstallationUnsuspendEventSchema,
    ]),
  ],
  [
    'installation_repositories',
    z.union([
      InstallationRepositoriesAddedEventSchema,
      InstallationRepositoriesRemovedEventSchema,
    ]),
  ],
  ['installation_target', InstallationTargetRenamedEventSchema],
  [
    'issue_comment',
    z.union([
      IssueCommentCreatedEventSchema,
      IssueCommentDeletedEventSchema,
      IssueCommentEditedEventSchema,
    ]),
  ],
  [
    'issues',
    z.union([
      IssuesAssignedEventSchema,
      IssuesClosedEventSchema,
      IssuesDeletedEventSchema,
      IssuesDemilestonedEventSchema,
      IssuesEditedEventSchema,
      IssuesLabeledEventSchema,
      IssuesLockedEventSchema,
      IssuesMilestonedEventSchema,
      IssuesOpenedEventSchema,
      IssuesPinnedEventSchema,
      IssuesReopenedEventSchema,
      IssuesTransferredEventSchema,
      IssuesUnassignedEventSchema,
      IssuesUnlabeledEventSchema,
      IssuesUnlockedEventSchema,
      IssuesUnpinnedEventSchema,
    ]),
  ],
  [
    'label',
    z.union([LabelCreatedEventSchema, LabelDeletedEventSchema, LabelEditedEventSchema]),
  ],
  [
    'marketplace_purchase',
    z.union([
      MarketplacePurchaseCancelledEventSchema,
      MarketplacePurchaseChangedEventSchema,
      MarketplacePurchasePendingChangeCancelledEventSchema,
      MarketplacePurchasePendingChangeEventSchema,
      MarketplacePurchasePurchasedEventSchema,
    ]),
  ],
  [
    'member',
    z.union([MemberAddedEventSchema, MemberEditedEventSchema, MemberRemovedEventSchema]),
  ],
  ['membership', z.union([MembershipAddedEventSchema, MembershipRemovedEventSchema])],
  [
    'merge_group',
    z.union([MergeGroupChecksRequestedEventSchema, MergeGroupDestroyedEventSchema]),
  ],
  ['meta', MetaDeletedEventSchema],
  [
    'milestone',
    z.union([
      MilestoneClosedEventSchema,
      MilestoneCreatedEventSchema,
      MilestoneDeletedEventSchema,
      MilestoneEditedEventSchema,
      MilestoneOpenedEventSchema,
    ]),
  ],
  ['org_block', z.union([OrgBlockBlockedEventSchema, OrgBlockUnblockedEventSchema])],
  [
    'organization',
    z.union([
      OrganizationDeletedEventSchema,
      OrganizationMemberAddedEventSchema,
      OrganizationMemberInvitedEventSchema,
      OrganizationMemberRemovedEventSchema,
      OrganizationRenamedEventSchema,
    ]),
  ],
  ['package', z.union([PackagePublishedEventSchema, PackageUpdatedEventSchema])],
  ['page_build', PageBuildEventSchema],
  ['ping', PingEventSchema],
  [
    'project_card',
    z.union([
      ProjectCardConvertedEventSchema,
      ProjectCardCreatedEventSchema,
      ProjectCardDeletedEventSchema,
      ProjectCardEditedEventSchema,
      ProjectCardMovedEventSchema,
    ]),
  ],
  [
    'project',
    z.union([
      ProjectClosedEventSchema,
      ProjectCreatedEventSchema,
      ProjectDeletedEventSchema,
      ProjectEditedEventSchema,
      ProjectReopenedEventSchema,
    ]),
  ],
  [
    'project_column',
    z.union([
      ProjectColumnCreatedEventSchema,
      ProjectColumnDeletedEventSchema,
      ProjectColumnEditedEventSchema,
      ProjectColumnMovedEventSchema,
    ]),
  ],
  [
    'projects_v2_item',
    z.union([
      ProjectsV2ItemArchivedEventSchema,
      ProjectsV2ItemConvertedEventSchema,
      ProjectsV2ItemCreatedEventSchema,
      ProjectsV2ItemDeletedEventSchema,
      ProjectsV2ItemEditedEventSchema,
      ProjectsV2ItemReorderedEventSchema,
      ProjectsV2ItemRestoredEventSchema,
    ]),
  ],
  ['public', PublicEventSchema],
  [
    'pull_request',
    z.union([
      PullRequestAssignedEventSchema,
      PullRequestAutoMergeDisabledEventSchema,
      PullRequestAutoMergeEnabledEventSchema,
      PullRequestClosedEventSchema,
      PullRequestConvertedToDraftEventSchema,
      PullRequestDemilestonedEventSchema,
      PullRequestDequeuedEventSchema,
      PullRequestEditedEventSchema,
      PullRequestEnqueuedEventSchema,
      PullRequestLabeledEventSchema,
      PullRequestLockedEventSchema,
      PullRequestMilestonedEventSchema,
      PullRequestOpenedEventSchema,
      PullRequestReadyForReviewEventSchema,
      PullRequestReopenedEventSchema,
      PullRequestSynchronizeEventSchema,
      PullRequestUnassignedEventSchema,
      PullRequestUnlabeledEventSchema,
      PullRequestUnlockedEventSchema,
    ]),
  ],
  [
    'pull_request_review_comment',
    z.union([
      PullRequestReviewCommentCreatedEventSchema,
      PullRequestReviewCommentDeletedEventSchema,
      PullRequestReviewCommentEditedEventSchema,
    ]),
  ],
  [
    'pull_request_review',
    z.union([
      PullRequestReviewDismissedEventSchema,
      PullRequestReviewEditedEventSchema,
      PullRequestReviewSubmittedEventSchema,
    ]),
  ],
  [
    'pull_request_review_thread',
    z.union([
      PullRequestReviewThreadResolvedEventSchema,
      PullRequestReviewThreadUnresolvedEventSchema,
    ]),
  ],
  ['push', PushEventSchema],
  [
    'registry_package',
    z.union([RegistryPackagePublishedEventSchema, RegistryPackageUpdatedEventSchema]),
  ],
  [
    'release',
    z.union([
      ReleaseCreatedEventSchema,
      ReleaseDeletedEventSchema,
      ReleaseEditedEventSchema,
      ReleasePrereleasedEventSchema,
      ReleasePublishedEventSchema,
      ReleaseReleasedEventSchema,
      ReleaseUnpublishedEventSchema,
    ]),
  ],
  [
    'repository',
    z.union([
      RepositoryArchivedEventSchema,
      RepositoryCreatedEventSchema,
      RepositoryDeletedEventSchema,
      RepositoryEditedEventSchema,
      RepositoryPrivatizedEventSchema,
      RepositoryPublicizedEventSchema,
      RepositoryRenamedEventSchema,
      RepositoryTransferredEventSchema,
      RepositoryUnarchivedEventSchema,
    ]),
  ],
  ['repository_dispatch', RepositoryDispatchEventSchema],
  ['repository_import', RepositoryImportEventSchema],
  [
    'repository_vulnerability_alert',
    z.union([
      RepositoryVulnerabilityAlertCreateEventSchema,
      RepositoryVulnerabilityAlertDismissEventSchema,
      RepositoryVulnerabilityAlertReopenEventSchema,
      RepositoryVulnerabilityAlertResolveEventSchema,
    ]),
  ],
  [
    'secret_scanning_alert',
    z.union([
      SecretScanningAlertCreatedEventSchema,
      SecretScanningAlertReopenedEventSchema,
      SecretScanningAlertResolvedEventSchema,
      SecretScanningAlertRevokedEventSchema,
    ]),
  ],
  ['secret_scanning_alert_location', SecretScanningAlertLocationCreatedEventSchema],
  [
    'security_advisory',
    z.union([
      SecurityAdvisoryPerformedEventSchema,
      SecurityAdvisoryPublishedEventSchema,
      SecurityAdvisoryUpdatedEventSchema,
      SecurityAdvisoryWithdrawnEventSchema,
    ]),
  ],
  [
    'sponsorship',
    z.union([
      SponsorshipCancelledEventSchema,
      SponsorshipCreatedEventSchema,
      SponsorshipEditedEventSchema,
      SponsorshipPendingCancellationEventSchema,
      SponsorshipPendingTierChangeEventSchema,
      SponsorshipTierChangedEventSchema,
    ]),
  ],
  ['star', z.union([StarCreatedEventSchema, StarDeletedEventSchema])],
  ['status', StatusEventSchema],
  ['team_add', TeamAddEventSchema],
  [
    'team',
    z.union([
      TeamAddedToRepositoryEventSchema,
      TeamCreatedEventSchema,
      TeamDeletedEventSchema,
      TeamEditedEventSchema,
      TeamRemovedFromRepositoryEventSchema,
    ]),
  ],
  ['watch', WatchStartedEventSchema],
  ['workflow_dispatch', WorkflowDispatchEventSchema],
  [
    'workflow_job',
    z.union([
      WorkflowJobCompletedEventSchema,
      WorkflowJobInProgressEventSchema,
      WorkflowJobQueuedEventSchema,
      WorkflowJobWaitingEventSchema,
    ]),
  ],
  [
    'workflow_run',
    z.union([
      WorkflowRunCompletedEventSchema,
      WorkflowRunInProgressEventSchema,
      WorkflowRunRequestedEventSchema,
    ]),
  ],
]);

const allEventSchemas: z.ZodTypeAny[] = [
  BranchProtectionConfigurationDisabledEventSchema,
  BranchProtectionConfigurationEnabledEventSchema,
  BranchProtectionRuleCreatedEventSchema,
  BranchProtectionRuleDeletedEventSchema,
  BranchProtectionRuleEditedEventSchema,
  CheckRunCompletedEventSchema,
  CheckRunCreatedEventSchema,
  CheckRunRequestedActionEventSchema,
  CheckRunRerequestedEventSchema,
  CheckSuiteCompletedEventSchema,
  CheckSuiteRequestedEventSchema,
  CheckSuiteRerequestedEventSchema,
  CodeScanningAlertAppearedInBranchEventSchema,
  CodeScanningAlertClosedByUserEventSchema,
  CodeScanningAlertCreatedEventSchema,
  CodeScanningAlertFixedEventSchema,
  CodeScanningAlertReopenedByUserEventSchema,
  CodeScanningAlertReopenedEventSchema,
  CommitCommentCreatedEventSchema,
  CreateEventSchema,
  CustomPropertyCreatedEventSchema,
  CustomPropertyDeletedEventSchema,
  CustomPropertyValuesUpdatedEventSchema,
  DeleteEventSchema,
  DependabotAlertCreatedEventSchema,
  DependabotAlertDismissedEventSchema,
  DependabotAlertFixedEventSchema,
  DependabotAlertReintroducedEventSchema,
  DependabotAlertReopenedEventSchema,
  DeployKeyCreatedEventSchema,
  DeployKeyDeletedEventSchema,
  DeploymentCreatedEventSchema,
  DeploymentProtectionRuleRequestedEventSchema,
  DeploymentReviewApprovedEventSchema,
  DeploymentReviewRejectedEventSchema,
  DeploymentReviewRequestedEventSchema,
  DeploymentStatusCreatedEventSchema,
  DiscussionAnsweredEventSchema,
  DiscussionCategoryChangedEventSchema,
  DiscussionCreatedEventSchema,
  DiscussionDeletedEventSchema,
  DiscussionEditedEventSchema,
  DiscussionLabeledEventSchema,
  DiscussionLockedEventSchema,
  DiscussionPinnedEventSchema,
  DiscussionTransferredEventSchema,
  DiscussionUnansweredEventSchema,
  DiscussionUnlabeledEventSchema,
  DiscussionUnlockedEventSchema,
  DiscussionUnpinnedEventSchema,
  DiscussionCommentCreatedEventSchema,
  DiscussionCommentDeletedEventSchema,
  DiscussionCommentEditedEventSchema,
  ForkEventSchema,
  GithubAppAuthorizationRevokedEventSchema,
  GollumEventSchema,
  InstallationCreatedEventSchema,
  InstallationDeletedEventSchema,
  InstallationNewPermissionsAcceptedEventSchema,
  InstallationSuspendEventSchema,
  InstallationUnsuspendEventSchema,
  InstallationRepositoriesAddedEventSchema,
  InstallationRepositoriesRemovedEventSchema,
  InstallationTargetRenamedEventSchema,
  IssueCommentCreatedEventSchema,
  IssueCommentDeletedEventSchema,
  IssueCommentEditedEventSchema,
  IssuesAssignedEventSchema,
  IssuesClosedEventSchema,
  IssuesDeletedEventSchema,
  IssuesDemilestonedEventSchema,
  IssuesEditedEventSchema,
  IssuesLabeledEventSchema,
  IssuesLockedEventSchema,
  IssuesMilestonedEventSchema,
  IssuesOpenedEventSchema,
  IssuesPinnedEventSchema,
  IssuesReopenedEventSchema,
  IssuesTransferredEventSchema,
  IssuesUnassignedEventSchema,
  IssuesUnlabeledEventSchema,
  IssuesUnlockedEventSchema,
  IssuesUnpinnedEventSchema,
  LabelCreatedEventSchema,
  LabelDeletedEventSchema,
  LabelEditedEventSchema,
  MarketplacePurchaseCancelledEventSchema,
  MarketplacePurchaseChangedEventSchema,
  MarketplacePurchasePendingChangeCancelledEventSchema,
  MarketplacePurchasePendingChangeEventSchema,
  MarketplacePurchasePurchasedEventSchema,
  MemberAddedEventSchema,
  MemberEditedEventSchema,
  MemberRemovedEventSchema,
  MembershipAddedEventSchema,
  MembershipRemovedEventSchema,
  MergeGroupChecksRequestedEventSchema,
  MergeGroupDestroyedEventSchema,
  MetaDeletedEventSchema,
  MilestoneClosedEventSchema,
  MilestoneCreatedEventSchema,
  MilestoneDeletedEventSchema,
  MilestoneEditedEventSchema,
  MilestoneOpenedEventSchema,
  OrgBlockBlockedEventSchema,
  OrgBlockUnblockedEventSchema,
  OrganizationDeletedEventSchema,
  OrganizationMemberAddedEventSchema,
  OrganizationMemberInvitedEventSchema,
  OrganizationMemberRemovedEventSchema,
  OrganizationRenamedEventSchema,
  PackagePublishedEventSchema,
  PackageUpdatedEventSchema,
  PageBuildEventSchema,
  PingEventSchema,
  ProjectCardConvertedEventSchema,
  ProjectCardCreatedEventSchema,
  ProjectCardDeletedEventSchema,
  ProjectCardEditedEventSchema,
  ProjectCardMovedEventSchema,
  ProjectClosedEventSchema,
  ProjectCreatedEventSchema,
  ProjectDeletedEventSchema,
  ProjectEditedEventSchema,
  ProjectReopenedEventSchema,
  ProjectColumnCreatedEventSchema,
  ProjectColumnDeletedEventSchema,
  ProjectColumnEditedEventSchema,
  ProjectColumnMovedEventSchema,
  ProjectsV2ItemArchivedEventSchema,
  ProjectsV2ItemConvertedEventSchema,
  ProjectsV2ItemCreatedEventSchema,
  ProjectsV2ItemDeletedEventSchema,
  ProjectsV2ItemEditedEventSchema,
  ProjectsV2ItemReorderedEventSchema,
  ProjectsV2ItemRestoredEventSchema,
  PublicEventSchema,
  PullRequestAssignedEventSchema,
  PullRequestAutoMergeDisabledEventSchema,
  PullRequestAutoMergeEnabledEventSchema,
  PullRequestClosedEventSchema,
  PullRequestConvertedToDraftEventSchema,
  PullRequestDemilestonedEventSchema,
  PullRequestDequeuedEventSchema,
  PullRequestEditedEventSchema,
  PullRequestEnqueuedEventSchema,
  PullRequestLabeledEventSchema,
  PullRequestLockedEventSchema,
  PullRequestMilestonedEventSchema,
  PullRequestOpenedEventSchema,
  PullRequestReadyForReviewEventSchema,
  PullRequestReopenedEventSchema,
  PullRequestSynchronizeEventSchema,
  PullRequestUnassignedEventSchema,
  PullRequestUnlabeledEventSchema,
  PullRequestUnlockedEventSchema,
  PullRequestReviewCommentCreatedEventSchema,
  PullRequestReviewCommentDeletedEventSchema,
  PullRequestReviewCommentEditedEventSchema,
  PullRequestReviewDismissedEventSchema,
  PullRequestReviewEditedEventSchema,
  PullRequestReviewSubmittedEventSchema,
  PullRequestReviewThreadResolvedEventSchema,
  PullRequestReviewThreadUnresolvedEventSchema,
  PushEventSchema,
  RegistryPackagePublishedEventSchema,
  RegistryPackageUpdatedEventSchema,
  ReleaseCreatedEventSchema,
  ReleaseDeletedEventSchema,
  ReleaseEditedEventSchema,
  ReleasePrereleasedEventSchema,
  ReleasePublishedEventSchema,
  ReleaseReleasedEventSchema,
  ReleaseUnpublishedEventSchema,
  RepositoryArchivedEventSchema,
  RepositoryCreatedEventSchema,
  RepositoryDeletedEventSchema,
  RepositoryEditedEventSchema,
  RepositoryPrivatizedEventSchema,
  RepositoryPublicizedEventSchema,
  RepositoryRenamedEventSchema,
  RepositoryTransferredEventSchema,
  RepositoryUnarchivedEventSchema,
  RepositoryDispatchEventSchema,
  RepositoryImportEventSchema,
  RepositoryVulnerabilityAlertCreateEventSchema,
  RepositoryVulnerabilityAlertDismissEventSchema,
  RepositoryVulnerabilityAlertReopenEventSchema,
  RepositoryVulnerabilityAlertResolveEventSchema,
  SecretScanningAlertCreatedEventSchema,
  SecretScanningAlertReopenedEventSchema,
  SecretScanningAlertResolvedEventSchema,
  SecretScanningAlertRevokedEventSchema,
  SecretScanningAlertLocationCreatedEventSchema,
  SecurityAdvisoryPerformedEventSchema,
  SecurityAdvisoryPublishedEventSchema,
  SecurityAdvisoryUpdatedEventSchema,
  SecurityAdvisoryWithdrawnEventSchema,
  SponsorshipCancelledEventSchema,
  SponsorshipCreatedEventSchema,
  SponsorshipEditedEventSchema,
  SponsorshipPendingCancellationEventSchema,
  SponsorshipPendingTierChangeEventSchema,
  SponsorshipTierChangedEventSchema,
  StarCreatedEventSchema,
  StarDeletedEventSchema,
  StatusEventSchema,
  TeamAddEventSchema,
  TeamAddedToRepositoryEventSchema,
  TeamCreatedEventSchema,
  TeamDeletedEventSchema,
  TeamEditedEventSchema,
  TeamRemovedFromRepositoryEventSchema,
  WatchStartedEventSchema,
  WorkflowDispatchEventSchema,
  WorkflowJobCompletedEventSchema,
  WorkflowJobInProgressEventSchema,
  WorkflowJobQueuedEventSchema,
  WorkflowJobWaitingEventSchema,
  WorkflowRunCompletedEventSchema,
  WorkflowRunInProgressEventSchema,
  WorkflowRunRequestedEventSchema,
];

const eventTypeSet = new Set<WebhookEventName>(schemaRegistry.keys());

const routeKeyInfoMap: Record<string, { eventType: WebhookEventName; action?: string }> =
  {
    branchProtectionConfiguration: { eventType: 'branch_protection_configuration' },
    branchProtectionConfigurationDisabled: {
      eventType: 'branch_protection_configuration',
      action: 'disabled',
    },
    branchProtectionConfigurationEnabled: {
      eventType: 'branch_protection_configuration',
      action: 'enabled',
    },
    branchProtectionRule: { eventType: 'branch_protection_rule' },
    branchProtectionRuleCreated: {
      eventType: 'branch_protection_rule',
      action: 'created',
    },
    branchProtectionRuleDeleted: {
      eventType: 'branch_protection_rule',
      action: 'deleted',
    },
    branchProtectionRuleEdited: { eventType: 'branch_protection_rule', action: 'edited' },
    checkRun: { eventType: 'check_run' },
    checkRunCompleted: { eventType: 'check_run', action: 'completed' },
    checkRunCreated: { eventType: 'check_run', action: 'created' },
    checkRunRequestedAction: { eventType: 'check_run', action: 'requested_action' },
    checkRunRerequested: { eventType: 'check_run', action: 'rerequested' },
    checkSuite: { eventType: 'check_suite' },
    checkSuiteCompleted: { eventType: 'check_suite', action: 'completed' },
    checkSuiteRequested: { eventType: 'check_suite', action: 'requested' },
    checkSuiteRerequested: { eventType: 'check_suite', action: 'rerequested' },
    codeScanningAlert: { eventType: 'code_scanning_alert' },
    codeScanningAlertAppearedInBranch: {
      eventType: 'code_scanning_alert',
      action: 'appeared_in_branch',
    },
    codeScanningAlertClosedByUser: {
      eventType: 'code_scanning_alert',
      action: 'closed_by_user',
    },
    codeScanningAlertCreated: { eventType: 'code_scanning_alert', action: 'created' },
    codeScanningAlertFixed: { eventType: 'code_scanning_alert', action: 'fixed' },
    codeScanningAlertReopened: { eventType: 'code_scanning_alert', action: 'reopened' },
    codeScanningAlertReopenedByUser: {
      eventType: 'code_scanning_alert',
      action: 'reopened_by_user',
    },
    commitComment: { eventType: 'commit_comment' },
    commitCommentCreated: { eventType: 'commit_comment', action: 'created' },
    create: { eventType: 'create' },
    customProperty: { eventType: 'custom_property' },
    customPropertyCreated: { eventType: 'custom_property', action: 'created' },
    customPropertyDeleted: { eventType: 'custom_property', action: 'deleted' },
    customPropertyPromoteToEnterprise: {
      eventType: 'custom_property',
      action: 'promote_to_enterprise',
    },
    customPropertyUpdated: { eventType: 'custom_property', action: 'updated' },
    customPropertyValues: { eventType: 'custom_property_values' },
    customPropertyValuesUpdated: {
      eventType: 'custom_property_values',
      action: 'updated',
    },
    delete: { eventType: 'delete' },
    dependabotAlert: { eventType: 'dependabot_alert' },
    dependabotAlertAutoDismissed: {
      eventType: 'dependabot_alert',
      action: 'auto_dismissed',
    },
    dependabotAlertAutoReopened: {
      eventType: 'dependabot_alert',
      action: 'auto_reopened',
    },
    dependabotAlertCreated: { eventType: 'dependabot_alert', action: 'created' },
    dependabotAlertDismissed: { eventType: 'dependabot_alert', action: 'dismissed' },
    dependabotAlertFixed: { eventType: 'dependabot_alert', action: 'fixed' },
    dependabotAlertReintroduced: {
      eventType: 'dependabot_alert',
      action: 'reintroduced',
    },
    dependabotAlertReopened: { eventType: 'dependabot_alert', action: 'reopened' },
    deployKey: { eventType: 'deploy_key' },
    deployKeyCreated: { eventType: 'deploy_key', action: 'created' },
    deployKeyDeleted: { eventType: 'deploy_key', action: 'deleted' },
    deployment: { eventType: 'deployment' },
    deploymentCreated: { eventType: 'deployment', action: 'created' },
    deploymentProtectionRule: { eventType: 'deployment_protection_rule' },
    deploymentProtectionRuleRequested: {
      eventType: 'deployment_protection_rule',
      action: 'requested',
    },
    deploymentReview: { eventType: 'deployment_review' },
    deploymentReviewApproved: { eventType: 'deployment_review', action: 'approved' },
    deploymentReviewRejected: { eventType: 'deployment_review', action: 'rejected' },
    deploymentReviewRequested: { eventType: 'deployment_review', action: 'requested' },
    deploymentStatus: { eventType: 'deployment_status' },
    deploymentStatusCreated: { eventType: 'deployment_status', action: 'created' },
    discussion: { eventType: 'discussion' },
    discussionAnswered: { eventType: 'discussion', action: 'answered' },
    discussionCategoryChanged: { eventType: 'discussion', action: 'category_changed' },
    discussionClosed: { eventType: 'discussion', action: 'closed' },
    discussionCreated: { eventType: 'discussion', action: 'created' },
    discussionDeleted: { eventType: 'discussion', action: 'deleted' },
    discussionEdited: { eventType: 'discussion', action: 'edited' },
    discussionLabeled: { eventType: 'discussion', action: 'labeled' },
    discussionLocked: { eventType: 'discussion', action: 'locked' },
    discussionPinned: { eventType: 'discussion', action: 'pinned' },
    discussionReopened: { eventType: 'discussion', action: 'reopened' },
    discussionTransferred: { eventType: 'discussion', action: 'transferred' },
    discussionUnanswered: { eventType: 'discussion', action: 'unanswered' },
    discussionUnlabeled: { eventType: 'discussion', action: 'unlabeled' },
    discussionUnlocked: { eventType: 'discussion', action: 'unlocked' },
    discussionUnpinned: { eventType: 'discussion', action: 'unpinned' },
    discussionComment: { eventType: 'discussion_comment' },
    discussionCommentCreated: { eventType: 'discussion_comment', action: 'created' },
    discussionCommentDeleted: { eventType: 'discussion_comment', action: 'deleted' },
    discussionCommentEdited: { eventType: 'discussion_comment', action: 'edited' },
    fork: { eventType: 'fork' },
    githubAppAuthorization: { eventType: 'github_app_authorization' },
    githubAppAuthorizationRevoked: {
      eventType: 'github_app_authorization',
      action: 'revoked',
    },
    gollum: { eventType: 'gollum' },
    installation: { eventType: 'installation' },
    installationCreated: { eventType: 'installation', action: 'created' },
    installationDeleted: { eventType: 'installation', action: 'deleted' },
    installationNewPermissionsAccepted: {
      eventType: 'installation',
      action: 'new_permissions_accepted',
    },
    installationSuspend: { eventType: 'installation', action: 'suspend' },
    installationUnsuspend: { eventType: 'installation', action: 'unsuspend' },
    installationRepositories: { eventType: 'installation_repositories' },
    installationRepositoriesAdded: {
      eventType: 'installation_repositories',
      action: 'added',
    },
    installationRepositoriesRemoved: {
      eventType: 'installation_repositories',
      action: 'removed',
    },
    installationTarget: { eventType: 'installation_target' },
    installationTargetRenamed: { eventType: 'installation_target', action: 'renamed' },
    issueComment: { eventType: 'issue_comment' },
    issueCommentCreated: { eventType: 'issue_comment', action: 'created' },
    issueCommentDeleted: { eventType: 'issue_comment', action: 'deleted' },
    issueCommentEdited: { eventType: 'issue_comment', action: 'edited' },
    issues: { eventType: 'issues' },
    issuesAssigned: { eventType: 'issues', action: 'assigned' },
    issuesClosed: { eventType: 'issues', action: 'closed' },
    issuesDeleted: { eventType: 'issues', action: 'deleted' },
    issuesDemilestoned: { eventType: 'issues', action: 'demilestoned' },
    issuesEdited: { eventType: 'issues', action: 'edited' },
    issuesLabeled: { eventType: 'issues', action: 'labeled' },
    issuesLocked: { eventType: 'issues', action: 'locked' },
    issuesMilestoned: { eventType: 'issues', action: 'milestoned' },
    issuesOpened: { eventType: 'issues', action: 'opened' },
    issuesPinned: { eventType: 'issues', action: 'pinned' },
    issuesReopened: { eventType: 'issues', action: 'reopened' },
    issuesTransferred: { eventType: 'issues', action: 'transferred' },
    issuesTyped: { eventType: 'issues', action: 'typed' },
    issuesUnassigned: { eventType: 'issues', action: 'unassigned' },
    issuesUnlabeled: { eventType: 'issues', action: 'unlabeled' },
    issuesUnlocked: { eventType: 'issues', action: 'unlocked' },
    issuesUnpinned: { eventType: 'issues', action: 'unpinned' },
    issuesUntyped: { eventType: 'issues', action: 'untyped' },
    label: { eventType: 'label' },
    labelCreated: { eventType: 'label', action: 'created' },
    labelDeleted: { eventType: 'label', action: 'deleted' },
    labelEdited: { eventType: 'label', action: 'edited' },
    marketplacePurchase: { eventType: 'marketplace_purchase' },
    marketplacePurchaseCancelled: {
      eventType: 'marketplace_purchase',
      action: 'cancelled',
    },
    marketplacePurchaseChanged: { eventType: 'marketplace_purchase', action: 'changed' },
    marketplacePurchasePendingChange: {
      eventType: 'marketplace_purchase',
      action: 'pending_change',
    },
    marketplacePurchasePendingChangeCancelled: {
      eventType: 'marketplace_purchase',
      action: 'pending_change_cancelled',
    },
    marketplacePurchasePurchased: {
      eventType: 'marketplace_purchase',
      action: 'purchased',
    },
    member: { eventType: 'member' },
    memberAdded: { eventType: 'member', action: 'added' },
    memberEdited: { eventType: 'member', action: 'edited' },
    memberRemoved: { eventType: 'member', action: 'removed' },
    membership: { eventType: 'membership' },
    membershipAdded: { eventType: 'membership', action: 'added' },
    membershipRemoved: { eventType: 'membership', action: 'removed' },
    mergeGroup: { eventType: 'merge_group' },
    mergeGroupChecksRequested: { eventType: 'merge_group', action: 'checks_requested' },
    mergeGroupDestroyed: { eventType: 'merge_group', action: 'destroyed' },
    meta: { eventType: 'meta' },
    metaDeleted: { eventType: 'meta', action: 'deleted' },
    milestone: { eventType: 'milestone' },
    milestoneClosed: { eventType: 'milestone', action: 'closed' },
    milestoneCreated: { eventType: 'milestone', action: 'created' },
    milestoneDeleted: { eventType: 'milestone', action: 'deleted' },
    milestoneEdited: { eventType: 'milestone', action: 'edited' },
    milestoneOpened: { eventType: 'milestone', action: 'opened' },
    orgBlock: { eventType: 'org_block' },
    orgBlockBlocked: { eventType: 'org_block', action: 'blocked' },
    orgBlockUnblocked: { eventType: 'org_block', action: 'unblocked' },
    organization: { eventType: 'organization' },
    organizationDeleted: { eventType: 'organization', action: 'deleted' },
    organizationMemberAdded: { eventType: 'organization', action: 'member_added' },
    organizationMemberInvited: { eventType: 'organization', action: 'member_invited' },
    organizationMemberRemoved: { eventType: 'organization', action: 'member_removed' },
    organizationRenamed: { eventType: 'organization', action: 'renamed' },
    package: { eventType: 'package' },
    packagePublished: { eventType: 'package', action: 'published' },
    packageUpdated: { eventType: 'package', action: 'updated' },
    pageBuild: { eventType: 'page_build' },
    ping: { eventType: 'ping' },
    project: { eventType: 'project' },
    projectClosed: { eventType: 'project', action: 'closed' },
    projectCreated: { eventType: 'project', action: 'created' },
    projectDeleted: { eventType: 'project', action: 'deleted' },
    projectEdited: { eventType: 'project', action: 'edited' },
    projectReopened: { eventType: 'project', action: 'reopened' },
    projectCard: { eventType: 'project_card' },
    projectCardConverted: { eventType: 'project_card', action: 'converted' },
    projectCardCreated: { eventType: 'project_card', action: 'created' },
    projectCardDeleted: { eventType: 'project_card', action: 'deleted' },
    projectCardEdited: { eventType: 'project_card', action: 'edited' },
    projectCardMoved: { eventType: 'project_card', action: 'moved' },
    projectColumn: { eventType: 'project_column' },
    projectColumnCreated: { eventType: 'project_column', action: 'created' },
    projectColumnDeleted: { eventType: 'project_column', action: 'deleted' },
    projectColumnEdited: { eventType: 'project_column', action: 'edited' },
    projectColumnMoved: { eventType: 'project_column', action: 'moved' },
    projectsV2Item: { eventType: 'projects_v2_item' },
    projectsV2ItemArchived: { eventType: 'projects_v2_item', action: 'archived' },
    projectsV2ItemConverted: { eventType: 'projects_v2_item', action: 'converted' },
    projectsV2ItemCreated: { eventType: 'projects_v2_item', action: 'created' },
    projectsV2ItemDeleted: { eventType: 'projects_v2_item', action: 'deleted' },
    projectsV2ItemEdited: { eventType: 'projects_v2_item', action: 'edited' },
    projectsV2ItemReordered: { eventType: 'projects_v2_item', action: 'reordered' },
    projectsV2ItemRestored: { eventType: 'projects_v2_item', action: 'restored' },
    public: { eventType: 'public' },
    pullRequest: { eventType: 'pull_request' },
    pullRequestAssigned: { eventType: 'pull_request', action: 'assigned' },
    pullRequestAutoMergeDisabled: {
      eventType: 'pull_request',
      action: 'auto_merge_disabled',
    },
    pullRequestAutoMergeEnabled: {
      eventType: 'pull_request',
      action: 'auto_merge_enabled',
    },
    pullRequestClosed: { eventType: 'pull_request', action: 'closed' },
    pullRequestConvertedToDraft: {
      eventType: 'pull_request',
      action: 'converted_to_draft',
    },
    pullRequestDemilestoned: { eventType: 'pull_request', action: 'demilestoned' },
    pullRequestDequeued: { eventType: 'pull_request', action: 'dequeued' },
    pullRequestEdited: { eventType: 'pull_request', action: 'edited' },
    pullRequestEnqueued: { eventType: 'pull_request', action: 'enqueued' },
    pullRequestLabeled: { eventType: 'pull_request', action: 'labeled' },
    pullRequestLocked: { eventType: 'pull_request', action: 'locked' },
    pullRequestMilestoned: { eventType: 'pull_request', action: 'milestoned' },
    pullRequestOpened: { eventType: 'pull_request', action: 'opened' },
    pullRequestReadyForReview: { eventType: 'pull_request', action: 'ready_for_review' },
    pullRequestReopened: { eventType: 'pull_request', action: 'reopened' },
    pullRequestReviewRequestRemoved: {
      eventType: 'pull_request',
      action: 'review_request_removed',
    },
    pullRequestReviewRequested: { eventType: 'pull_request', action: 'review_requested' },
    pullRequestSynchronize: { eventType: 'pull_request', action: 'synchronize' },
    pullRequestUnassigned: { eventType: 'pull_request', action: 'unassigned' },
    pullRequestUnlabeled: { eventType: 'pull_request', action: 'unlabeled' },
    pullRequestUnlocked: { eventType: 'pull_request', action: 'unlocked' },
    pullRequestReview: { eventType: 'pull_request_review' },
    pullRequestReviewDismissed: { eventType: 'pull_request_review', action: 'dismissed' },
    pullRequestReviewEdited: { eventType: 'pull_request_review', action: 'edited' },
    pullRequestReviewSubmitted: { eventType: 'pull_request_review', action: 'submitted' },
    pullRequestReviewComment: { eventType: 'pull_request_review_comment' },
    pullRequestReviewCommentCreated: {
      eventType: 'pull_request_review_comment',
      action: 'created',
    },
    pullRequestReviewCommentDeleted: {
      eventType: 'pull_request_review_comment',
      action: 'deleted',
    },
    pullRequestReviewCommentEdited: {
      eventType: 'pull_request_review_comment',
      action: 'edited',
    },
    pullRequestReviewThread: { eventType: 'pull_request_review_thread' },
    pullRequestReviewThreadResolved: {
      eventType: 'pull_request_review_thread',
      action: 'resolved',
    },
    pullRequestReviewThreadUnresolved: {
      eventType: 'pull_request_review_thread',
      action: 'unresolved',
    },
    push: { eventType: 'push' },
    registryPackage: { eventType: 'registry_package' },
    registryPackagePublished: { eventType: 'registry_package', action: 'published' },
    registryPackageUpdated: { eventType: 'registry_package', action: 'updated' },
    release: { eventType: 'release' },
    releaseCreated: { eventType: 'release', action: 'created' },
    releaseDeleted: { eventType: 'release', action: 'deleted' },
    releaseEdited: { eventType: 'release', action: 'edited' },
    releasePrereleased: { eventType: 'release', action: 'prereleased' },
    releasePublished: { eventType: 'release', action: 'published' },
    releaseReleased: { eventType: 'release', action: 'released' },
    releaseUnpublished: { eventType: 'release', action: 'unpublished' },
    repository: { eventType: 'repository' },
    repositoryArchived: { eventType: 'repository', action: 'archived' },
    repositoryCreated: { eventType: 'repository', action: 'created' },
    repositoryDeleted: { eventType: 'repository', action: 'deleted' },
    repositoryEdited: { eventType: 'repository', action: 'edited' },
    repositoryPrivatized: { eventType: 'repository', action: 'privatized' },
    repositoryPublicized: { eventType: 'repository', action: 'publicized' },
    repositoryRenamed: { eventType: 'repository', action: 'renamed' },
    repositoryTransferred: { eventType: 'repository', action: 'transferred' },
    repositoryUnarchived: { eventType: 'repository', action: 'unarchived' },
    repositoryDispatch: { eventType: 'repository_dispatch' },
    repositoryDispatchSampleCollected: {
      eventType: 'repository_dispatch',
      action: 'sample.collected',
    },
    repositoryImport: { eventType: 'repository_import' },
    repositoryVulnerabilityAlert: { eventType: 'repository_vulnerability_alert' },
    repositoryVulnerabilityAlertCreate: {
      eventType: 'repository_vulnerability_alert',
      action: 'create',
    },
    repositoryVulnerabilityAlertDismiss: {
      eventType: 'repository_vulnerability_alert',
      action: 'dismiss',
    },
    repositoryVulnerabilityAlertReopen: {
      eventType: 'repository_vulnerability_alert',
      action: 'reopen',
    },
    repositoryVulnerabilityAlertResolve: {
      eventType: 'repository_vulnerability_alert',
      action: 'resolve',
    },
    secretScanningAlert: { eventType: 'secret_scanning_alert' },
    secretScanningAlertAssigned: {
      eventType: 'secret_scanning_alert',
      action: 'assigned',
    },
    secretScanningAlertCreated: { eventType: 'secret_scanning_alert', action: 'created' },
    secretScanningAlertPubliclyLeaked: {
      eventType: 'secret_scanning_alert',
      action: 'publicly_leaked',
    },
    secretScanningAlertReopened: {
      eventType: 'secret_scanning_alert',
      action: 'reopened',
    },
    secretScanningAlertResolved: {
      eventType: 'secret_scanning_alert',
      action: 'resolved',
    },
    secretScanningAlertUnassigned: {
      eventType: 'secret_scanning_alert',
      action: 'unassigned',
    },
    secretScanningAlertValidated: {
      eventType: 'secret_scanning_alert',
      action: 'validated',
    },
    secretScanningAlertLocation: { eventType: 'secret_scanning_alert_location' },
    secretScanningAlertLocationCreated: {
      eventType: 'secret_scanning_alert_location',
      action: 'created',
    },
    securityAdvisory: { eventType: 'security_advisory' },
    securityAdvisoryPublished: { eventType: 'security_advisory', action: 'published' },
    securityAdvisoryUpdated: { eventType: 'security_advisory', action: 'updated' },
    securityAdvisoryWithdrawn: { eventType: 'security_advisory', action: 'withdrawn' },
    sponsorship: { eventType: 'sponsorship' },
    sponsorshipCancelled: { eventType: 'sponsorship', action: 'cancelled' },
    sponsorshipCreated: { eventType: 'sponsorship', action: 'created' },
    sponsorshipEdited: { eventType: 'sponsorship', action: 'edited' },
    sponsorshipPendingCancellation: {
      eventType: 'sponsorship',
      action: 'pending_cancellation',
    },
    sponsorshipPendingTierChange: {
      eventType: 'sponsorship',
      action: 'pending_tier_change',
    },
    sponsorshipTierChanged: { eventType: 'sponsorship', action: 'tier_changed' },
    star: { eventType: 'star' },
    starCreated: { eventType: 'star', action: 'created' },
    starDeleted: { eventType: 'star', action: 'deleted' },
    status: { eventType: 'status' },
    team: { eventType: 'team' },
    teamAddedToRepository: { eventType: 'team', action: 'added_to_repository' },
    teamCreated: { eventType: 'team', action: 'created' },
    teamDeleted: { eventType: 'team', action: 'deleted' },
    teamEdited: { eventType: 'team', action: 'edited' },
    teamRemovedFromRepository: { eventType: 'team', action: 'removed_from_repository' },
    teamAdd: { eventType: 'team_add' },
    watch: { eventType: 'watch' },
    watchStarted: { eventType: 'watch', action: 'started' },
    workflowDispatch: { eventType: 'workflow_dispatch' },
    workflowJob: { eventType: 'workflow_job' },
    workflowJobCompleted: { eventType: 'workflow_job', action: 'completed' },
    workflowJobInProgress: { eventType: 'workflow_job', action: 'in_progress' },
    workflowJobQueued: { eventType: 'workflow_job', action: 'queued' },
    workflowJobWaiting: { eventType: 'workflow_job', action: 'waiting' },
    workflowRun: { eventType: 'workflow_run' },
    workflowRunCompleted: { eventType: 'workflow_run', action: 'completed' },
    workflowRunInProgress: { eventType: 'workflow_run', action: 'in_progress' },
    workflowRunRequested: { eventType: 'workflow_run', action: 'requested' },
  };

const snakeToCamelBaseMap: Record<string, string> = {
  branch_protection_configuration: 'branchProtectionConfiguration',
  branch_protection_rule: 'branchProtectionRule',
  check_run: 'checkRun',
  check_suite: 'checkSuite',
  code_scanning_alert: 'codeScanningAlert',
  commit_comment: 'commitComment',
  create: 'create',
  custom_property: 'customProperty',
  custom_property_values: 'customPropertyValues',
  delete: 'delete',
  dependabot_alert: 'dependabotAlert',
  deploy_key: 'deployKey',
  deployment: 'deployment',
  deployment_protection_rule: 'deploymentProtectionRule',
  deployment_review: 'deploymentReview',
  deployment_status: 'deploymentStatus',
  discussion: 'discussion',
  discussion_comment: 'discussionComment',
  fork: 'fork',
  github_app_authorization: 'githubAppAuthorization',
  gollum: 'gollum',
  installation: 'installation',
  installation_repositories: 'installationRepositories',
  installation_target: 'installationTarget',
  issue_comment: 'issueComment',
  issues: 'issues',
  label: 'label',
  marketplace_purchase: 'marketplacePurchase',
  member: 'member',
  membership: 'membership',
  merge_group: 'mergeGroup',
  meta: 'meta',
  milestone: 'milestone',
  org_block: 'orgBlock',
  organization: 'organization',
  package: 'package',
  page_build: 'pageBuild',
  ping: 'ping',
  project: 'project',
  project_card: 'projectCard',
  project_column: 'projectColumn',
  projects_v2_item: 'projectsV2Item',
  public: 'public',
  pull_request: 'pullRequest',
  pull_request_review: 'pullRequestReview',
  pull_request_review_comment: 'pullRequestReviewComment',
  pull_request_review_thread: 'pullRequestReviewThread',
  push: 'push',
  registry_package: 'registryPackage',
  release: 'release',
  repository: 'repository',
  repository_dispatch: 'repositoryDispatch',
  repository_import: 'repositoryImport',
  repository_vulnerability_alert: 'repositoryVulnerabilityAlert',
  secret_scanning_alert: 'secretScanningAlert',
  secret_scanning_alert_location: 'secretScanningAlertLocation',
  security_advisory: 'securityAdvisory',
  sponsorship: 'sponsorship',
  star: 'star',
  status: 'status',
  team: 'team',
  team_add: 'teamAdd',
  watch: 'watch',
  workflow_dispatch: 'workflowDispatch',
  workflow_job: 'workflowJob',
  workflow_run: 'workflowRun',
};

function actionToPascal(action: string): string {
  return action.replace(/(^|_)(\w)/g, (_, __, c: string) => c.toUpperCase());
}

export const schemas = {
  get<EventType extends WebhookEventName>(
    eventType: EventType,
  ): z.ZodType<WebhookEventMap[EventType]> {
    const schema = schemaRegistry.get(eventType);
    if (!schema) {
      throw new Error(`No schema registered for event type: ${eventType}`);
    }
    return schema as z.ZodType<WebhookEventMap[EventType]>;
  },
};

export function isWebhookEventName(value: unknown): value is WebhookEventName {
  return typeof value === 'string' && eventTypeSet.has(value as WebhookEventName);
}

export function isWebhookEvent(value: unknown): value is WebhookEvent {
  for (const schema of allEventSchemas) {
    if (schema.safeParse(value).success) {
      return true;
    }
  }
  return false;
}

export type WebhookRouteHandlers = Partial<{
  [RouteKey in WebhookRouteKey]: (
    event: WebhookRouteEvent<RouteKey>,
  ) => void | Promise<void>;
}>;

type WebhookRouteHandlerFunction = (event: unknown) => void | Promise<void>;

type WebhookRouteEntry = {
  routeKey: string;
  eventType: WebhookEventName;
  action?: string;
  handler: WebhookRouteHandlerFunction;
  schema: z.ZodTypeAny;
};

function parseWebhookRouteKey(routeKey: string): {
  eventType: WebhookEventName;
  action?: string;
} {
  const info = routeKeyInfoMap[routeKey];
  if (!info) {
    throw new Error(`Unsupported webhook route key: ${routeKey}`);
  }
  return info;
}

export function createGithubWebhookRouter<Handlers extends WebhookRouteHandlers>(
  handlers: Handlers,
): (payload: unknown) => Promise<void> {
  const routeEntries: WebhookRouteEntry[] = Object.entries(handlers)
    .filter(
      (entry): entry is [string, WebhookRouteHandlerFunction] =>
        typeof entry[1] === 'function',
    )
    .map(([routeKey, handler]) => {
      const parsedRoute = parseWebhookRouteKey(routeKey);
      return {
        routeKey,
        eventType: parsedRoute.eventType,
        action: parsedRoute.action,
        handler,
        schema: schemas.get(parsedRoute.eventType),
      };
    })
    .sort((left, right) => Number(Boolean(right.action)) - Number(Boolean(left.action)));

  return async (payload: unknown): Promise<void> => {
    for (const routeEntry of routeEntries) {
      const parsed = routeEntry.schema.safeParse(payload);
      if (!parsed.success) {
        continue;
      }

      if (routeEntry.action) {
        const parsedAction =
          typeof parsed.data === 'object' && parsed.data && 'action' in parsed.data
            ? (parsed.data as { action?: string }).action
            : undefined;

        if (parsedAction !== routeEntry.action) {
          continue;
        }
      }

      await routeEntry.handler(parsed.data);
      return;
    }
  };
}

export function createWebhookRouter(): WebhookRouter {
  type Handler = (arg: unknown) => void | Promise<void>;
  const listeners = new Map<string, Set<Handler>>();

  function getListeners(event: string): Set<Handler> {
    let set = listeners.get(event);
    if (!set) {
      set = new Set();
      listeners.set(event, set);
    }
    return set;
  }

  function handleError(error: unknown): void {
    const errorListeners = listeners.get('error');
    if (errorListeners && errorListeners.size > 0) {
      for (const handler of errorListeners) {
        void handler(error);
      }
    } else {
      throw error;
    }
  }

  return {
    on(event: string, handler: Handler) {
      getListeners(event).add(handler);
      return this;
    },

    off(event: string, handler: Handler) {
      listeners.get(event)?.delete(handler);
      return this;
    },

    removeAllListeners(event?: string) {
      if (event) {
        listeners.delete(event);
      } else {
        listeners.clear();
      }
      return this;
    },

    receive(payload: unknown) {
      // Collect snake_case event types that have at least one listener (via camelCase keys)
      const activeSnakeEventTypes = new Set<WebhookEventName>();
      for (const key of listeners.keys()) {
        if (key === 'error') continue;
        const info = routeKeyInfoMap[key];
        if (info) {
          activeSnakeEventTypes.add(info.eventType);
        }
      }

      for (const [eventType, schema] of schemaRegistry) {
        if (!activeSnakeEventTypes.has(eventType)) continue;

        const parsed = schema.safeParse(payload);
        if (!parsed.success) continue;

        const action =
          typeof parsed.data === 'object' && parsed.data && 'action' in parsed.data
            ? (parsed.data as { action?: string }).action
            : undefined;

        const camelBase = snakeToCamelBaseMap[eventType];
        if (!camelBase) continue;

        // Emit action-specific event first (more specific)
        if (action) {
          const camelActionKey = camelBase + actionToPascal(action);
          const actionListeners = listeners.get(camelActionKey);
          if (actionListeners) {
            for (const handler of actionListeners) {
              try {
                const result = handler(parsed.data);
                if (result instanceof Promise) {
                  result.catch(handleError);
                }
              } catch (err) {
                handleError(err);
              }
            }
          }
        }

        // Emit base event
        const baseListeners = listeners.get(camelBase);
        if (baseListeners) {
          for (const handler of baseListeners) {
            try {
              const result = handler(parsed.data);
              if (result instanceof Promise) {
                result.catch(handleError);
              }
            } catch (err) {
              handleError(err);
            }
          }
        }

        return;
      }
    },
  };
}
