/**
 * Auto-generated tests for DeployKeyDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DeployKeyDeletedEvent,
  DeployKeyDeletedEventSchema,
} from './deploy-key-deleted-event.js';

describe('DeployKeyDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DeployKeyDeletedEventSchema).toBeDefined();
    expect(typeof DeployKeyDeletedEventSchema.parse).toBe('function');
    expect(typeof DeployKeyDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DeployKeyDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DeployKeyDeletedEventTest = DeployKeyDeletedEvent;
