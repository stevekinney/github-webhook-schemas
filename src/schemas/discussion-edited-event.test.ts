/**
 * Auto-generated tests for DiscussionEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionEditedEvent,
  DiscussionEditedEventSchema,
} from './discussion-edited-event.js';

describe('DiscussionEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionEditedEventSchema).toBeDefined();
    expect(typeof DiscussionEditedEventSchema.parse).toBe('function');
    expect(typeof DiscussionEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionEditedEventTest = DiscussionEditedEvent;
