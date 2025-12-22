/**
 * Auto-generated tests for TeamCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type TeamCreatedEvent, TeamCreatedEventSchema } from './team-created-event.js';

describe('TeamCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(TeamCreatedEventSchema).toBeDefined();
    expect(typeof TeamCreatedEventSchema.parse).toBe('function');
    expect(typeof TeamCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = TeamCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _TeamCreatedEventTest = TeamCreatedEvent;
