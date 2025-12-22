/**
 * Auto-generated tests for PullRequestMilestonedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type PullRequestMilestonedEvent,
  PullRequestMilestonedEventSchema,
} from './pull-request-milestoned-event.js';

describe('PullRequestMilestonedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(PullRequestMilestonedEventSchema).toBeDefined();
    expect(typeof PullRequestMilestonedEventSchema.parse).toBe('function');
    expect(typeof PullRequestMilestonedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = PullRequestMilestonedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _PullRequestMilestonedEventTest = PullRequestMilestonedEvent;
