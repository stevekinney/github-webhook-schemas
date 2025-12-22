/**
 * Auto-generated tests for DiscussionUnpinnedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionUnpinnedEvent,
  DiscussionUnpinnedEventSchema,
} from './discussion-unpinned-event.js';

describe('DiscussionUnpinnedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionUnpinnedEventSchema).toBeDefined();
    expect(typeof DiscussionUnpinnedEventSchema.parse).toBe('function');
    expect(typeof DiscussionUnpinnedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionUnpinnedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionUnpinnedEventTest = DiscussionUnpinnedEvent;
