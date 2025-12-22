/**
 * Auto-generated tests for TeamAddedToRepositoryEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type TeamAddedToRepositoryEvent,
  TeamAddedToRepositoryEventSchema,
} from './team-added-to-repository-event.js';

describe('TeamAddedToRepositoryEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(TeamAddedToRepositoryEventSchema).toBeDefined();
    expect(typeof TeamAddedToRepositoryEventSchema.parse).toBe('function');
    expect(typeof TeamAddedToRepositoryEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = TeamAddedToRepositoryEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _TeamAddedToRepositoryEventTest = TeamAddedToRepositoryEvent;
