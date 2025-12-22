/**
 * Auto-generated tests for WatchStartedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WatchStartedEvent,
  WatchStartedEventSchema,
} from './watch-started-event.js';

describe('WatchStartedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WatchStartedEventSchema).toBeDefined();
    expect(typeof WatchStartedEventSchema.parse).toBe('function');
    expect(typeof WatchStartedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WatchStartedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WatchStartedEventTest = WatchStartedEvent;
