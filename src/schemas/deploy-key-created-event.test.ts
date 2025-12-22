/**
 * Auto-generated tests for DeployKeyCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DeployKeyCreatedEvent,
  DeployKeyCreatedEventSchema,
} from './deploy-key-created-event.js';

describe('DeployKeyCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeployKeyCreatedEventSchema).toBeDefined();
    expect(typeof DeployKeyCreatedEventSchema.parse).toBe('function');
    expect(typeof DeployKeyCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DeployKeyCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeployKeyCreatedEventTest = DeployKeyCreatedEvent;
