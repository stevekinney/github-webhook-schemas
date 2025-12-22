/**
 * Auto-generated tests for OrganizationMemberInvitedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type OrganizationMemberInvitedEvent,
  OrganizationMemberInvitedEventSchema,
} from './organization-member-invited-event.js';

describe('OrganizationMemberInvitedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(OrganizationMemberInvitedEventSchema).toBeDefined();
    expect(typeof OrganizationMemberInvitedEventSchema.parse).toBe('function');
    expect(typeof OrganizationMemberInvitedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = OrganizationMemberInvitedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _OrganizationMemberInvitedEventTest = OrganizationMemberInvitedEvent;
