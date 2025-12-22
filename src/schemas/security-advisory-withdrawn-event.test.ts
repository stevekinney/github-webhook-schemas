/**
 * Auto-generated tests for SecurityAdvisoryWithdrawnEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type SecurityAdvisoryWithdrawnEvent,
  SecurityAdvisoryWithdrawnEventSchema,
} from './security-advisory-withdrawn-event.js';

describe('SecurityAdvisoryWithdrawnEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(SecurityAdvisoryWithdrawnEventSchema).toBeDefined();
    expect(typeof SecurityAdvisoryWithdrawnEventSchema.parse).toBe('function');
    expect(typeof SecurityAdvisoryWithdrawnEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = SecurityAdvisoryWithdrawnEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _SecurityAdvisoryWithdrawnEventTest = SecurityAdvisoryWithdrawnEvent;
