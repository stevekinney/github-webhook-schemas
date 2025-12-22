/**
 * Auto-generated tests for DiscussionTransferredEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionTransferredEvent,
  DiscussionTransferredEventSchema,
} from './discussion-transferred-event.js';

describe('DiscussionTransferredEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionTransferredEventSchema).toBeDefined();
    expect(typeof DiscussionTransferredEventSchema.parse).toBe('function');
    expect(typeof DiscussionTransferredEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionTransferredEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionTransferredEventTest = DiscussionTransferredEvent;
