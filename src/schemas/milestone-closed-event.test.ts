/**
 * Auto-generated tests for MilestoneClosedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MilestoneClosedEvent,
  MilestoneClosedEventSchema,
} from './milestone-closed-event.js';

describe('MilestoneClosedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MilestoneClosedEventSchema).toBeDefined();
    expect(typeof MilestoneClosedEventSchema.parse).toBe('function');
    expect(typeof MilestoneClosedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MilestoneClosedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MilestoneClosedEventTest = MilestoneClosedEvent;
