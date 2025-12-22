/**
 * Auto-generated tests for DiscussionUnansweredEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionUnansweredEvent,
  DiscussionUnansweredEventSchema,
} from './discussion-unanswered-event.js';

describe('DiscussionUnansweredEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionUnansweredEventSchema).toBeDefined();
    expect(typeof DiscussionUnansweredEventSchema.parse).toBe('function');
    expect(typeof DiscussionUnansweredEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionUnansweredEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionUnansweredEventTest = DiscussionUnansweredEvent;
