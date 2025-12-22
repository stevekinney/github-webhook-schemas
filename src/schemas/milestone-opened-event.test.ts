/**
 * Auto-generated tests for MilestoneOpenedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MilestoneOpenedEvent,
  MilestoneOpenedEventSchema,
} from './milestone-opened-event.js';

describe('MilestoneOpenedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MilestoneOpenedEventSchema).toBeDefined();
    expect(typeof MilestoneOpenedEventSchema.parse).toBe('function');
    expect(typeof MilestoneOpenedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MilestoneOpenedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MilestoneOpenedEventTest = MilestoneOpenedEvent;
