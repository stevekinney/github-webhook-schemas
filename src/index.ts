/**
 * GitHub Webhook Schemas - Zod schemas for validating GitHub webhook payloads
 */

// Re-export all schemas from the schemas directory
export * from './schemas/index.js';

// Re-export event types from @octokit/webhooks for convenience
export { emitterEventNames as eventTypes } from '@octokit/webhooks';

// Deep-partial helper for "validate what's present" semantics
export { type DeepPartial,deepPartial } from './deep-partial.js';

// Re-export router and related types from registry
export {
  createGithubWebhookRouter,
  type WebhookHandler,
  type WebhookRouteEvent,
  type WebhookRouteHandlers,
  type WebhookRouteKey,
  type WebhookRouter,
} from './registry.js';
