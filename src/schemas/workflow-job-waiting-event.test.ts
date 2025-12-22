/**
 * Auto-generated tests for WorkflowJobWaitingEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WorkflowJobWaitingEvent,
  WorkflowJobWaitingEventSchema,
} from './workflow-job-waiting-event.js';

describe('WorkflowJobWaitingEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WorkflowJobWaitingEventSchema).toBeDefined();
    expect(typeof WorkflowJobWaitingEventSchema.parse).toBe('function');
    expect(typeof WorkflowJobWaitingEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WorkflowJobWaitingEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WorkflowJobWaitingEventTest = WorkflowJobWaitingEvent;
