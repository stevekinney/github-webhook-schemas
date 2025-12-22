/**
 * Auto-generated tests for MilestoneDeletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MilestoneDeletedEvent,
  MilestoneDeletedEventSchema,
} from './milestone-deleted-event.js';

describe('MilestoneDeletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MilestoneDeletedEventSchema).toBeDefined();
    expect(typeof MilestoneDeletedEventSchema.parse).toBe('function');
    expect(typeof MilestoneDeletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MilestoneDeletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MilestoneDeletedEventTest = MilestoneDeletedEvent;
