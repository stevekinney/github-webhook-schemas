/**
 * Auto-generated tests for DiscussionLabeledEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionLabeledEvent,
  DiscussionLabeledEventSchema,
} from './discussion-labeled-event.js';

describe('DiscussionLabeledEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionLabeledEventSchema).toBeDefined();
    expect(typeof DiscussionLabeledEventSchema.parse).toBe('function');
    expect(typeof DiscussionLabeledEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionLabeledEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionLabeledEventTest = DiscussionLabeledEvent;
