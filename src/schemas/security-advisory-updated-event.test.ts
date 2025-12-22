/**
 * Auto-generated tests for SecurityAdvisoryUpdatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecurityAdvisoryUpdatedEvent,
  SecurityAdvisoryUpdatedEventSchema,
} from './security-advisory-updated-event.js';

describe('SecurityAdvisoryUpdatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecurityAdvisoryUpdatedEventSchema).toBeDefined();
    expect(typeof SecurityAdvisoryUpdatedEventSchema.parse).toBe('function');
    expect(typeof SecurityAdvisoryUpdatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SecurityAdvisoryUpdatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecurityAdvisoryUpdatedEventTest = SecurityAdvisoryUpdatedEvent;
