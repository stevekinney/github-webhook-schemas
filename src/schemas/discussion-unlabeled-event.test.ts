/**
 * Auto-generated tests for DiscussionUnlabeledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionUnlabeledEvent,
  DiscussionUnlabeledEventSchema,
} from './discussion-unlabeled-event.js';

describe('DiscussionUnlabeledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionUnlabeledEventSchema).toBeDefined();
    expect(typeof DiscussionUnlabeledEventSchema.parse).toBe('function');
    expect(typeof DiscussionUnlabeledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionUnlabeledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionUnlabeledEventTest = DiscussionUnlabeledEvent;
