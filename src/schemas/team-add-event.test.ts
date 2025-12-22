/**
 * Auto-generated tests for TeamAddEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type TeamAddEvent, TeamAddEventSchema } from './team-add-event.js';

describe('TeamAddEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(TeamAddEventSchema).toBeDefined();
    expect(typeof TeamAddEventSchema.parse).toBe('function');
    expect(typeof TeamAddEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = TeamAddEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _TeamAddEventTest = TeamAddEvent;
