/**
 * Auto-generated tests for OrganizationDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type OrganizationDeletedEvent,
  OrganizationDeletedEventSchema,
} from './organization-deleted-event.js';

describe('OrganizationDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(OrganizationDeletedEventSchema).toBeDefined();
    expect(typeof OrganizationDeletedEventSchema.parse).toBe('function');
    expect(typeof OrganizationDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = OrganizationDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _OrganizationDeletedEventTest = OrganizationDeletedEvent;
