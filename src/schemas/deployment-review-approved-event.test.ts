/**
 * Auto-generated tests for DeploymentReviewApprovedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DeploymentReviewApprovedEvent,
  DeploymentReviewApprovedEventSchema,
} from './deployment-review-approved-event.js';

describe('DeploymentReviewApprovedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeploymentReviewApprovedEventSchema).toBeDefined();
    expect(typeof DeploymentReviewApprovedEventSchema.parse).toBe('function');
    expect(typeof DeploymentReviewApprovedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DeploymentReviewApprovedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeploymentReviewApprovedEventTest = DeploymentReviewApprovedEvent;
