/**
 * Auto-generated tests for TeamRemovedFromRepositoryEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type TeamRemovedFromRepositoryEvent,
  TeamRemovedFromRepositoryEventSchema,
} from './team-removed-from-repository-event.js';

describe('TeamRemovedFromRepositoryEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(TeamRemovedFromRepositoryEventSchema).toBeDefined();
    expect(typeof TeamRemovedFromRepositoryEventSchema.parse).toBe('function');
    expect(typeof TeamRemovedFromRepositoryEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = TeamRemovedFromRepositoryEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _TeamRemovedFromRepositoryEventTest = TeamRemovedFromRepositoryEvent;
