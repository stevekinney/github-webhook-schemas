/**
 * Auto-generated tests for MilestoneEditedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MilestoneEditedEvent,
  MilestoneEditedEventSchema,
} from './milestone-edited-event.js';

describe('MilestoneEditedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MilestoneEditedEventSchema).toBeDefined();
    expect(typeof MilestoneEditedEventSchema.parse).toBe('function');
    expect(typeof MilestoneEditedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MilestoneEditedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MilestoneEditedEventTest = MilestoneEditedEvent;
