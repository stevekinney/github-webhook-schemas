/**
 * Auto-generated tests for WorkflowRunCompletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WorkflowRunCompletedEvent,
  WorkflowRunCompletedEventSchema,
} from './workflow-run-completed-event.js';

describe('WorkflowRunCompletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WorkflowRunCompletedEventSchema).toBeDefined();
    expect(typeof WorkflowRunCompletedEventSchema.parse).toBe('function');
    expect(typeof WorkflowRunCompletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WorkflowRunCompletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WorkflowRunCompletedEventTest = WorkflowRunCompletedEvent;
