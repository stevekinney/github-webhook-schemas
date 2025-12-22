/**
 * Auto-generated tests for OrganizationMemberAddedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type OrganizationMemberAddedEvent,
  OrganizationMemberAddedEventSchema,
} from './organization-member-added-event.js';

describe('OrganizationMemberAddedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(OrganizationMemberAddedEventSchema).toBeDefined();
    expect(typeof OrganizationMemberAddedEventSchema.parse).toBe('function');
    expect(typeof OrganizationMemberAddedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = OrganizationMemberAddedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _OrganizationMemberAddedEventTest = OrganizationMemberAddedEvent;
