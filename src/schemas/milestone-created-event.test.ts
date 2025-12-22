/**
 * Auto-generated tests for MilestoneCreatedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type MilestoneCreatedEvent,
  MilestoneCreatedEventSchema,
} from './milestone-created-event.js';

describe('MilestoneCreatedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(MilestoneCreatedEventSchema).toBeDefined();
    expect(typeof MilestoneCreatedEventSchema.parse).toBe('function');
    expect(typeof MilestoneCreatedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = MilestoneCreatedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _MilestoneCreatedEventTest = MilestoneCreatedEvent;
