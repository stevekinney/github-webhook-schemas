/**
 * Auto-generated tests for WorkflowRunRequestedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WorkflowRunRequestedEvent,
  WorkflowRunRequestedEventSchema,
} from './workflow-run-requested-event.js';

describe('WorkflowRunRequestedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WorkflowRunRequestedEventSchema).toBeDefined();
    expect(typeof WorkflowRunRequestedEventSchema.parse).toBe('function');
    expect(typeof WorkflowRunRequestedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WorkflowRunRequestedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WorkflowRunRequestedEventTest = WorkflowRunRequestedEvent;
