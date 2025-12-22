/**
 * Auto-generated tests for DiscussionCategoryChangedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type DiscussionCategoryChangedEvent,
  DiscussionCategoryChangedEventSchema,
} from './discussion-category-changed-event.js';

describe('DiscussionCategoryChangedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(DiscussionCategoryChangedEventSchema).toBeDefined();
    expect(typeof DiscussionCategoryChangedEventSchema.parse).toBe('function');
    expect(typeof DiscussionCategoryChangedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = DiscussionCategoryChangedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _DiscussionCategoryChangedEventTest = DiscussionCategoryChangedEvent;
