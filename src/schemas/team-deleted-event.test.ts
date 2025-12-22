/**
 * Auto-generated tests for TeamDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import { type TeamDeletedEvent, TeamDeletedEventSchema } from './team-deleted-event.js';

describe('TeamDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(TeamDeletedEventSchema).toBeDefined();
    expect(typeof TeamDeletedEventSchema.parse).toBe('function');
    expect(typeof TeamDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = TeamDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _TeamDeletedEventTest = TeamDeletedEvent;
