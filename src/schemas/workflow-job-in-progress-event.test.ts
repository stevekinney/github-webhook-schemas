/**
 * Auto-generated tests for WorkflowJobInProgressEvent schema
 * DO NOT MODIFY - regenerate with: bun run generate:schemas
 */

import { describe, expect, it } from 'bun:test';

import {
  type WorkflowJobInProgressEvent,
  WorkflowJobInProgressEventSchema,
} from './workflow-job-in-progress-event.js';

describe('WorkflowJobInProgressEventSchema', () => {
  it('should be a valid Zod schema', () => {
    expect(WorkflowJobInProgressEventSchema).toBeDefined();
    expect(typeof WorkflowJobInProgressEventSchema.parse).toBe('function');
    expect(typeof WorkflowJobInProgressEventSchema.safeParse).toBe('function');
  });

  it('should reject invalid data', () => {
    const result = WorkflowJobInProgressEventSchema.safeParse({ invalid: 'data' });
    expect(result.success).toBe(false);
  });
});

// Type-level test: ensure the type is exported and usable
export type _WorkflowJobInProgressEventTest = WorkflowJobInProgressEvent;
