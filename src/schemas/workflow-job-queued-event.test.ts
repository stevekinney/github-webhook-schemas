/**
 * Auto-generated tests for WorkflowJobQueuedEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WorkflowJobQueuedEvent,
  WorkflowJobQueuedEventSchema,
} from './workflow-job-queued-event.js';

describe('WorkflowJobQueuedEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WorkflowJobQueuedEventSchema).toBeDefined();
    expect(typeof WorkflowJobQueuedEventSchema.parse).toBe('function');
    expect(typeof WorkflowJobQueuedEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WorkflowJobQueuedEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WorkflowJobQueuedEventTest = WorkflowJobQueuedEvent;
