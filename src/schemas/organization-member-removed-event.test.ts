/**
 * Auto-generated tests for OrganizationMemberRemovedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type OrganizationMemberRemovedEvent,
  OrganizationMemberRemovedEventSchema,
} from './organization-member-removed-event.js';

describe('OrganizationMemberRemovedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(OrganizationMemberRemovedEventSchema).toBeDefined();
    expect(typeof OrganizationMemberRemovedEventSchema.parse).toBe('function');
    expect(typeof OrganizationMemberRemovedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = OrganizationMemberRemovedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _OrganizationMemberRemovedEventTest = OrganizationMemberRemovedEvent;
