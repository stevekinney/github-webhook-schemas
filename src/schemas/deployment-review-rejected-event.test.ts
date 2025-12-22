/**
 * Auto-generated tests for DeploymentReviewRejectedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DeploymentReviewRejectedEvent,
  DeploymentReviewRejectedEventSchema,
} from './deployment-review-rejected-event.js';

describe('DeploymentReviewRejectedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeploymentReviewRejectedEventSchema).toBeDefined();
    expect(typeof DeploymentReviewRejectedEventSchema.parse).toBe('function');
    expect(typeof DeploymentReviewRejectedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DeploymentReviewRejectedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeploymentReviewRejectedEventTest = DeploymentReviewRejectedEvent;
