/**
 * Auto-generated tests for DiscussionUnlockedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionUnlockedEvent,
  DiscussionUnlockedEventSchema,
} from './discussion-unlocked-event.js';

describe('DiscussionUnlockedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionUnlockedEventSchema).toBeDefined();
    expect(typeof DiscussionUnlockedEventSchema.parse).toBe('function');
    expect(typeof DiscussionUnlockedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionUnlockedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionUnlockedEventTest = DiscussionUnlockedEvent;
