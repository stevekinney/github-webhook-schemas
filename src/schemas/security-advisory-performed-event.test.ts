/**
 * Auto-generated tests for SecurityAdvisoryPerformedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecurityAdvisoryPerformedEvent,
  SecurityAdvisoryPerformedEventSchema,
} from './security-advisory-performed-event.js';

describe('SecurityAdvisoryPerformedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecurityAdvisoryPerformedEventSchema).toBeDefined();
    expect(typeof SecurityAdvisoryPerformedEventSchema.parse).toBe('function');
    expect(typeof SecurityAdvisoryPerformedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SecurityAdvisoryPerformedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecurityAdvisoryPerformedEventTest = SecurityAdvisoryPerformedEvent;
