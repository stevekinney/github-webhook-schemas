/**
 * Auto-generated tests for TeamEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type TeamEditedEvent, TeamEditedEventSchema } from './team-edited-event.js';

describe('TeamEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(TeamEditedEventSchema).toBeDefined();
    expect(typeof TeamEditedEventSchema.parse).toBe('function');
    expect(typeof TeamEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = TeamEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _TeamEditedEventTest = TeamEditedEvent;
