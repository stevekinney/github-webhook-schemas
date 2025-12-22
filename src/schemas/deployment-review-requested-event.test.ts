/**
 * Auto-generated tests for DeploymentReviewRequestedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DeploymentReviewRequestedEvent,
  DeploymentReviewRequestedEventSchema,
} from './deployment-review-requested-event.js';

describe('DeploymentReviewRequestedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeploymentReviewRequestedEventSchema).toBeDefined();
    expect(typeof DeploymentReviewRequestedEventSchema.parse).toBe('function');
    expect(typeof DeploymentReviewRequestedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DeploymentReviewRequestedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeploymentReviewRequestedEventTest = DeploymentReviewRequestedEvent;
