/**
 * Auto-generated tests for DeploymentStatusCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DeploymentStatusCreatedEvent,
  DeploymentStatusCreatedEventSchema,
} from './deployment-status-created-event.js';

describe('DeploymentStatusCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeploymentStatusCreatedEventSchema).toBeDefined();
    expect(typeof DeploymentStatusCreatedEventSchema.parse).toBe('function');
    expect(typeof DeploymentStatusCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DeploymentStatusCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeploymentStatusCreatedEventTest = DeploymentStatusCreatedEvent;
