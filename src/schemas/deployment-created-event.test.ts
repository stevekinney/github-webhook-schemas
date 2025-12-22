/**
 * Auto-generated tests for DeploymentCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DeploymentCreatedEvent,
  DeploymentCreatedEventSchema,
} from './deployment-created-event.js';

describe('DeploymentCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeploymentCreatedEventSchema).toBeDefined();
    expect(typeof DeploymentCreatedEventSchema.parse).toBe('function');
    expect(typeof DeploymentCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DeploymentCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeploymentCreatedEventTest = DeploymentCreatedEvent;
