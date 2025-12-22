/**
 * Auto-generated tests for WorkflowJobCompletedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WorkflowJobCompletedEvent,
  WorkflowJobCompletedEventSchema,
} from './workflow-job-completed-event.js';

describe('WorkflowJobCompletedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WorkflowJobCompletedEventSchema).toBeDefined();
    expect(typeof WorkflowJobCompletedEventSchema.parse).toBe('function');
    expect(typeof WorkflowJobCompletedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WorkflowJobCompletedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WorkflowJobCompletedEventTest = WorkflowJobCompletedEvent;
