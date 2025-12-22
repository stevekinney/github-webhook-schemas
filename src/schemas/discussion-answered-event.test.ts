/**
 * Auto-generated tests for DiscussionAnsweredEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionAnsweredEvent,
  DiscussionAnsweredEventSchema,
} from './discussion-answered-event.js';

describe('DiscussionAnsweredEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionAnsweredEventSchema).toBeDefined();
    expect(typeof DiscussionAnsweredEventSchema.parse).toBe('function');
    expect(typeof DiscussionAnsweredEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionAnsweredEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionAnsweredEventTest = DiscussionAnsweredEvent;
