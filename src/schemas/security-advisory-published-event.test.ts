/**
 * Auto-generated tests for SecurityAdvisoryPublishedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecurityAdvisoryPublishedEvent,
  SecurityAdvisoryPublishedEventSchema,
} from './security-advisory-published-event.js';

describe('SecurityAdvisoryPublishedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecurityAdvisoryPublishedEventSchema).toBeDefined();
    expect(typeof SecurityAdvisoryPublishedEventSchema.parse).toBe('function');
    expect(typeof SecurityAdvisoryPublishedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SecurityAdvisoryPublishedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecurityAdvisoryPublishedEventTest = SecurityAdvisoryPublishedEvent;
