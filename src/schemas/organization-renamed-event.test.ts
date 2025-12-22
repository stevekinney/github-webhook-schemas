/**
 * Auto-generated tests for OrganizationRenamedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type OrganizationRenamedEvent,
  OrganizationRenamedEventSchema,
} from './organization-renamed-event.js';

describe('OrganizationRenamedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(OrganizationRenamedEventSchema).toBeDefined();
    expect(typeof OrganizationRenamedEventSchema.parse).toBe('function');
    expect(typeof OrganizationRenamedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = OrganizationRenamedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _OrganizationRenamedEventTest = OrganizationRenamedEvent;
